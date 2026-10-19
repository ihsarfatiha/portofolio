import { useEffect, useState } from 'react'
import { profil } from '../data/profile.js'
import { IkonMenu, IkonTutup } from './Ikon.jsx'

// Daftar bagian halaman. Urutan di sini menentukan urutan di menu navigasi.
export const BAGIAN = [
  { id: 'tentang', teks: 'Tentang' },
  { id: 'pendidikan', teks: 'Pendidikan' },
  { id: 'kemampuan', teks: 'Kemampuan' },
  { id: 'proyek', teks: 'Proyek' },
  { id: 'organisasi', teks: 'Organisasi' },
  { id: 'sertifikat', teks: 'Sertifikat' },
  { id: 'kontak', teks: 'Kontak' },
]

// Menandai bagian yang sedang dilihat. Dipakai offset posisi, bukan pengamat
// perpotongan, supaya bagian terakhir tetap ikut tersorot saat halaman
// digulir sampai dasar.
function useBagianAktif(ids) {
  const [aktif, setAktif] = useState('')

  useEffect(() => {
    let tertunda = false

    const hitung = () => {
      tertunda = false
      const ambang = window.scrollY + 140
      let kini = ''

      for (const id of ids) {
        const el = document.getElementById(id)
        if (!el) continue
        const atas = el.getBoundingClientRect().top + window.scrollY
        if (atas <= ambang) kini = id
      }

      const diDasar =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8
      if (diDasar) kini = ids[ids.length - 1]

      setAktif(kini)
    }

    const saatGulir = () => {
      if (tertunda) return
      tertunda = true
      window.requestAnimationFrame(hitung)
    }

    hitung()
    window.addEventListener('scroll', saatGulir, { passive: true })
    window.addEventListener('resize', saatGulir)

    return () => {
      window.removeEventListener('scroll', saatGulir)
      window.removeEventListener('resize', saatGulir)
    }
  }, [ids])

  return aktif
}

const ID_BAGIAN = BAGIAN.map((b) => b.id)

export default function Navigasi() {
  const aktif = useBagianAktif(ID_BAGIAN)
  const [terbuka, setTerbuka] = useState(false)

  // Tombol Escape menutup menu ponsel, supaya pengguna papan tik tidak terjebak.
  useEffect(() => {
    if (!terbuka) return
    const tombol = (e) => {
      if (e.key === 'Escape') setTerbuka(false)
    }
    document.addEventListener('keydown', tombol)
    return () => document.removeEventListener('keydown', tombol)
  }, [terbuka])

  return (
    <header className="nav">
      <div className="shell nav__in">
        <a className="nav__merek" href="#atas">
          <span className="nav__nama">{profil.nama}</span>
          <span className="nav__peran">{profil.peran}</span>
        </a>

        <nav aria-label="Navigasi bagian">
          <ul className="nav__tautan">
            {BAGIAN.map((b) => (
              <li key={b.id}>
                <a href={`#${b.id}`} aria-current={aktif === b.id ? 'true' : undefined}>
                  {b.teks}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="nav__tombol"
          aria-expanded={terbuka}
          aria-controls="nav-ponsel"
          aria-label={terbuka ? 'Tutup menu' : 'Buka menu'}
          onClick={() => setTerbuka((v) => !v)}
        >
          {terbuka ? <IkonTutup /> : <IkonMenu />}
        </button>
      </div>

      <div className="shell nav__panel" id="nav-ponsel" data-terbuka={terbuka}>
        <ul>
          {BAGIAN.map((b) => (
            <li key={b.id}>
              <a href={`#${b.id}`} onClick={() => setTerbuka(false)}>
                {b.teks}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
