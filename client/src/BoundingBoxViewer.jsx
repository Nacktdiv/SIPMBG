import { useRef, useEffect } from "react";

/** generate deterministic color for a string (class name) */
function colorFromString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const h = Math.abs(hash) % 360; // hue
  return `hsl(${h} 80% 45%)`; // saturation lightness
}

/** draw rounded rect label background */
function drawLabelBg(ctx, x, y, text) {
  const paddingX = 6;
  const paddingY = 4;
  ctx.font = "16px Inter, Arial";
  const metrics = ctx.measureText(text);
  const textW = metrics.width;
  const w = textW + paddingX * 2;
  const h = 20 + paddingY * 2;
  ctx.fillRect(x, y - h, w, h);
  return { w, h };
}

export default function BoundingBoxViewer({
  imageFile,         // File or url string
  imageUrl,          // optional: direct url (if using local path / transformed link)
  predictions = [],  // array from Roboflow
  todayMenu = [],    // array of required menu items
  completenessPercent // optional precomputed percent
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!imageFile && !imageUrl) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const img = new Image();
    img.crossOrigin = "anonymous";
    if (imageUrl) img.src = imageUrl;
    else img.src = URL.createObjectURL(imageFile);

    img.onload = () => {
      // set canvas size to natural size of image (or scale to fit container)
      canvas.width = img.width;
      canvas.height = img.height;

      // draw image
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      // compute detected class names
      const detected = predictions.map(p => p.class);
      const found = todayMenu.filter(m => detected.includes(m));
      const missing = todayMenu.filter(m => !detected.includes(m));
      const completeness = Math.round((found.length / Math.max(1, todayMenu.length)) * 100);

      // draw overall completeness badge (top-left)
      const badgeText = `${found.length}/${todayMenu.length} (${completeness}%)`;
      ctx.fillStyle = "rgba(0,0,0,0.6)";
      ctx.fillRect(8, 8, 140, 32);
      ctx.fillStyle = "#fff";
      ctx.font = "16px Inter, Arial";
      ctx.fillText(`Kelengkapan: ${badgeText}`, 14, 30);

      // for each prediction: draw box, label, and "completeness percent" next to box
      predictions.forEach(pred => {
        const { x, y, width, height, class: label, confidence } = pred;

        // Roboflow returns center x,y
        const left = x - width / 2;
        const top = y - height / 2;

        // color per class
        const color = colorFromString(String(label));
        ctx.strokeStyle = color;
        ctx.lineWidth = Math.max(2, Math.round(canvas.width / 500));
        ctx.setLineDash([]); // solid
        ctx.strokeRect(left, top, width, height);

        // label background
        ctx.fillStyle = color;
        ctx.globalAlpha = 0.85;
        // draw label bg slightly above box
        const labelText = `${label} ${(confidence * 100).toFixed(1)}%`;
        const padding = 6;
        ctx.font = "16px Inter, Arial";
        const textWidth = ctx.measureText(labelText).width;
        const bgLeft = left;
        const bgTop = Math.max(16, top - 10);
        const bgW = textWidth + padding * 2;
        const bgH = 22;
        ctx.fillRect(bgLeft - 1, bgTop - bgH + 6, bgW + 2, bgH);

        // draw label text
        ctx.globalAlpha = 1;
        ctx.fillStyle = "#fff";
        ctx.fillText(labelText, bgLeft + padding, bgTop + 12);

        // draw completeness percent next to box (right side)
        const compText = `${completeness}% overall`;
        ctx.font = "14px Inter, Arial";
        ctx.fillStyle = "#000";
        // small white pill background
        const pillW = ctx.measureText(compText).width + 12;
        const pillH = 20;
        const pillX = left + width + 6; // right of box
        const pillY = top + 18;
        ctx.fillStyle = "rgba(255,255,255,0.9)";
        ctx.fillRect(pillX - 1, pillY - pillH + 4, pillW + 2, pillH);
        ctx.fillStyle = "#111";
        ctx.fillText(compText, pillX + 6, pillY);

      });

      // done
    };

    return () => {
      // revoke object url if used
      if (imageFile) URL.revokeObjectURL(img.src);
    };
  }, [imageFile, imageUrl, predictions, todayMenu, completenessPercent]);

  return (
    <div style={{ overflow: "auto", maxWidth: "100%" }}>
      <canvas ref={canvasRef} style={{ maxWidth: "100%", border: "1px solid #ddd" }} />
    </div>
  );
}
