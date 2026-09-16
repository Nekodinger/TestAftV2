/* ============================================================
   Konfigurasi bersama — index.html (siswa) & teacher.html (guru)
   GANTI backendUrl dengan URL /exec dari deployment Apps Script
   Anda setelah mengikuti langkah di README.md.
   ============================================================ */
window.EXAM_CONFIG = {
  // Tempel URL Web App Apps Script Anda di sini, contoh:
  // "https://script.google.com/macros/s/AKfycbx.../exec"
  backendUrl: "https://script.google.com/macros/s/AKfycbzJSPIIvnL0SzsYrcuzezyAVBBTbf8VaY_d9_EC-XqtRsw5PJFHajny5ExnfAS1V2-TIw/exec",

  examTitle: "QUIZ",

  // Berapa kali pelanggaran (total, semua jenis) sebelum ujian
  // seorang siswa otomatis dikumpulkan.
  maxViolationsBeforeAutoSubmit: 6,

  // Seberapa sering status siswa dikirim ke backend (ms)
  heartbeatIntervalMs: 10000,

  // Seberapa sering Panel Guru menarik ulang data roster (ms)
  teacherPollIntervalMs: 8000
};
