# Portofolio — Muhammad Ihsar Fatiha

Satu halaman, dibangun dengan React + Vite. Tanpa router, tanpa pustaka UI,
tanpa layanan pihak ketiga untuk formulir kontak.

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

Nilai yang masih diawali tanda `[` berarti **belum diisi**:

- dipakai sebagai **teks** → tampil kuning sebagai penanda;
- dipakai sebagai **tautan, tombol, atau gambar** → tidak ditampilkan sama
  sekali, supaya tidak ada tombol rusak di situs.

Begitu teksnya Anda ganti, penanda kuning dan efek sembunyinya hilang sendiri.
Tidak ada langkah tambahan.

Saat ini tinggal dua yang berpenanda:

| Isi | Akibatnya sekarang |
| --- | --- |
| `foto` | Yang tampil monogram inisial **MIF**, bukan foto |
| `instagram` | Baris Instagram kuning, ikonnya tidak muncul |

Sisanya sudah terisi dari CV dan sertifikat Anda. Di bagian Kontak ada satu
kalimat kuning yang mendaftar sendiri apa saja yang masih kosong. Kalimat itu
hilang otomatis setelah semuanya terisi.

### Menaruh foto

Taruh berkasnya di folder `public/`, lalu tulis nama berkasnya:

```js
foto: 'foto.jpg',
```

CV Anda sudah ditaruh di `public/cv.pdf`, jadi tombol **Unduh CV** langsung
berfungsi. Jalurnya sengaja ditulis tanpa garis miring di depan (`'cv.pdf'`,
bukan `'/cv.pdf'`) supaya tetap benar saat dijalankan di komputer maupun
setelah diterbitkan di subfolder GitHub Pages.

### Menampilkan gambar sertifikat

Kedua belas sertifikat saat ini tampil sebagai kartu teks. Kalau ingin
menampilkan tangkapannya juga, taruh berkasnya di `public/sertifikat/`, lalu
isi `gambar` pada sertifikat yang bersangkutan:

```js
gambar: 'sertifikat/ai-fundamentals.png',
```

### Menambah organisasi atau sertifikat

Salin satu blok `{ ... }` di dalam `organisasi` atau `sertifikat`, lalu ganti
isinya. Jumlahnya bebas — jumlah pada kalimat keterangan bagian Sertifikat
dihitung otomatis dari datanya, jadi tidak perlu ikut diubah.

### Mengubah status proyek

`status: 'live'` (ada demo daring) atau `'repo'` (hanya kode sumber). Lampu
status dan tombol **Buka demo** mengikuti nilai ini.

`gambar` adalah tangkapan hasil kerja Anda, ditampilkan utuh di atas alas putih
sehingga grafik berlatar putih menyatu dengan alasnya. Proyek tanpa `gambar`
otomatis memakai pola kisi sebagai gantinya — jadi tidak pernah ada kotak
gambar kosong.

## Struktur

```
src/
  data/profile.js        <- satu-satunya sumber isi
  lib/isi.js             <- aturan penanda "["
  lib/sosial.js          <- tautan sosial & inisial, diturunkan dari profile.js
  components/            <- penyaji; tidak menyimpan data
  styles/tokens.css      <- warna, ukuran huruf, jarak
  styles/base.css        <- reset, fokus, prefers-reduced-motion
  styles/app.css         <- tata letak & komponen
```

Urutan bagian di navigasi diambil dari satu daftar di
`src/components/Navigasi.jsx` (`BAGIAN`). Urutan bagian di halaman diambil dari
`src/App.jsx`. Kalau salah satu diubah, ubah keduanya.

## Menerbitkan (GitHub + Netlify)

Kode disimpan di GitHub, penerbitannya diurus Netlify. `vite.config.js` memakai
`base: './'` dan `netlify.toml` sudah menyimpan perintah build, folder
keluaran, serta versi Node — jadi Netlify tidak perlu menebak apa pun.

