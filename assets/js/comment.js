import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import {
  getDatabase,
  ref,
  push,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBCptjoTkBoZ4epUw2hYqu2i6IYi4C7cfE",
  authDomain: "portfolio-mayoni-2026.firebaseapp.com",
  databaseURL:
    "https://portfolio-mayoni-2026-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "portfolio-mayoni-2026",
  storageBucket: "portfolio-mayoni-2026.firebasestorage.app",
  messagingSenderId: "989687636236",
  appId: "1:989687636236:web:fc428f0c5639657fb7e929",
};

// Init Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Ambil elemen form
const form = document.getElementById("commentForm");
const nameInput = document.getElementById("nameInput");
const messageInput = document.getElementById("messageInput");
const statusMsg = document.getElementById("messageStatus");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = nameInput.value.trim();
  const message = messageInput.value.trim();

  if (!name || !message) {
    statusMsg.innerText = "⚠️ Nama dan pesan tidak boleh kosong.";
    return;
  }

  const commentRef = ref(database, "comments");

  push(commentRef, {
    name: name,
    message: message,
    time: new Date().toISOString(),
  })
    .then(() => {
      statusMsg.innerText = "✅ Pesan berhasil dikirim!";
      form.reset();
    })
    .catch((error) => {
      statusMsg.innerText = "❌ Gagal mengirim pesan.";
      console.error(error);
    });
});
