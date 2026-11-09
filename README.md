# Portofolio — Muhammad Ihsar Fatiha

Satu halaman, dibangun dengan React + Vite dan Tailwind CSS v4. Tanpa router,
tanpa pustaka UI, dan tanpa layanan pihak ketiga untuk formulir kontak.

Tampilan mengikuti desain referensi di folder `Ihsar Data Science Portfolio`:
navbar lengket, hero dengan foto bulat, bagian dengan judul di tengah, kartu
keterampilan, timeline, kartu proyek bergradien, dan formulir kontak.

## Menjalankan

```bash
npm install
npm run dev      # http://localhost:5173
```

## Membangun

```bash
npm run build     # hasil ke folder dist/
npm run preview   # cek hasil build di http://localhost:4173
```

## Mengedit isi

**Semua teks, angka, tautan, dan data kontak ada di `src/data/profile.js`.**
Tidak perlu membuka file komponen.

### Satu aturan penanda

Nilai yang masih diawali tanda `[` berarti **belum diisi**. Nilai seperti ini
tidak pernah dirender sebagai tombol atau tautan rusak. Begitu teksnya diganti,
penandanya hilang sendiri.

Saat ini tinggal satu yang berpenanda:

| Isi | Akibatnya sekarang |
| --- | --- |
| `foto` | Yang tampil monogram inisial, bukan foto |

Satu hal lain yang sebaiknya diganti: `instagram` masih menunjuk ke halaman
utama Instagram. Ganti dengan URL profil Anda.

### Menaruh foto

Taruh berkasnya di folder `public/`, lalu tulis nama berkasnya:

```js
foto: 'foto.jpg',
```

Foto hanya dipakai di bagian Home. Selama belum diisi, bagian itu menampilkan
monogram inisial (MI) di dalam lingkaran bergradien. Bagian About sengaja
tampil tanpa foto.

CV sudah tersedia di `public/cv.pdf`, jadi tombol **Download CV** langsung
berfungsi. Jalurnya ditulis tanpa garis miring di depan (`'cv.pdf'`) supaya
tetap benar saat dijalankan di komputer maupun setelah diterbitkan di subfolder
GitHub Pages.

### Sertifikat

Kedua belas sertifikat tampil sebagai kartu di bagian **Certificates**, setelah
Projects. Bagian Education hanya berisi riwayat pendidikan. Isi `tautan` pada
sertifikat yang punya halaman verifikasi; tautan **Verifikasi** hanya muncul
untuk sertifikat yang tautannya terisi.

```js
{ nama: 'AI Fundamentals', penerbit: 'DataCamp', tahun: '2024', tautan: 'https://...' }
```

### Menambah sertifikat

Salin satu blok `{ ... }` di dalam `sertifikat`, lalu ganti isinya. Jumlahnya
bebas karena kartu dirender langsung dari data.

### Mengubah proyek

Setiap kartu proyek menampilkan judul dan tombol **Lihat**. Tombol itu membuka
jendela detail berisi `detail`, `metrik`, `stack`, serta tautan `demo` dan
`repo` bila tersedia.

