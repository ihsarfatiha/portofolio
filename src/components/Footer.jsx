import { profil } from '../data/profile.js'
import { daftarSosial } from '../lib/sosial.js'
import { IKON_SOSIAL } from './Ikon.jsx'

export default function Footer() {
  const sosial = daftarSosial()
  const tahun = new Date().getFullYear()

  return (
    <footer className="foot">
      <div className="shell foot__in">
        <p className="foot__teks">
          © {tahun} {profil.nama}
        </p>

        <p className="foot__teks">Dibangun dengan React dan Vite</p>

        {sosial.length ? (
          <ul className="foot__sosial">
            {sosial.map((s) => {
              const Ikon = IKON_SOSIAL[s.kunci]
              return (
                <li key={s.kunci}>
                  <a
                    className="ikon-tombol"
                    href={s.tautan}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    title={s.label}
                  >
                    <Ikon />
                  </a>
                </li>
              )
            })}
          </ul>
        ) : null}
      </div>
    </footer>
  )
}
