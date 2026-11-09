// ============================================================================
//  SATU-SATUNYA FILE YANG PERLU ANDA EDIT.
//  Semua teks, angka, gambar, dan tautan portofolio ada di sini.
//
//  Nilai yang masih diawali tanda "[" berarti BELUM DIISI.
//  Teksnya tampil sebagai penanda, sedangkan tautan/gambar yang belum diisi
//  otomatis tidak ditampilkan supaya tidak ada tombol rusak di situs.
// ============================================================================

export const profil = {
  nama: 'Muhammad Ihsar Fatiha',
  panggilan: 'Ihsar',

  // Baris pendek di bawah nama pada bagian Home.
  peran: 'Seorang Data Scientist dan Informatics Student',

  ringkas:
    'Mahasiswa Teknik Informatika Universitas Mercu Buana yang membangun proyek data science dan machine learning end-to-end — dari pengolahan data dan pelatihan model sampai aplikasi yang bisa dipakai.',

  // FOTO: taruh berkasnya di folder `public`, lalu tulis "foto.jpg".
  // Selama masih penanda, yang tampil adalah monogram inisial Anda.
  foto: '[ isi: contoh foto.jpg ]',

  // CV sudah tersedia di folder `public/cv.pdf`.
  cv: 'cv.pdf',

  lokasi: 'Jakarta, Indonesia',
  email: 'Ihsarfatiha@gmail.com',
  whatsapp: '08515 6046 957',

  linkedin: 'https://www.linkedin.com/in/muhammad-ihsar-fatiha',
  // Ganti dengan URL profil Instagram Anda. Selama masih alamat utama ini,
  // ikon Instagram tetap tampil agar susunan tombol sosial lengkap.
  instagram: 'https://www.instagram.com/',
  github: 'https://github.com/ihsarfatiha',

  // Teks kecil di dekat foto pada bagian Home.
  ketersediaan: 'Terbuka untuk magang Data & AI',
}

export const tentang = [
  'Halo, nama saya Ihsar, mahasiswa Teknik Informatika di Universitas Mercu Buana dengan IPK 3.69/4.00. Saya tertarik pada Data Science, Machine Learning, NLP, Computer Vision, dan GIS, serta senang membangun proyek end-to-end mulai dari pengolahan data, pelatihan model, sampai aplikasi yang bisa dipakai.',
]

// Kelompok kemampuan yang tampil sebagai kisi ikon + label.
export const keahlian = [
  {
    nama: 'Technical Skills',
    keterangan:
      'Bahasa, library, dan platform untuk analisis data, pelatihan model, sampai pemetaan.',
    isi: [
      { nama: 'Python', logo: 'python' },
      { nama: 'SQL', logo: null, singkatan: 'SQL' },
      { nama: 'pandas', logo: 'pandas' },
      { nama: 'NumPy', logo: 'numpy' },
      { nama: 'Scikit-Learn', logo: 'scikitlearn' },
      { nama: 'TensorFlow', logo: 'tensorflow' },
      { nama: 'PySpark', logo: 'apachespark' },
      { nama: 'Matplotlib', logo: 'matplotlib' },
      { nama: 'Plotly', logo: 'plotly' },
    ],
  },
  {
    nama: 'Tools Use',
    keterangan: 'Alat bantu harian untuk eksplorasi data, pelatihan model, dan pengembangan proyek.',
    isi: [
      // Simple Icons tidak lagi menyediakan logo VS Code (404), jadi pakai
      // kotak singkatan agar tidak ada permintaan gambar yang gagal.
      { nama: 'VS Code', logo: null, singkatan: 'VS' },
      { nama: 'Jupyter Notebook', logo: 'jupyter' },
      { nama: 'Google Colab', logo: 'googlecolab' },
      { nama: 'Git & GitHub', logo: 'github' },
      { nama: 'Docker', logo: 'docker' },
      { nama: 'MySQL', logo: 'mysql' },
      { nama: 'QGIS', logo: 'qgis' },
      { nama: 'Google Earth Engine', logo: 'googleearthengine' },
    ],
  },
  {
    nama: 'Web Development',
    keterangan: 'Teknologi yang saya pakai untuk membangun aplikasi web full-stack.',
    isi: [
      { nama: 'PHP', logo: 'php' },
      { nama: 'Laravel', logo: 'laravel' },
      { nama: 'JavaScript', logo: 'javascript' },
      { nama: 'HTML', logo: 'html5' },
      { nama: 'CSS', logo: 'css' },
    ],
  },
]

