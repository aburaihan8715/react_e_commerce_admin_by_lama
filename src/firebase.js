import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyA7CdvrabNSgbk4U6TpUFI1nFtZMF0IDw4',
  authDomain: 'react-e-commerce-by-lama.firebaseapp.com',
  projectId: 'react-e-commerce-by-lama',
  storageBucket: 'react-e-commerce-by-lama.appspot.com',
  messagingSenderId: '169610571556',
  appId: '1:169610571556:web:87e7f49a3fa7db6eae0db1',
};

export const app = initializeApp(firebaseConfig);
