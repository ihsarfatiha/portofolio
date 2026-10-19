import { angka, tentang } from '../data/profile.js'
import Judul from './Judul.jsx'

export default function Tentang() {
  return (
    <section className="bagian" id="tentang" aria-labelledby="judul-tentang">
      <div className="shell">
        <Judul
          id="judul-tentang"
          judul="Tentang saya"
          keterangan="Siapa saya, dan apa yang sebenarnya saya kerjakan."
        />

        <div className="tentang">
          <div className="tentang__teks">
            {tentang.map((paragraf, i) => (
              <p key={i}>{paragraf}</p>
            ))}
          </div>

          <ul className="angka">
            {angka.map((a) => (
              <li className="angka__sel" key={a.label}>
                <span className="angka__nilai mono">{a.nilai}</span>
                <span className="angka__label">{a.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