// Diurutkan dari yang paling baru.
export const pendidikan = [
  {
    periode: '2023 — Sekarang',
    institusi: 'Universitas Mercu Buana',
    jenjang: 'S1 Teknik Informatika',
    keterangan:
      'Fokus pada Data Science, Machine Learning, Big Data, dan Sistem Informasi Geografis. Saat ini menempuh semester 7.',
    ipk: '3.69 / 4.00',
    status: 'Sedang ditempuh',
  },
  {
    periode: '2020 — 2023',
    institusi: 'SMAN 10 Kota Tangerang Selatan',
    jenjang: 'Ilmu Pengetahuan Alam (IPA)',
    keterangan: 'Pendidikan menengah atas.',
    ipk: null,
    status: 'Selesai',
  },
]

// status: 'live' -> ada demo daring
//         'repo' -> baru tersedia kode sumbernya
export const proyek = [
  {
    id: 'beauty',
    nama: 'Beauty Review Helpfulness: BERT vs DistilBERT',
    kategori: 'NLP · Transformer · E-Commerce',
    tahun: '2026',
    status: 'repo',
    ringkas:
      'Perbandingan BERT dan DistilBERT untuk memprediksi apakah ulasan e-commerce beauty tergolong membantu, dengan fokus pada trade-off akurasi dan efisiensi.',
    detail:
      'Penelitian klasifikasi biner review helpfulness pada domain Beauty dari dataset Amazon Reviews 2023: 473.823 ulasan dibersihkan, lalu diseimbangkan menjadi 50.000 ulasan (25.000 helpful dan 25.000 not helpful) dengan ambang helpful_vote > 2. Dua model Transformer dilatih dengan konfigurasi identik — 2 epoch, learning rate 2e-5, batch 16, max_len 256 — lalu dibandingkan dari sisi F1, akurasi, AUC, waktu training, latency inferensi, dan ukuran model. BERT unggul tipis (F1 0,698 vs 0,694; AUC 0,776 vs 0,774), sedangkan DistilBERT 39% lebih kecil (255 MB vs 418 MB) dan sekitar 1,09x lebih cepat. Selisih performa yang hanya 0,4% membuat DistilBERT tetap layak dipilih saat throughput dan keterbatasan sumber daya jadi prioritas.',
    metrik: [
      { nilai: '50.000', label: 'ulasan diseimbangkan' },
      { nilai: '0,698', label: 'F1-Score BERT' },
      { nilai: '0,694', label: 'F1-Score DistilBERT' },
      { nilai: '39%', label: 'DistilBERT lebih kecil' },
    ],
    stack: [
      'Python',
      'PyTorch',
      'Hugging Face Transformers',
      'BERT',
      'DistilBERT',
      'Scikit-Learn',
      'pandas',
      'Matplotlib',
      'Seaborn',
    ],
    repo: 'https://github.com/ihsarfatiha/beauty-review-helpfulness-bert-distilbert',
    demo: null,
  },
  {
    id: 'diabetes',
    nama: 'Diabetes Risk Classification',
    kategori: 'Machine Learning · Kesehatan',
    tahun: '2026',
    status: 'repo',
    ringkas:
      'Perbandingan empat model untuk skrining risiko diabetes pada 253.680 rekam medis yang sangat tidak seimbang.',
    detail:
      'Membandingkan Naive Bayes, Decision Tree, Random Forest, dan AdaBoost untuk memprediksi risiko diabetes dari data survei kesehatan yang sangat tidak seimbang: 253.680 rekam medis dengan rasio kelas 86:14. Ketidakseimbangan ditangani dengan SMOTE dan class weighting, pemilihan fitur diuji dengan Chi-Square dan Mutual Information, lalu setiap model divalidasi dengan 10-fold cross-validation. Yang terpilih adalah AdaBoost + SMOTE + Chi-Square (F1 0,43, AUC 0,798), dan ambang keputusannya saya geser demi memprioritaskan recall untuk skrining medis.',
    metrik: [
      { nilai: '253.680', label: 'rekam medis dianalisis' },
      { nilai: '4', label: 'model dibandingkan' },
      { nilai: '0,798', label: 'AUC model terpilih' },
      { nilai: '10-fold', label: 'cross-validation' },
    ],
    stack: ['Scikit-Learn', 'SMOTE', 'Chi-Square', 'AdaBoost', 'pandas', 'React + Vite'],
    repo: 'https://github.com/ihsarfatiha/Diabetes-Risk-Classification-Model-Comparison',
    demo: null,
  },
  {
    id: 'linkedin',
    nama: 'End-to-End Salary Prediction Pipeline',
    kategori: 'Big Data · NLP',
    tahun: '2026',
    status: 'live',
    ringkas:
      'Pipeline PySpark end-to-end untuk memprediksi gaji dan mengklasifikasikan jenis kerja dari 123.849 lowongan LinkedIn.',
    detail:
      'Pipeline big data end-to-end atas dataset LinkedIn Job Postings 2023–2024. PySpark menggabungkan tabel lowongan, perusahaan, industri, dan keterampilan; hasilnya dipakai untuk memprediksi gaji tahunan sekaligus mengklasifikasikan jenis kerja — remote, hybrid, atau onsite. Saya juga menyusun templat prompt yang bisa dipakai ulang untuk menyeragamkan kode pipeline dan penulisan laporan.',
    metrik: [
      { nilai: '123.849', label: 'lowongan dianalisis' },
      { nilai: '13.187', label: 'MAE prediksi gaji (USD)' },
      { nilai: '0,3324', label: 'R² regresi XGBoost' },
      { nilai: '58,64%', label: 'akurasi klasifikasi' },
    ],
    stack: [
      'Apache Spark 3.5',
      'PySpark',
      'Spark SQL',
      'Scikit-Learn',
      'XGBoost',
      'Plotly.js',
      'Netlify',
    ],
    repo: 'https://github.com/ihsarfatiha/LinkedIn-Job-Market-Analytics-BigData',
    demo: 'https://linkedln-job-market-analytics.netlify.app/',
  },
  {
    id: 'gambut',
    nama: 'Peatland Fire Early Warning Prediction System',
    kategori: 'Machine Learning · GIS',
    tahun: '2026',
    status: 'live',
    ringkas:
      'Sistem peringatan dini dua tugas untuk lahan gambut Sumatera dan Kalimantan, dari data satelit sampai peta risiko provinsi.',
    detail:
      'Sistem peringatan dini dua tugas untuk lahan gambut Sumatera dan Kalimantan: memperkirakan probabilitas kemunculan titik api, sekaligus mengestimasi sisa hari menuju ambang kekeringan kritis (< 4 mm/hari). Data satelit dikumpulkan lewat Google Earth Engine, diolah dengan PySpark, lalu dibandingkan antara XGBoost, LightGBM, dan Random Forest. Skor risiko gabungan dari hasil model dipakai untuk memeringkat provinsi, dan temuannya saya paparkan dalam laporan 10 salindia.',
    metrik: [
      { nilai: '23.169', label: 'baris data latih' },
      { nilai: '3.310', label: 'baris uji 2022–2023' },
      { nilai: '0,9989', label: 'R² regresi XGBoost' },
      { nilai: '0,6313', label: 'ROC-AUC klasifikasi' },
    ],
    risiko: [
      { nama: 'Sumatera Selatan', skor: 100, tingkat: 'kritis' },
      { nama: 'Kalimantan Barat', skor: 94.13, tingkat: 'kritis' },
      { nama: 'Riau', skor: 89.36, tingkat: 'kritis' },
      { nama: 'Jambi', skor: 87.61, tingkat: 'kritis' },
      { nama: 'Kalimantan Tengah', skor: 60.66, tingkat: 'tinggi' },
    ],
    stack: [
      'PySpark 4.0',
      'Google Earth Engine',
      'MODIS LST/NDVI',
      'CHIRPS',
      'NASA FIRMS',
      'XGBoost',
      'LightGBM',
      'Leaflet',
    ],
    repo: 'https://github.com/ihsarfatiha/peatland-fire-prediction',
    demo: 'https://peatland-fire-prediction-dashboard.netlify.app/',
  },
  {
    id: 'itagarage',
    nama: 'Vehicle Rental Web Application',
    kategori: 'Web App · Laravel',
    tahun: '2025',
    status: 'live',
    ringkas:
      'Aplikasi sewa kendaraan full-stack dengan Laravel: armada, reservasi, dasbor admin, dan pembayaran.',
    detail:
      'Platform sewa kendaraan full-stack dengan Laravel, dikerjakan sendiri dari desain basis data sampai antarmuka. Mencakup autentikasi pengguna, pengelolaan armada, pemesanan dan reservasi, dasbor admin, serta penanganan pembayaran — satu siklus utuh dari pelanggan sampai admin.',
    metrik: null,
    stack: ['PHP', 'Laravel', 'MySQL', 'Blade'],
    repo: 'https://github.com/ihsarfatiha/ITAGarage---website-sewa-kendaraan',
    demo: 'https://ihsarfatiha.github.io/ITAGarage---website-sewa-kendaraan/',
  },
  {
    id: 'webgis',
    nama: 'WebGIS Zonasi Konservasi Situs Purbakala',
    kategori: 'GIS · Web App · Konservasi',
    tahun: '2026',
    status: 'repo',
    ringkas:
      'Dasbor peta interaktif untuk memantau zonasi konservasi 37 situs candi, lengkap dengan buffer kerentanan 500 m dan 1 km.',
    detail:
      'Dasbor WebGIS untuk pelestarian cagar budaya: menampilkan situs inti candi, zonasi penyangga, fasilitas edukasi, dan pos pemantauan sebagai layer yang bisa dinyalakan atau dimatikan. Peta dibangun dengan Streamlit, Folium, dan GeoPandas, dilengkapi filter periodisasi sejarah dan tingkat risiko per situs, alat ukur jarak, serta buffer kerentanan 500 m dan 1 km. Dari analisisnya terlihat ekspansi permukiman dan kawasan komersial yang signifikan dalam 10 tahun terakhir di radius 1 km dari situs inti — dasar rekomendasi penguatan regulasi tata ruang zona penyangga dan penambahan frekuensi patroli.',
    metrik: [
      { nilai: '37', label: 'situs candi dipetakan' },
      { nilai: '17', label: 'fasilitas edukasi' },
      { nilai: '15', label: 'pos pemantauan' },
      { nilai: '1 km', label: 'radius analisis kerentanan' },
    ],
    stack: ['Python', 'Streamlit', 'GeoPandas', 'Folium', 'GeoJSON', 'QGIS'],
    repo: 'https://github.com/ihsarfatiha/webgis-purbakala',
    demo: null,
  },
]

