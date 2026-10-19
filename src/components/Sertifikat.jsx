import { sertifikat } from '../data/profile.js'
import { belum, kelasKosong } from '../lib/isi.js'
import { IkonLuar } from './Ikon.jsx'
import Judul from './Judul.jsx'

export default function Sertifikat() {
  // Angka di keterangan dihitung dari datanya, bukan ditulis manual, supaya
  // tidak pernah meleset saat Anda menambah atau mengurangi sertifikat.
  const adaTautan = sertifikat.filter((s) => !belum(s.tautan)).length
  const keterangan = adaTautan
    ? `${sertifikat.length} kursus dan pelatihan yang sudah saya selesaikan. ${adaTautan} di antaranya punya tautan kredensial yang bisa Anda periksa sendiri.`
    : `${sertifikat.length} kursus dan pelatihan yang sudah saya selesaikan.`

  return (
    <section className="bagian" id="sertifikat" aria-labelledby="judul-sertifikat">
      <div className="shell">
        <Judul id="judul-sertifikat" judul="Sertifikat & pelatihan" keterangan={keterangan} />

        <div className="sertifikat">
          {sertifikat.map((s, i) => {
            const adaGambar = !belum(s.gambar)
            const adaTautan = !belum(s.tautan)

            return (
              <article className="kartu" key={`${s.nama}-${i}`}>
                {adaGambar ? (
                  <div className="sertifikat__gambar">
                    <img
                      src={s.gambar}
                      alt={`Sertifikat ${s.nama}`}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                ) : null}

                <div className="kartu__isi">
                  <div>
                    <h3 className={kelasKosong(s.nama, 'sertifikat__nama')}>{s.nama}</h3>
                    <p className="sertifikat__penerbit">
                      <span className={kelasKosong(s.penerbit)}>{s.penerbit}</span>
                      {s.tahun ? (
                        <>
                          <span aria-hidden="true"> · </span>
                          <span className={kelasKosong(s.tahun)}>{s.tahun}</span>
                        </>
                      ) : null}
                    </p>
                  </div>

                  {adaTautan ? (
                    <div className="aksi">
                      <a
                        className="tombol tombol--kecil"
                        href={s.tautan}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <IkonLuar />
                        Lihat kredensial
                      </a>
                    </div>
                  ) : null}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
