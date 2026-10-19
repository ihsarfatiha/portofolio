import { pendidikan } from '../data/profile.js'
import { kelasKosong } from '../lib/isi.js'
import Judul from './Judul.jsx'

export default function Pendidikan() {
  return (
    <section className="bagian" id="pendidikan" aria-labelledby="judul-pendidikan">
      <div className="shell">
        <Judul id="judul-pendidikan" judul="Pendidikan" />

        {pendidikan.map((p) => (
          <article className="pendidikan" key={p.kampus + p.jenjang}>
            <div className="pendidikan__kepala">
              <h3 className={kelasKosong(p.kampus, 'pendidikan__kampus')}>{p.kampus}</h3>
              <p className={kelasKosong(p.jenjang, 'pendidikan__jenjang')}>{p.jenjang}</p>
              <p className={kelasKosong(p.periode, 'pendidikan__periode')}>{p.periode}</p>
            </div>

            {p.ipk ? (
              <p className="pendidikan__ipk">
                <span className={kelasKosong(p.ipk, 'label mono')}>
                  {String(p.ipk).trim().startsWith('[') ? p.ipk : `IPK ${p.ipk}`}
                </span>
              </p>
            ) : null}

            {p.keterangan ? <p className="pendidikan__keterangan">{p.keterangan}</p> : null}

            {p.matakuliah?.length ? (
              <ul className="baris-label pendidikan__matakuliah">
                {p.matakuliah.map((m) => (
                  <li className={kelasKosong(m, 'label')} key={m}>
                    {m}
                  </li>
                ))}
              </ul>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  )
}