// Ditampilkan lewat tombol "Semua Sertifikat" di bagian Education.
export const sertifikat = [
  {
    nama: 'Introduction to Cybersecurity Careers',
    penerbit: 'IBM · Coursera',
    tahun: '7 Juni 2026',
    tautan: 'https://coursera.org/verify/ADNV26523RCB',
  },
  {
    nama: 'Information Technology (IT) Fundamentals for Everyone',
    penerbit: 'IBM · Coursera',
    tahun: '4 Juni 2026',
    tautan: 'https://coursera.org/verify/87VCPLYG1UJD',
  },
  {
    nama: 'Introduction to Software, Programming, and Databases',
    penerbit: 'IBM · Coursera',
    tahun: '2 Juni 2026',
    tautan: 'https://coursera.org/verify/VU8TYMT4Z76U',
  },
  {
    nama: 'PL/SQL Database Programming Semester 2',
    penerbit: 'Oracle Academy',
    tahun: '23 Desember 2024',
    tautan: null,
  },
  {
    nama: 'Database Programming with PL/SQL',
    penerbit: 'Oracle Academy',
    tahun: '22 Desember 2024',
    tautan: null,
  },
  {
    nama: 'AI Fundamentals',
    penerbit: 'DataCamp',
    tahun: '10 November 2024',
    tautan: null,
  },
  {
    nama: 'AI Ethics',
    penerbit: 'DataCamp',
    tahun: '6 November 2024',
    tautan: null,
  },
  {
    nama: 'Large Language Models (LLMs) Concepts',
    penerbit: 'DataCamp',
    tahun: '17 Oktober 2024',
    tautan: null,
  },
  {
    nama: 'Understanding Machine Learning',
    penerbit: 'DataCamp',
    tahun: '3 Oktober 2024',
    tautan: null,
  },
  {
    nama: 'Understanding ChatGPT',
    penerbit: 'DataCamp',
    tahun: '19 September 2024',
    tautan: null,
  },
  {
    nama: 'Understanding Artificial Intelligence',
    penerbit: 'DataCamp',
    tahun: '18 September 2024',
    tautan: null,
  },
  {
    nama: 'Python (Basic)',
    penerbit: 'HackerRank',
    tahun: '19 April 2024',
    tautan: 'https://www.hackerrank.com/certificates/C6A95DF47814',
  },
]
