// SPPGForm.jsx

import React, { useState } from 'react';

const SPPGForm = () => {
  const [formData, setFormData] = useState({
    id_sppg: '',
    nama_sppg: '',
    wilayah_layanan: '',
    kontak: '',
    lokasi: ''
  });
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const API_ENDPOINT = 'http://localhost:5000/api/sppg';

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setIsLoading(true);

    try {
      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
          // Penting: Mengatur Content-Type untuk mengirim JSON
          'Content-Type': 'application/json', 
        },
        // Mengubah objek JavaScript menjadi string JSON
        body: JSON.stringify(formData), 
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(`✅ Data SPPG berhasil disimpan! ID: ${data.data.id_sppg}`);
        setFormData({ id_sppg: '', nama_sppg: '', wilayah_layanan: '', kontak: '', lokasi: '' }); // Reset form
      } else {
        // Tangani error validasi dari backend (misalnya, id_sppg sudah ada)
        setMessage(`❌ Gagal: ${data.message || 'Terjadi kesalahan server.'}`);
      }
    } catch (error) {
      console.error('Network Error:', error);
      setMessage('❌ Terjadi kesalahan jaringan.');
    } finally {
      setIsLoading(false);
    }
  };

  const isButtonDisabled = isLoading;
  const messageColor = message.includes('berhasil') 
    ? 'text-green-500 bg-green-100 border-green-400'
    : message.includes('Gagal') || message.includes('kesalahan') 
    ? 'text-red-500 bg-red-100 border-red-400' 
    : 'text-gray-600 bg-gray-100 border-gray-300';

  const inputClass = "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500";

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-xl rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">
        Input Data SPPG
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Input ID SPPG */}
        <div>
          <label htmlFor="id_sppg" className="block text-sm font-medium text-gray-700">ID SPPG (PK)</label>
          <input type="text" id="id_sppg" name="id_sppg" value={formData.id_sppg} onChange={handleChange} required className={inputClass}/>
        </div>

        {/* Input Nama SPPG */}
        <div>
          <label htmlFor="nama_sppg" className="block text-sm font-medium text-gray-700">Nama SPPG</label>
          <input type="text" id="nama_sppg" name="nama_sppg" value={formData.nama_sppg} onChange={handleChange} required className={inputClass}/>
        </div>

        {/* Input Wilayah Layanan */}
        <div>
          <label htmlFor="wilayah_layanan" className="block text-sm font-medium text-gray-700">Wilayah Layanan</label>
          <input type="text" id="wilayah_layanan" name="wilayah_layanan" value={formData.wilayah_layanan} onChange={handleChange} required className={inputClass}/>
        </div>

        {/* Input Kontak */}
        <div>
          <label htmlFor="kontak" className="block text-sm font-medium text-gray-700">Kontak</label>
          <input type="text" id="kontak" name="kontak" value={formData.kontak} onChange={handleChange} required className={inputClass}/>
        </div>

        {/* Input Lokasi */}
        <div>
          <label htmlFor="lokasi" className="block text-sm font-medium text-gray-700">Lokasi</label>
          <input type="text" id="lokasi" name="lokasi" value={formData.lokasi} onChange={handleChange} required className={inputClass}/>
        </div>

        {/* Tombol Simpan */}
        <button 
          type="submit" 
          disabled={isButtonDisabled}
          className={`w-full py-3 px-4 rounded-lg font-semibold transition duration-300 ease-in-out shadow-md
            ${isButtonDisabled 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-lg'
            }`}
        >
          {isLoading ? 'Menyimpan...' : 'Simpan Data SPPG'}
        </button>
      </form>

      {/* Area Status Pesan */}
      {message && (
        <div className={`mt-6 p-3 rounded-lg border text-sm ${messageColor}`} role="alert">
          {message}
        </div>
      )}
    </div>
  );
};

export default SPPGForm;