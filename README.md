# Fauzan Alvin Mubarok — Portfolio

Portofolio React + Vite dengan galeri 11 project, filter kategori, pengalaman, pendidikan, empat sertifikat, dan navigasi responsif. Foto profil menggunakan foto asli tanpa kotak “Available for work”.

## Website

- Portofolio versi baru: https://corvex-byte-project-demos.ojanalvin11121.chatgpt.site/portfolio/
- Koleksi sembilan demo CORVEX BYTE: https://corvex-byte-project-demos.ojanalvin11121.chatgpt.site/
- Alamat GitHub Pages lama: https://fauzanalvinmubarok.github.io/

ZIP ini memperbarui source portofolio. Situs GitHub Pages lama baru berubah setelah file portofolio diperbarui pada repository yang sama.

## Project

1. CORVEX Market — marketplace dengan pelanggan, penjual, dan admin.
2. Sistem Kearsipan Buku Tanah — ATR/BPN Kabupaten Pangandaran.
3. Smart Secure QR Code — penelitian Universitas Siliwangi.
4. Sudut Barber — booking barbershop.
5. Ruang Temu — pemesanan tiket dan QR check-in.
6. Sigap Layanan Rumah — pemesanan jasa.
7. Meja Rasa — pemesanan restoran.
8. Ruang Sela — café interaktif.
9. Karakter Kopi — company profile café.
10. Karsa Bangun — company profile kontraktor.
11. Nusa Presisi — company profile manufaktur.

Link kearsipan dan Smart QR tetap memakai alamat project sebelumnya. Sembilan demo baru di-host terpisah dengan repository source privat; ZIP portofolio tidak berisi source aplikasi-aplikasi tersebut, hanya metadata, gambar preview, dan URL.

Demo memakai logika aplikasi asli dengan SQLite yang berjalan lokal di browser. Akun, pesanan, stok, dan perubahan demo tersimpan di browser pengunjung; data tidak dibagikan antar perangkat. Panel “Demo interaktif” menyediakan akun admin, akun penjual bila tersedia, dan reset project. Transaksi, booking, serta pesan tidak dikirim ke bisnis sungguhan. Gateway pembayaran eksternal tidak dikonfigurasi; gunakan COD atau transfer demo dan verifikasi admin. Browser modern dengan JavaScript, WebAssembly, dan penyimpanan lokal diperlukan.

Source privat menghindari pembukaan repository aplikasi. JavaScript, CSS, gambar, dan sertifikat yang dikirim ke browser tetap dapat diperiksa atau disalin. Tidak ada perlindungan mutlak terhadap penyalinan frontend.

## Sertifikat

- MikroTik Certified Network Associate (MTCNA), No. 2405NA3257, terbit 31 Mei 2024, berlaku tiga tahun.
- Certified Cybersecurity Educator Professional (CCEP), Red Team Leaders, 6 Januari 2026.
- Certified Threat Intelligence & Governance Analyst (CTIGA), Red Team Leaders, 6 Januari 2026.
- Google Cloud Computing Foundations Certificate, Google Cloud, 6 Desember 2024.

Dokumen asli ada di `public/certificates/`. Tanggal mengacu pada sertifikat yang diberikan. CV dan portfolio PDF yang sudah ada tetap disertakan.

## Jalankan lokal

Gunakan Node.js 22.12+ (atau 24+). Ekstrak ZIP, buka terminal pada folder yang memiliki `package.json`, lalu jalankan:

```bash
npm ci
npm run dev
```

Build produksi:

```bash
npm run build
```

Metadata project ada di `src/data.js`; tampilan di `src/App.jsx` dan `src/styles.css`. URL demo dapat diganti melalui `VITE_DEMO_BASE_URL` sebelum build (contoh di `.env.example`). Font DM Sans dan Fraunces disediakan lokal beserta lisensinya.

## Memperbarui GitHub Pages

Salin isi folder portofolio ini ke checkout repository `fauzanalvinmubarok.github.io`, termasuk `public/`, `src/`, `package.json`, `package-lock.json`, `index.html`, `vite.config.js`, dan workflow di `.github/`. Jalankan `npm ci` dan `npm run build` untuk memeriksa build, lalu commit dan push ke branch `main` repository yang sudah ada. Workflow GitHub Actions akan menerbitkan portofolio.

Source sembilan project demo tidak perlu diunggah ke repository GitHub Pages. URL demo sudah tertanam dalam data portofolio.

Hosting demo menggunakan Sites dan kuota akun yang tersedia, tanpa membeli hosting atau domain tambahan. Ketersediaan dan kuota mengikuti ketentuan layanan; ini bukan jaminan hosting gratis selamanya.

Build produksi dan alur API demo diperiksa secara otomatis. Tampilan di perangkat/browser nyata belum diuji pada sesi ini karena fasilitas browser QA tidak tersedia.

© 2026 Fauzan Alvin Mubarok
