# Fauzan Alvin Mubarok — Portfolio

Portofolio React + Vite dengan galeri 11 project, filter kategori, pengalaman, pendidikan, empat sertifikat, dan navigasi responsif. Foto profil menggunakan foto asli tanpa kotak “Available for work”.

## Website

- Portofolio utama: https://fauzanalvinmubarok.github.io/
- Sembilan demo CORVEX BYTE dapat dibuka langsung dari kartu project pada halaman portofolio.

## Project

1. CORVEX Market — https://contoh-ecommerce.fauzandemos.workers.dev/
2. Sistem Kearsipan Buku Tanah — https://arsy-alpha.vercel.app/login
3. Smart Secure QR Code — https://smart-secure-qrcode.netlify.app/
4. Sudut Barber Studio — https://contoh-barbershop.fauzandemos.workers.dev/
5. Ruang Temu — https://contoh-tiket.fauzandemos.workers.dev/
6. Sigap Layanan Rumah — https://contoh-jasa.fauzandemos.workers.dev/
7. Meja Rasa — https://contoh-restoran.fauzandemos.workers.dev/
8. Ruang Sela — https://contohcafeinteraktif.netlify.app/
9. Karakter Kopi — https://contohcafe.netlify.app/
10. Karsa Bangun — https://contohkontraktor.netlify.app/
11. Nusa Presisi — https://contohmanufaktur.netlify.app/

Sistem Kearsipan dan Smart Secure QR Code tetap memakai alamat project yang sudah tersedia sebelumnya. Sembilan demo CORVEX BYTE di-host terpisah melalui Netlify dan Cloudflare Workers; repository portofolio hanya menyimpan metadata, gambar preview, dan URL demo, bukan source aplikasi demo tersebut.

CORVEX Market mencakup alur checkout dan integrasi Midtrans Sandbox untuk demonstrasi pembayaran online. Jangan gunakan dana nyata pada environment testing/sandbox.

## Sertifikat

- MikroTik Certified Network Associate (MTCNA), No. 2405NA3257, terbit 31 Mei 2024, berlaku tiga tahun.
- Certified Cybersecurity Educator Professional (CCEP), Red Team Leaders, 6 Januari 2026.
- Certified Threat Intelligence & Governance Analyst (CTIGA), Red Team Leaders, 6 Januari 2026.
- Google Cloud Computing Foundations Certificate, Google Cloud, 6 Desember 2024.

Dokumen asli ada di `public/certificates/`. CV dan portfolio PDF yang sudah ada tetap disertakan.

## Jalankan lokal

Gunakan Node.js yang kompatibel dengan Vite 8. Ekstrak ZIP, buka terminal pada folder yang memiliki `package.json`, lalu jalankan:

```bash
npm ci
npm run dev
```

Build produksi:

```bash
npm run build
```

Metadata dan URL project ada di `src/data.js`; tampilan di `src/App.jsx` dan `src/styles.css`.

## Memperbarui GitHub Pages

Salin isi folder portofolio ini ke checkout repository `fauzanalvinmubarok.github.io`, termasuk `public/`, `src/`, `package.json`, `package-lock.json`, `index.html`, `vite.config.js`, dan `.github/`. Jalankan `npm ci` dan `npm run build` untuk memeriksa build, lalu commit dan push ke branch `main`. Workflow GitHub Actions akan menerbitkan portofolio.

Source sembilan project demo tidak perlu diunggah ke repository GitHub Pages karena URL deployment sudah tertanam langsung pada `src/data.js`.

© 2026 Fauzan Alvin Mubarok
