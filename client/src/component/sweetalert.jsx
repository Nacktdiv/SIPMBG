// src/utils/alerts.js
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const warnaLatar = "#d7c097"
const baseConfirmButton = 'font-semibold py-2 px-6 rounded-lg transition duration-150 ease-in-out shadow-md';
const baseCancelButton = 'font-semibold py-2 px-6 rounded-lg transition duration-150 ease-in-out shadow-md';

// Opsi SweetAlert dasar untuk memudahkan penulisan
const baseSwalOptions = {
  buttonsStyling: false, // mematikan settingan bawaan sa2
  background: warnaLatar,
  customClass: {
    popup: 'rounded-xl shadow-2xl backdrop-blur-sm bg-black ', 
    container: 'backdrop-blur-sm ',
    confirmButton: baseConfirmButton,
    cancelButton: baseCancelButton,
  },
};

export const showSuccesAlert = (title, text) => {
  MySwal.fire({
    ...baseSwalOptions,
    title: <div className="text-2xl font-bold text-green-600">{title}</div>,
    html: <div className="text-gray-700 mt-2">{text}</div>,
    icon: 'success',
    confirmButtonText: 'OK!',
    customClass: {
      ...baseSwalOptions.customClass,
      confirmButton: `${baseConfirmButton} bg-green-500 hover:bg-green-600 text-white`,
    },
  });
};

export const showErrorAlert = (title, text) => {
  MySwal.fire({
    ...baseSwalOptions,
    title: <div className="text-2xl font-bold text-red-600">{title}</div>,
    html: <div className="text-gray-700 mt-2">{text}</div>,
    icon: 'error',
    confirmButtonText: 'OK!',
    customClass: {
      ...baseSwalOptions.customClass,
      confirmButton: `${baseConfirmButton} bg-red-500 hover:bg-red-600 text-white`,
    },
  });
};