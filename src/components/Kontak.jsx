import { profil } from '../data/profile.js'
import { belum, kelasKosong } from '../lib/isi.js'
import { tautanSurel, tautanWhatsApp } from '../lib/sosial.js'
import { IkonLuar, IkonSurel, IkonWhatsApp } from './Ikon.jsx'
import Judul from './Judul.jsx'

export default function Kontak() {
  const baris = [
    { label: 'Email', nilai: profil.email, tautan: tautanSurel(profil.email) },
    { label: 'WhatsApp', nilai: profil.whatsapp, tautan: tautanWhatsApp(profil.whatsapp) },
    { label: 'Lokasi', nilai: profil.lokasi, tautan: null },
    {
      label: 'LinkedIn',
      nilai: profil.linkedin,
      tautan: belum(profil.linkedin) ? null : profil.linkedin,
    },
    {
      label: 'Instagram',
      nilai: profil.instagram,
      tautan: belum(profil.instagram) ? null : profil.instagram,
    },
    { label: 'GitHub', nilai: profil.github, tautan: belum(profil.github) ? null : profil.github },
  ]

  // Daftar ini menyala hanya selama masih ada yang kosong, lalu hilang sendiri
  // setelah semuanya terisi. Fungsinya mengingatkan, bukan tampil selamanya.
  const kosong = baris.filter((b) => belum(b.nilai)).map((b) => b.label)

  const aksiEmail = tautanSurel(profil.email)
  const aksiWhatsApp = tautanWhatsApp(profil.whatsapp)

  return (
    <section className="bagian" id="kontak" aria-labelledby="judul-kontak">
      <div className="shell">
        <Judul
          id="judul-kontak"
          judul="Kontak"
          keterangan="Silakan hubungi saya lewat salah satu kanal di bawah."
        />

        <div className="kontak">
          <div className="kontak__daftar">
            {baris.map((b) => (
              <div className="kontak__baris" key={b.label}>
                <span className="kontak__label">{b.label}</span>
                <span className={kelasKosong(b.nilai, 'kontak__nilai')}>
                  {b.tautan ? (
                    <a href={b.tautan} target="_blank" rel="noreferrer">
                      {b.nilai}
                    </a>
                  ) : (
                    b.nilai
                  )}
                </span>
              </div>
            ))}
          </div>

          <div className="kontak__aksi">
            {aksiEmail ? (
              <a className="tombol tombol--utama" href={aksiEmail}>
                <IkonSurel />
                Kirim email
              </a>
            ) : null}

            {aksiWhatsApp ? (
              <a className="tombol" href={aksiWhatsApp} target="_blank" rel="noreferrer">
                <IkonWhatsApp />
                Chat WhatsApp
              </a>
            ) : null}

            {!belum(profil.github) ? (
              <a className="tombol" href={profil.github} target="_blank" rel="noreferrer">
                <IkonLuar />
                Lihat GitHub saya
              </a>
            ) : null}

            {kosong.length ? (
              <p className="kontak__catatan kosong">
                Belum diisi: {kosong.join(', ')}. Semua yang masih berwarna kuning belum lengkap.
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}
