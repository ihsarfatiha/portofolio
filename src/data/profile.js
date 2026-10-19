// ============================================================================
//  SATU-SATUNYA FILE YANG PERLU ANDA EDIT.
//  Semua teks, angka, gambar, dan tautan portofolio ada di sini.
//
//  ATURAN PENANDA — hanya ada satu:
//   Nilai yang masih diawali tanda "[" berarti BELUM DIISI.
//   • Kalau dipakai sebagai teks  -> tampil kuning sebagai penanda.
//   • Kalau dipakai sebagai tautan, tombol, atau gambar -> tidak
//     ditampilkan sama sekali, supaya tidak ada tombol rusak di situs.
//   Begitu Anda ganti teksnya, penanda kuning dan efek sembunyinya hilang
//   sendiri. Tidak ada langkah tambahan.
//
//  Isi berkas ini diambil dari CV Anda dan dari repositori GitHub Anda.
// ============================================================================

export const profil = {
  nama: 'Muhammad Ihsar Fatiha',

  // Baris kecil di atas nama pada bagian depan.
  sapaan: 'Halo, saya',

  // Sebutan singkat yang muncul di bawah nama.
  peran: 'Data Science & Machine Learning',

  judul: 'Saya mengawal proyek dari data mentah sampai jadi model yang teruji.',

  ringkas:
    'Mahasiswa Informatika Universitas Mercu Buana, semester 7. Selama kuliah saya mengerjakan proyek di beberapa bidang sekaligus — data science, machine learning, big data, NLP, sistem informasi geografis, sampai computer vision. Saya terbiasa menjelaskan temuan teknis dengan gamblang, dalam bahasa Indonesia maupun Inggris. Sekarang saya mencari magang di bidang data dan AI.',

  // FOTO: taruh berkasnya di folder `public`, lalu tulis "foto.jpg".
  // Selama masih penanda, yang tampil adalah monogram inisial Anda.
  foto: '[ isi: contoh foto.jpg ]',

  // CV: berkas CV Anda sudah ditaruh di folder `public` sebagai cv.pdf.
  // Jalurnya sengaja ditulis tanpa garis miring di depan supaya tetap benar
  // baik saat dijalankan di komputer maupun setelah diterbitkan di subfolder.
  cv: 'cv.pdf',

  lokasi: 'Jakarta, Indonesia',
  email: 'Ihsarfatiha@gmail.com',

  // Boleh ditulis apa adanya seperti di CV. Tautannya dibentuk otomatis:
  // 08515... akan menjadi wa.me/628515...
  whatsapp: '08515 6046 957',

  linkedin: 'https://www.linkedin.com/in/muhammad-ihsar-fatiha',
  instagram: '[ isi URL Instagram Anda ]',
  github: 'https://github.com/ihsarfatiha',
}

// Angka ringkas di bawah bagian Tentang.
export const angka = [
  { nilai: '3,69', label: 'IPK dari 4,00' },
  { nilai: '5', label: 'proyek publik' },
  { nilai: '12', label: 'sertifikat & pelatihan' },
]

export const tentang = [
  'Yang paling sering saya kerjakan justru bagian yang tidak kelihatan: merapikan data, memilih fitur yang benar-benar berguna, menangani kelas data yang tidak seimbang, dan mengukur hasil dengan metrik yang jujur — bukan sekadar angka akurasi yang terlihat bagus.',
  'Di luar perkuliahan saya ikut menjalankan usaha ritel keluarga, dan aktif di Mercu Buana English Club. Dari usaha keluarga itu saya belajar membaca data dari sisi keputusan usaha, bukan hanya dari sisi modelnya.',
]

export const pendidikan = [
  {
    kampus: 'Universitas Mercu Buana',
    jenjang: 'S1 Informatika',
    periode: 'September 2023 – sekarang',
    ipk: '3,69 / 4,00',
    keterangan:
      'Saat ini semester 7. Fokus pada data science, machine learning, big data, dan sistem informasi geografis.',
    matakuliah: [
      'Data Science',
      'Machine Learning',
      'Big Data',
      'Natural Language Processing',
      'Generative AI',
      'Computer Vision',
      'Geographic Information Systems',
      'UX/UI Design',
      'Business Intelligence',
      'Kewirausahaan',
    ],
  },
]

