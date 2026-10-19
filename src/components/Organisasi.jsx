import { organisasi } from '../data/profile.js'
import { kelasKosong } from '../lib/isi.js'
import Judul from './Judul.jsx'

export default function Organisasi() {
  return (
    <section className="bagian" id="organisasi" aria-labelledby="judul-organisasi">
      <div className="shell">
        <Judul
          id="judul-organisasi"
          judul="Organisasi"
          keterangan="Peran di luar perkuliahan, dan apa yang saya kerjakan di dalamnya."
        />

        <ul className="riwayat">
          {organisasi.map((o, i) => (
            <li className="riwayat__item" key={`${o.lembaga}-${i}`}>
              <p className={kelasKosong(o.periode, 'riwayat__periode')}>{o.periode}</p>

              <div>
                <h3 className={kelasKosong(o.peran, 'riwayat__peran')}>{o.peran}</h3>
                <p className={kelasKosong(o.lembaga, 'riwayat__lembaga')}>{o.lembaga}</p>

                {o.poin?.length ? (
                  <ul className="riwayat__poin">
                    {o.poin.map((t, j) => (
                      <li className={kelasKosong(t)} key={j}>
                        {t}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