Kelima proyek yang tampil semuanya terhubung ke repositori GitHub
[`ihsarfatiha`](https://github.com/ihsarfatiha), dan tombol **Lihat Semua**
mengarah ke daftar repositori. Repo `portofolio` sendiri sengaja tidak
ditampilkan sebagai kartu proyek. Datanya ditulis manual di `proyek` — bukan
diambil saat halaman dibuka — supaya situs tetap cepat dan tidak bergantung
pada API GitHub.

Tampilan kartu mengikuti desain referensi: gradien dan ikon besar, bukan
tangkapan layar. Pemetaan ikon dan warna ada di `TAMPILAN_PROYEK` pada
`src/App.jsx`; menambah proyek baru cukup dengan menambahkan satu entri di
`proyek` (ikon cadangan akan dipakai kalau `id` belum dipetakan).

`status: 'live'` menandai proyek yang punya demo daring, sedangkan `'repo'`
hanya kode sumber. Nilai ini hanya memengaruhi teks tombol di jendela detail.

## Struktur

```
index.html               <- kerangka halaman, judul, meta, favicon
vite.config.js           <- React + Tailwind, base './'
.github/workflows/       <- build dan terbit otomatis ke GitHub Pages
src/
  data/profile.js        <- satu-satunya sumber isi
  lib/isi.js             <- aturan penanda "["
  App.jsx                <- seluruh halaman dan komponen kecilnya
  index.css              <- Tailwind v4, tema aksen, font, animasi reveal
  main.jsx               <- entrypoint React
public/
  cv.pdf                 <- berkas tombol Download CV
  favicon.svg            <- ikon tab browser
  robots.txt             <- aturan perayap mesin pencari
```

`dist/` dan `node_modules/` dibuat ulang otomatis (`npm run build` dan
`npm install`), jadi keduanya tidak perlu disimpan atau diunggah.
Folder `Ihsar Data Science Portfolio/` adalah berkas desain referensi, bukan
bagian dari situs; aman dihapus kalau tidak dipakai lagi.

## Catatan desain

- Tailwind CSS v4 lewat plugin `@tailwindcss/vite`. Tema ada di `src/index.css`:
  font **Plus Jakarta Sans**, aksen indigo `#4f46e5`, dan varian gelapnya.
- Navigasi lengket dengan menu seluler di bawah 1024px.
- Konten muncul dengan fade-in halus saat masuk layar lewat
  `IntersectionObserver`. `prefers-reduced-motion` mematikan animasi.
- Jendela detail proyek memakai portal dengan fokus terkunci, tombol Escape,
  dan gulir halaman yang dikunci.
- Formulir kontak tidak memakai backend. Saat dikirim, formulir membuka
  aplikasi email Anda dengan nama, alamat pengirim, dan pesan yang sudah
  terisi. Tidak ada data yang disimpan di situs.

## Menerbitkan (GitHub Pages)

Situs ini diterbitkan langsung oleh GitHub, tanpa Netlify. `vite.config.js`
memakai `base: './'`, jadi aset tetap benar di alamat subfolder seperti
`https://ihsarfatiha.github.io/portofolio/`.

Alur kerjanya: setiap `git push` ke branch `main`, GitHub Actions di
`.github/workflows/deploy.yml` menjalankan `npm ci` dan `npm run build`, lalu
menerbitkan isi `dist/` ke GitHub Pages. Tidak perlu mengunggah `dist/` secara
manual.

> **Perlu Anda tahu:** `public/cv.pdf` ikut terbit dan bisa diunduh siapa saja,
> jadi nomor HP dan email di dalamnya bisa dipanen bot spam. Kalau ingin lebih
> aman, taruh versi CV tanpa nomor HP untuk web dan simpan versi lengkapnya
> untuk melamar lewat email.

### 1. Kirim kodenya ke GitHub

Repositori `ihsarfatiha/portofolio` sudah terpasang sebagai `origin`. Kalau
belum ada, tambahkan dulu:

```bash
git remote add origin https://github.com/ihsarfatiha/portofolio.git
git branch -M main
```

Lalu kirim semua berkas proyek:

```bash
git add -A
git commit -m "Perbarui portofolio"
git push -u origin main
```

`node_modules/`, `dist/`, dan folder desain referensi sudah masuk `.gitignore`,
jadi tidak ikut terunggah.

### 2. Aktifkan GitHub Pages

1. Buka repo di GitHub, masuk **Settings → Pages**.
2. Di bagian **Build and deployment → Source**, pilih **GitHub Actions**.
3. Buka tab **Actions** dan tunggu workflow **Deploy ke GitHub Pages** selesai.
4. Alamat situsnya: `https://ihsarfatiha.github.io/portofolio/`.

Kalau workflow gagal karena Pages belum aktif, buka Settings → Pages sekali
lagi, pilih **GitHub Actions**, lalu jalankan ulang workflow dari tab Actions
(**Re-run all jobs**).

### 3. Seterusnya cukup begini

```bash
git add -A
git commit -m "perbarui isi portofolio"
git push
```

GitHub membangun ulang dan menerbitkan sendiri dalam satu-dua menit.

### Alternatif tanpa GitHub Actions

Kalau lebih suka mengunggah hasil build secara manual:

```bash
npm run build
```

Lalu unggah **isi** folder `dist/` (bukan folder `dist`-nya) ke branch
`gh-pages` di GitHub, dan di **Settings → Pages** pilih
**Deploy from a branch → gh-pages / (root)**. Cara ini membuat Anda harus
menjalankan `npm run build` setiap kali ada perubahan.
