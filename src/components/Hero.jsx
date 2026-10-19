import { profil } from '../data/profile.js'
import { belum } from '../lib/isi.js'
import { daftarSosial, inisial } from '../lib/sosial.js'
import { IKON_SOSIAL, IkonUnduh } from './Ikon.jsx'

export default function Hero() {
  const adaFoto = !belum(profil.foto)
  const adaCv = !belum(profil.cv)
  const sosial = daftarSosial()

  return (
    <section className="hero" aria-labelledby="judul-utama">
      <div className="shell hero__grid">
        <div className="hero__teks masuk">
          <p className="hero__sapaan">{profil.sapaan}</p>

          <h1 className="hero__nama" id="judul-utama">
            {profil.nama}
          </h1>

          <p className="hero__peran">{profil.peran}</p>
          <p className="hero__judul">{profil.judul}</p>
          <p className="hero__ringkas">{profil.ringkas}</p>

          <div className="aksi hero__aksi">
            {adaCv ? (
              <a className="tombol tombol--utama" href={profil.cv} download>
                <IkonUnduh />
                Unduh CV
              </a>
            ) : null}

            <a className="tombol" href="#kontak">
              Hubungi saya
            </a>
          </div>

          {sosial.length ? (
            <ul className="hero__sosial">
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

        <div className="hero__foto masuk">
          <div className="foto">
            {adaFoto ? (
              <img src={profil.foto} alt={`Foto ${profil.nama}`} width="320" height="400" />
            ) : (
              <span className="foto__monogram" aria-hidden="true">
                {inisial(profil.nama)}
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