> **Perlu Anda tahu:** `public/cv.pdf` ikut terbit dan bisa diunduh siapa saja,
> jadi nomor HP dan email di dalamnya bisa dipanen bot spam. Kalau ingin lebih
> aman, taruh versi CV tanpa nomor HP untuk web dan simpan versi lengkapnya
> untuk melamar lewat email.

### 1. Kirim kodenya ke GitHub

Buat repositori kosong di GitHub — **jangan** centang "Add a README", karena
resep ini mengasumsikan reponya masih benar-benar kosong. Lalu jalankan:

```bash
git remote add origin https://github.com/ihsarfatiha/portofolio.git
git branch -M main
git push -u origin main
```

### 2. Sambungkan ke Netlify

1. Buka `app.netlify.com`, lalu **Add new site → Import an existing project**.
2. Pilih GitHub, lalu pilih repo `portofolio`. Izinkan akses kalau diminta.
3. Kolom perintah build dan folder keluaran akan terisi sendiri dari
   `netlify.toml` (`npm run build` dan `dist`). Biarkan apa adanya.
4. Tekan **Deploy**. Sekitar semenit kemudian situsnya hidup.

Alamatnya bisa diganti di **Site configuration → Change site name**, misalnya
menjadi `ihsar-fatiha` sehingga alamatnya jadi `ihsar-fatiha.netlify.app`.

### 3. Setelah tersambung, seterusnya cukup begini

```bash
git add -A
git commit -m "perbarui isi portofolio"
git push
```

Netlify membangun ulang dan menerbitkan sendiri. Tidak perlu menjalankan
`npm run build` maupun mengunggah berkas secara manual.

### Kalau nanti ingin pindah rumah

Kodenya tidak perlu diubah sama sekali:

- **Vercel** — impor repo yang sama. Vercel mengenali Vite sendiri, dan
  `base: './'` tetap benar.
- **GitHub Pages** — beri nama repo persis `ihsarfatiha.github.io` supaya
  alamatnya bersih di akar (`https://ihsarfatiha.github.io/`), lalu terbitkan
  isi folder `dist/` ke branch `gh-pages`. Butuh satu berkas workflow GitHub
  Actions supaya terbitnya otomatis.

## Catatan desain

- Kerangkanya mengikuti rujukan portofolio yang Anda berikan: foto, tombol
  unduh CV, pendidikan, kemampuan, kartu proyek bergambar, organisasi,
  sertifikat, dan kontak. Semuanya satu halaman dengan navigasi anchor.
- Palet dan tipografi tetap milik Anda sendiri dan diturunkan dari subjeknya:
  pemantauan lahan gambut dari satelit. Ember untuk status dan peringatan, teal
  untuk lapisan data.
- Satu-satunya gerakan halaman adalah urutan tampil saat halaman dimuat.
  `prefers-reduced-motion` mematikannya sepenuhnya di `base.css`.
- Tangga skor risiko pada kartu proyek gambut memakai angka asli hasil model
  XGBoost di repositori `peatland-fire-prediction`, tidak dibulatkan.
- Logo teknologi diambil dari `cdn.simpleicons.org` dalam satu warna (teal).
  Kalau gagal dimuat, ikonnya menghilang dan labelnya tetap terbaca.
- Kotak-kotaknya sengaja dibuat seragam, tidak mengikuti panjang teks:
  chip kemampuan, kotak mata kuliah, dan sel angka memakai kisi berukuran
  sama, sedangkan kartu sertifikat dan kartu proyek dalam satu baris dipaksa
  sama tinggi. Pada kartu, tombol selalu duduk di dasar kartu sehingga
  sejajar antar kolom.
- Satu pengecualian: label teknologi di dalam kartu proyek (mis. `PySpark`)
  tetap lebarnya mengikuti teks, karena di sana fungsinya sebagai tanda
  pengenal dan kotak seragam selebar kolom justru terlihat kosong.
