# Implement a Root-Level Request Logger Middleware
**Middleware** adalah fungsi yang berjalan di antara permintaan (request) dan respon dalam siklus request-response di aplikasi **Express.js**. Dengan middleware, kita bisa menangani banyak hal seperti logging, autentikasi, validasi data, error handling, dan masih banyak lagi secara terstruktur dan terpisah dari kode utama aplikasi. Ini membuat aplikasi lebih modular dan mudah dipelihara.

Middleware menerima 3 argumen utama:

- Request (req) : Objek yang mewakili permintaan dari klien.
- Response (res): Objek yang digunakan untuk mengirimkan respon kembali ke klien.
- Next (next)   : Fungsi yang digunakan untuk melanjutkan eksekusi middleware berikutnya.

## Fungsi Middleware
Fungsi middleware bisa melakukan beberapa tugas, seperti:
- Menambahkan informasi ke dalam objek request atau response.
- Mengakhiri siklus dengan mengirimkan respon jika kondisi tertentu terpenuhi.
-  Jika middleware tidak mengakhiri siklus (tidak mengirimkan respon), maka fungsi next() harus dipanggil untuk melanjutkan ke middleware berikutnya.

Contoh sederhana middleware:
```js
function(req, res, next) {
  console.log("I'm a middleware...");
  next(); // calling middleware next
}
```