import React, { useState, useEffect } from 'react';
import { IoImageOutline } from 'react-icons/io5';

// --- Ikon SVG Placeholder (Pengganti IoImageOutline) ---
// Digunakan saat gambar belum dimuat. Diganti dengan SVG inline agar tidak ada error.
const PlaceholderIcon = ({ className = "w-10 h-10 text-gray-400" }) => (
  <IoImageOutline/>
);


// --- Komponen 1: Skeleton (Kerangka Pemuatan) ---
// Menampilkan kerangka abu-abu dengan efek pulse (berkedip)
const SkeletonImage = ({ containerClasses, iconClasses }) => {
  return (
    <div className={`${containerClasses} overflow-hidden shadow-sm`}>
      {/* Efek shimmer menggunakan animate-pulse Tailwind */}
      <div className="animate-pulse flex h-full items-center justify-center bg-gray-200">
        <PlaceholderIcon className={iconClasses} />
        <p className="mt-2 text-sm text-gray-600">
          Silakan Pilih Lokasi dan Waktu untuk Melihat Menu Hari Ini
        </p>
      </div>
    </div>
  );
};


// --- Komponen 2: Image Loader (Komponen Utama yang Menangani Logika) ---
/**
 * Komponen ImageLoader universal untuk menampilkan gambar dengan Skeleton Loading.
 * * @param {string} src - URL sumber gambar.
 * @param {string} alt - Teks alternatif untuk gambar.
 * @param {string} className - Kelas Tailwind CSS untuk styling gambar (misalnya w-full h-48 object-cover).
 * @param {string} skeletonClassName - Kelas untuk styling skeleton (default sama dengan className).
 */
export const ImageLoader = ({ 
  src, 
  alt, 
  className, 
  skeletonClassName = className 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
    setError(false);

    
    if (src) {
        // Menggunakan objek Image browser untuk memuat gambar tanpa memblokir UI
        const img = new window.Image();
        
        img.onload = () => {
            setIsLoaded(true);
            setError(false);
        };

        img.onerror = () => {
            setIsLoaded(true); 
            setError(true);
        };

        img.src = src;
    }

    return () => {
      // Cleanup function
      if (src) {
        const img = new window.Image();
        img.src = src;
        img.onload = null;
        img.onerror = null;
      }
    };
  }, [src]);

  if (error) {
    // Tampilan jika terjadi error pemuatan
    return (
      <div className={`${skeletonClassName} flex items-center justify-center bg-red-100 border-2 border-red-400 text-red-700`}>
        <p className="text-xs font-medium text-center">Gagal Muat Gambar</p>
      </div>
    );
  }

  if (!isLoaded || !src) {
    // Tampilkan skeleton jika sedang memuat atau src kosong
    return <SkeletonImage containerClasses={skeletonClassName} iconClasses="w-8 h-8 text-gray-400" />;
  }

  // Tampilkan gambar asli dengan transisi opacity halus
  return (
    <img
      src={src}
      alt={alt}
      className={`${className} object-cover shadow-md transition-opacity duration-500`}
      style={{ opacity: isLoaded ? 1 : 0 }} 
    />
  );
};

export default ImageLoader