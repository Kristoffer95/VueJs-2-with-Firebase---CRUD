import { initializeApp } from 'firebase';

const app = initializeApp({
  apiKey: "AIzaSyBJws5ijR06SDWS7m3sKw9K6y4R-wKhVqY",
  authDomain: "fir-vue-130a0.firebaseapp.com",
  databaseURL: "https://fir-vue-130a0.firebaseio.com",
  projectId: "fir-vue-130a0",
  storageBucket: "fir-vue-130a0.appspot.com",
  messagingSenderId: "956763133949"
});

export const db = app.database();
export const namesRef = db.ref('names');
