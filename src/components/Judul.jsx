// Kepala bagian. Dipakai semua bagian supaya jarak dan ukuran judulnya seragam.
export default function Judul({ id, judul, keterangan }) {
  return (
    <header className="bagian__kepala">
      <h2 className="bagian__judul" id={id}>
        {judul}
      </h2>
      {keterangan ? <p className="bagian__keterangan">{keterangan}</p> : null}
    </header>
  )
}
