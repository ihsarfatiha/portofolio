import { proyek } from '../data/profile.js'
import { belum } from '../lib/isi.js'
import { inisial } from '../lib/sosial.js'
import { IkonKode, IkonLuar } from './Ikon.jsx'
import Judul from './Judul.jsx'

function Status({ live }) {
  return (
    <span className={live ? 'status status--live' : 'status'}>
      <span className="status__lampu" aria-hidden="true" />
      {live ? 'Demo daring' : 'Kode sumber'}
    </span>
  )
}

function Metrik({ isi }) {
  return (
    <ul className="metrik">
      {isi.map((m) => (
        <li className="metrik__sel" key={m.label}>
          <span className="metrik__nilai mono">{m.nilai}</span>
          <span className="metrik__label">{m.label}</span>
        </li>
      ))}
    </ul>
  )
}

// Tangga skor risiko provinsi. Datanya apa adanya dari hasil model XGBoost,
// tidak dibulatkan dan tidak diurutkan ulang secara dramatis.
function Risiko({ isi }) {
  return (
    <div className="risiko">
      <span className="risiko__judul">skor risiko kebakaran per provinsi · xgboost</span>
      <ul className="risiko__daftar">
        {isi.map((r) => (
          <li className="risiko__baris" key={r.nama}>
            <span className="risiko__nama">{r.nama}</span>
            <span className="risiko__trek">
              <span
                className={`risiko__isi risiko__isi--${r.tingkat}`}
                style={{ width: `${r.skor}%` }}
              />
            </span>
            <span className="risiko__skor">{String(r.skor).replace('.', ',')}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function Kartu({ p }) {
  const live = p.status === 'live'
  const adaRepo = !belum(p.repo)
  const adaDemo = !belum(p.demo)
  const adaGambar = !belum(p.gambar)

  return (
    <article className="kartu">
      <div className="proyek__gambar">
        {adaGambar ? (
          <img
            src={p.gambar}
            alt={`Hasil dari proyek ${p.nama}`}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <span className="proyek__pola" aria-hidden="true">
            {inisial(p.nama)}
          </span>
        )}
      </div>

      <div className="kartu__isi">
        <div className="proyek__kepala">
          <Status live={live} />
          <span className="proyek__tahun">{p.tahun}</span>
        </div>

        <h3 className="proyek__nama">{p.nama}</h3>
        <p className="proyek__ringkas">{p.ringkas}</p>

        {/* Blok data dan tombol dikumpulkan di satu wadah. Wadah ini yang
            didorong ke dasar kartu (lihat .proyek__kaki di app.css), jadi
            kartu yang teksnya lebih pendek tetap setinggi tetangganya dan
            metriknya sejajar. */}
        <div className="proyek__kaki">
          {p.metrik?.length ? <Metrik isi={p.metrik} /> : null}
          {p.risiko?.length ? <Risiko isi={p.risiko} /> : null}

          {p.stack?.length ? (
            <ul className="baris-label">
              {p.stack.map((s) => (
                <li className="label" key={s}>
                  {s}
                </li>
              ))}
            </ul>
          ) : null}

          {adaRepo || adaDemo ? (
            <div className="aksi">
              {adaDemo ? (
                <a
                  className="tombol tombol--utama tombol--kecil"
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  <IkonLuar />
                  Buka demo
                </a>
              ) : null}

              {adaRepo ? (
                <a
                  className="tombol tombol--kecil"
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                >
                  <IkonKode />
                  Kode sumber
                </a>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </article>
  )
}

export default function Proyek() {
  return (
    <section className="bagian" id="proyek" aria-labelledby="judul-proyek">
      <div className="shell">
        <Judul
          id="judul-proyek"
          judul="Proyek"
          keterangan="Semuanya bisa Anda buka dan periksa sendiri: kode sumbernya terbuka, dan dua di antaranya punya demo daring."
        />

        <div className="proyek">
          {proyek.map((p) => (
            <Kartu key={p.id} p={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