// `logo` memakai berkas dari cdn.simpleicons.org. Kalau logo gagal dimuat,
// labelnya tetap tampil sebagai teks biasa — tidak ada yang rusak.
export const kemampuan = [
  {
    nama: 'Data Science',
    isi: [
      { teks: 'Eksplorasi data (EDA)' },
      { teks: 'Pemilihan fitur' },
      { teks: 'Chi-Square' },
      { teks: 'Mutual Information' },
      { teks: 'SMOTE' },
      { teks: 'Class weighting' },
      { teks: 'Cross-validation' },
      { teks: 'Threshold tuning' },
      { teks: 'Evaluasi model' },
    ],
  },
  {
    nama: 'Machine Learning',
    isi: [
      { teks: 'Scikit-Learn', logo: 'scikitlearn' },
      { teks: 'XGBoost' },
      { teks: 'LightGBM' },
      { teks: 'Random Forest' },
      { teks: 'AdaBoost' },
      { teks: 'Naive Bayes' },
      { teks: 'Decision Tree' },
    ],
  },
  {
    nama: 'Big Data',
    isi: [
      { teks: 'Apache Spark', logo: 'apachespark' },
      { teks: 'PySpark', logo: 'apachespark' },
      { teks: 'Spark SQL' },
      { teks: 'Parquet' },
      { teks: 'ETL terdistribusi' },
    ],
  },
  {
    nama: 'NLP & Generative AI',
    isi: [
      { teks: 'IndoBERT' },
      { teks: 'Hugging Face', logo: 'huggingface' },
      { teks: 'OpenCV', logo: 'opencv' },
      { teks: 'Praproses teks' },
      { teks: 'Rekayasa prompt' },
      { teks: 'Etika AI' },
    ],
  },
  {
    nama: 'Pemrograman & Data',
    isi: [
      { teks: 'Python', logo: 'python' },
      { teks: 'pandas', logo: 'pandas' },
      { teks: 'NumPy', logo: 'numpy' },
      { teks: 'SQL' },
      { teks: 'PL/SQL' },
      { teks: 'MySQL', logo: 'mysql' },
      { teks: 'BigQuery', logo: 'googlebigquery' },
    ],
  },
  {
    nama: 'Geospasial',
    isi: [
      { teks: 'QGIS', logo: 'qgis' },
      { teks: 'GeoPandas' },
      { teks: 'Folium' },
      { teks: 'Google Earth Engine', logo: 'googleearthengine' },
      { teks: 'MODIS LST / NDVI' },
      { teks: 'NASA FIRMS' },
    ],
  },
  {
    nama: 'Web',
    isi: [
      { teks: 'HTML', logo: 'html5' },
      { teks: 'CSS', logo: 'css' },
      { teks: 'JavaScript', logo: 'javascript' },
      { teks: 'React', logo: 'react' },
      { teks: 'Vite', logo: 'vite' },
      { teks: 'Streamlit' },
      { teks: 'Laravel', logo: 'laravel' },
      { teks: 'PHP', logo: 'php' },
    ],
  },
  {
    nama: 'Visualisasi & Alat',
    isi: [
      { teks: 'Jupyter', logo: 'jupyter' },
      { teks: 'Google Colab', logo: 'googlecolab' },
      { teks: 'Plotly.js', logo: 'plotly' },
      { teks: 'Chart.js', logo: 'chartdotjs' },
      { teks: 'Matplotlib' },
      { teks: 'Git', logo: 'git' },
      { teks: 'GitHub', logo: 'github' },
      { teks: 'Google Sheets', logo: 'googlesheets' },
      { teks: 'Microsoft Office' },
    ],
  },
  {
    nama: 'Soft Skills & Bahasa',
    isi: [
      { teks: 'Komunikasi' },
      { teks: 'Customer focus' },
      { teks: 'Perencanaan strategis' },
      { teks: 'Berorientasi hasil' },
      { teks: 'Bahasa Indonesia (asli)' },
      { teks: 'Bahasa Inggris (dasar)' },
    ],
  },
]

