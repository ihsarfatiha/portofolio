// Satu aturan penanda untuk seluruh situs: nilai yang diawali "[" berarti
// belum diisi. Dipakai untuk memutuskan apakah tautan/gambar ditampilkan.
export const belum = (nilai) =>
  nilai === null ||
  nilai === undefined ||
  (typeof nilai === 'string' && nilai.trim().startsWith('['))

// Menambahkan kelas "kosong" (teks kuning) hanya kalau nilainya masih penanda.
export const kelasKosong = (nilai, kelas = '') => (belum(nilai) ? `${kelas} kosong`.trim() : kelas)
