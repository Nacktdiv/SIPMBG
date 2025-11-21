# 📱 SIPMBG (Sistem Informasi Pengelolaan Menu Bergizi)

Aplikasi Web Monitoring Program Makan Bergizi Gratis **berbasis Image Classification** untuk **transparansi validasi menu** dan **kepatuhan keuangan SPPG**.

---

## 🚀 Instalasi dan Peluncuran

Bagian ini memandu Anda langkah demi langkah cara mengunduh kode sumber, menyiapkan lingkungan, dan menjalankan aplikasi SIPMBG secara lokal.

---

## 1. Prasyarat Wajib

Pastikan Anda telah menginstal tools pengembangan dasar berikut:

- **Node.js**: Versi direkomendasikan adalah v18 atau lebih tinggi.
- **pnpm**: Package manager yang digunakan di proyek ini untuk instalasi dependensi yang efisien.

Jika Anda belum memiliki pnpm, instal secara global menggunakan npm:

```bash
npm install -g pnpm
```

## 2. Mengunduh Kode Sumber

Anda dapat mengunduh (clone) kode sumber dari repositori GitHub ini.

### Kloning Repositori:

```bash
git clone [URL_REPOSITORY_ANDA]
```

### Masuk ke Direktori Proyek

```bash
cd client
```

## 3. Instalasi Dependensi

Gunakan pnpm untuk menginstal semua pustaka dan paket yang dibutuhkan proyek.

```bash
pnpm install
```

💡 Catatan: Proses ini mungkin memakan waktu beberapa menit tergantung koneksi internet Anda.

## 5. Menjalankan Aplikasi

Setelah semua dependensi terinstal dan konfigurasi selesai, Anda dapat meluncurkan aplikasi dalam mode pengembangan.

```bash
pnpm dev
```

Setelah perintah dijalankan, perhatikan output konsol. Aplikasi akan terbuka di browser Anda pada alamat berikut:

👉 Akses Aplikasi:
http://localhost:5173

## Alur Sistem SIPMBG

SIPMBG adalah sistem monitoring menu Makan Bergizi Gratis yang menggabungkan input data pemerintah, laporan SPPG, unggahan siswa, serta validasi otomatis menggunakan AI Image Classification. Berikut alur ringkasnya:

---

### 1. Penginputan Data Awal

Pemerintah mengunggah data anggaran resmi dan standar MBG.

SPPG memasukkan RAB dan menu harian rencana.

Semua data disimpan ke database sebagai dasar validasi.

---

### 2. Validasi Menu Menggunakan AI

Siswa mengunggah foto makanan aktual yang diterima.

Sistem mengirim foto + data menu rencana ke AI.

AI mengembalikan identifikasi jenis makanan dan tingkat kesesuaian dengan menu rencana.

Hasil disimpan ke database.

---

### 3. Deteksi Ketidaksesuaian

Sistem menjalankan deteksi anomali berbasis citra untuk melihat perbedaan signifikan antara foto aktual dan menu rencana.

Jika terdapat ketidaksesuaian, sistem mengirimkan notifikasi otomatis ke pengawas dan pihak SPPG.

---

### 4. Publikasi & Transparansi

Dashboard publik menampilkan:

Menu rencana vs menu aktual,

Hasil validasi AI,

Data sekolah/SPPG.

Dapat diakses oleh publik, pengawas, dan pemerintah untuk memastikan transparansi.

---

### 5. Pengaduan & Tindak Lanjut

Publik dapat mengirim laporan atau keluhan terkait menu.

Sistem memverifikasi laporan dan menyimpan status penanganannya.

Umpan balik mengenai perkembangan laporan ditampilkan kepada publik.