// status: 'live' -> ada demo daring yang bisa dibuka
//         'repo' -> baru tersedia kode sumbernya
//
// `gambar` adalah tangkapan hasil kerja Anda, ditampilkan utuh di atas alas
// putih sehingga grafik berlatar putih menyatu dengan alasnya. Proyek tanpa
// `gambar` otomatis memakai pola kisi, jadi tidak pernah ada kotak kosong.
export const proyek = [
  {
    id: 'gambut',
    nama: 'Prediksi Risiko Kebakaran Lahan Gambut',
    tahun: '2026',
    status: 'live',
    gambar:
      'https://raw.githubusercontent.com/ihsarfatiha/peatland-fire-prediction/main/assets/feature_importance.png',
    ringkas:
      'Sistem peringatan dini dua tugas untuk lahan gambut Sumatera dan Kalimantan: memperkirakan probabilitas kemunculan titik api, sekaligus mengestimasi sisa hari menuju ambang kekeringan kritis (< 4 mm/hari). Data satelit dikumpulkan lewat Google Earth Engine, diolah dengan PySpark, lalu dibandingkan antara XGBoost, LightGBM, dan Random Forest. Skor risiko gabungan dari hasil model dipakai untuk memeringkat provinsi, dan temuannya saya paparkan dalam laporan 10 salindia.',
    metrik: [
      { nilai: '23.169', label: 'baris data latih' },
      { nilai: '3.310', label: 'baris uji 2022–2023' },
      { nilai: '0,9989', label: 'R² regresi XGBoost' },
      { nilai: '0,6313', label: 'ROC-AUC klasifikasi' },
    ],
    // Hasil asesmen risiko dari model XGBoost, apa adanya.
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
    id: 'linkedin',
    nama: 'Pipeline Prediksi Gaji & Jenis Kerja',
    tahun: '2026',
    status: 'live',
    gambar:
      'https://raw.githubusercontent.com/ihsarfatiha/LinkedIn-Job-Market-Analytics-BigData/main/output-visualisasi-hasil/00_data_pipeline_rows.png',
    ringkas:
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
    id: 'diabetes',
    nama: 'Perbandingan Empat Model Risiko Diabetes',
    tahun: '2026',
    status: 'repo',
    gambar:
      'https://raw.githubusercontent.com/ihsarfatiha/Diabetes-Risk-Classification-Model-Comparison/main/performance_vs_speed_analysis.png',
    ringkas:
      'Membandingkan Naive Bayes, Decision Tree, Random Forest, dan AdaBoost untuk memprediksi risiko diabetes dari data survei kesehatan yang sangat tidak seimbang: 253.680 rekam medis dengan rasio kelas 86:14. Ketidakseimbangan ditangani dengan SMOTE dan class weighting, pemilihan fitur diuji dengan Chi-Square dan Mutual Information, lalu setiap model divalidasi dengan 10-fold cross-validation. Yang terpilih adalah AdaBoost + SMOTE + Chi-Square (F1 0,43, AUC 0,798), dan ambang keputusannya saya geser demi memprioritaskan recall untuk skrining medis.',
    metrik: [
      { nilai: '253.680', label: 'rekam medis dianalisis' },
      { nilai: '4', label: 'model dibandingkan' },
      { nilai: '0,798', label: 'AUC model terpilih' },
      { nilai: '10-fold', label: 'cross-validation' },
    ],
    stack: [
      'Scikit-Learn',
      'SMOTE',
      'Chi-Square',
      'AdaBoost',
      'pandas',
      'React + Vite',
    ],
    repo: 'https://github.com/ihsarfatiha/Diabetes-Risk-Classification-Model-Comparison',
    demo: null,
  },
  {
    id: 'purbakala',
    nama: 'WebGIS Zonasi Konservasi Situs Candi',
    tahun: '2026',
    status: 'repo',
    gambar: null,
    ringkas:
      'Aplikasi peta interaktif untuk merancang zona penyangga di sekitar situs candi. Dibangun dengan Streamlit dan Folium di atas GeoPandas, menampilkan layer situs candi, pos pemantauan, fasilitas edukasi, serta buffer 500 m dan 1 km sebagai dasar penentuan zonasi.',
    stack: ['Python', 'Streamlit', 'Folium', 'GeoPandas', 'GeoJSON'],
    repo: 'https://github.com/ihsarfatiha/webgis-purbakala',
    demo: null,
  },
  {
    id: 'itagarage',
    nama: 'ITAGarage — Aplikasi Web Sewa Kendaraan',
    tahun: '2025',
    status: 'repo',
    gambar: null,
    ringkas:
      'Platform sewa kendaraan full-stack dengan Laravel, dikerjakan sendiri dari desain basis data sampai antarmuka. Mencakup autentikasi pengguna, pengelolaan armada, pemesanan dan reservasi, dasbor admin, serta penanganan pembayaran — satu siklus utuh dari pelanggan sampai admin.',
    stack: ['PHP', 'Laravel', 'MySQL', 'Blade'],
    repo: 'https://github.com/ihsarfatiha/ITAGarage---website-sewa-kendaraan',
    demo: null,
  },
]

