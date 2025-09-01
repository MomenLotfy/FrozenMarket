// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";

const firebaseConfig = {
   apiKey: "AIzaSyCFk_WlW4qHcSbsLSHeWUTfGsc5W0FSE8A",
  authDomain: "frozenmarket-5c9df.firebaseapp.com",
  projectId: "frozenmarket-5c9df",
  storageBucket: "frozenmarket-5c9df.firebasestorage.app",
  messagingSenderId: "847658049541",
  appId: "1:847658049541:web:6f4cd551a12d5e45b5bc6c",
  measurementId: "G-32ZC3B3KPT"
};

export const app = initializeApp(firebaseConfig);
