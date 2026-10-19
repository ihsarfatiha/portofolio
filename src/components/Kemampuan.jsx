import { useState } from 'react'
import { kemampuan } from '../data/profile.js'
import Judul from './Judul.jsx'

// Logo diambil dari cdn.simpleicons.org. Kalau gagal dimuat, ikonnya
// menghilang dan labelnya tetap terbaca sebagai teks biasa.
function Logo({ nama }) {
  const [gagal, setGagal] = useState(false)

  if (!nama || gagal) return null

  return (
    <img
      src={`https://cdn.simpleicons.org/${nama}/6e9c93`}
      alt=""
      width="14"
      height="14"
      loading="lazy"
      decoding="async"
      onError={() => setGagal(true)}
    />
  )
}

export default function Kemampuan() {
  return (
    <section className="bagian" id="kemampuan" aria-labelledby="judul-kemampuan">
      <div className="shell">
        <Judul
          id="judul-kemampuan"
          judul="Kemampuan"
          keterangan="Yang saya pakai sehari-hari, dikelompokkan menurut jenis pekerjaannya."
        />

        <div className="bidang">
          {kemampuan.map((grup) => (
            <section className="bidang__grup" key={grup.nama} aria-labelledby={`bidang-${grup.nama}`}>
              <h3 className="bidang__nama" id={`bidang-${grup.nama}`}>
                {grup.nama}
              </h3>

              <ul className="baris-label baris-label--chip">
                {grup.isi.map((s) => (
                  <li className="chip" key={s.teks}>
                    <Logo nama={s.logo} />
                    {s.teks}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  )
}