export const organisasi = [
  {
    peran: 'Anggota Divisi Newcast & Warehouse',
    lembaga: 'Mercu Buana English Club (MBEC)',
    periode: 'September 2024 – sekarang',
    poin: [
      'Panitia Mercu Buana English Event 2025',
      'Panitia Open Recruitment & Open House 2025',
      'Panitia Leadership Training Program MBEC 2026',
    ],
  },
]

// Diurutkan dari yang paling baru. `gambar` sengaja dikosongkan karena
// tangkapan sertifikatnya belum ada di folder public; kalau nanti mau
// ditampilkan, taruh berkasnya di `public/sertifikat/` lalu tulis misalnya
// gambar: 'sertifikat/ai-fundamentals.png'.
// `tautan` hanya diisi kalau kredensialnya memang bisa diverifikasi sendiri.
export const sertifikat = [
  {
    nama: 'Introduction to Cybersecurity Careers',
    penerbit: 'IBM · Coursera',
    tahun: '7 Juni 2026',
    gambar: null,
    tautan: 'https://coursera.org/verify/ADNV26523RCB',
  },
  {
    nama: 'Information Technology (IT) Fundamentals for Everyone',
    penerbit: 'IBM · Coursera',
    tahun: '4 Juni 2026',
    gambar: null,
    tautan: 'https://coursera.org/verify/87VCPLYG1UJD',
  },
  {
    nama: 'Introduction to Software, Programming, and Databases',
    penerbit: 'IBM · Coursera',
    tahun: '2 Juni 2026',
    gambar: null,
    tautan: 'https://coursera.org/verify/VU8TYMT4Z76U',
  },
  {
    nama: 'PL/SQL Database Programming Semester 2',
    penerbit: 'Oracle Academy',
    tahun: '23 Desember 2024',
    gambar: null,
    tautan: null,
  },
  {
    nama: 'Database Programming with PL/SQL',
    penerbit: 'Oracle Academy',
    tahun: '22 Desember 2024',
    gambar: null,
    tautan: null,
  },
  {
    nama: 'AI Fundamentals',
    penerbit: 'DataCamp',
    tahun: '10 November 2024',
    gambar: null,
    tautan: null,
  },
  {
    nama: 'AI Ethics',
    penerbit: 'DataCamp',
    tahun: '6 November 2024',
    gambar: null,
    tautan: null,
  },
  {
    nama: 'Large Language Models (LLMs) Concepts',
    penerbit: 'DataCamp',
    tahun: '17 Oktober 2024',
    gambar: null,
    tautan: null,
  },
  {
    nama: 'Understanding Machine Learning',
    penerbit: 'DataCamp',
    tahun: '3 Oktober 2024',
    gambar: null,
    tautan: null,
  },
  {
    nama: 'Understanding ChatGPT',
    penerbit: 'DataCamp',
    tahun: '19 September 2024',
    gambar: null,
    tautan: null,
  },
  {
    nama: 'Understanding Artificial Intelligence',
    penerbit: 'DataCamp',
    tahun: '18 September 2024',
    gambar: null,
    tautan: null,
  },
  {
    nama: 'Python (Basic)',
    penerbit: 'HackerRank',
    tahun: '19 April 2024',
    gambar: null,
    tautan: 'https://www.hackerrank.com/certificates/C6A95DF47814',
  },
]
