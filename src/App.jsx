import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import Kemampuan from './components/Kemampuan.jsx'
import Kontak from './components/Kontak.jsx'
import Navigasi from './components/Navigasi.jsx'
import Organisasi from './components/Organisasi.jsx'
import Pendidikan from './components/Pendidikan.jsx'
import Proyek from './components/Proyek.jsx'
import Sertifikat from './components/Sertifikat.jsx'
import Tentang from './components/Tentang.jsx'

export default function App() {
  return (
    <>
      <a className="skip" href="#konten">
        Lewati ke konten
      </a>

      <div id="atas" />

      <Navigasi />

      <main id="konten">
        <Hero />
        <Tentang />
        <Pendidikan />
        <Kemampuan />
        <Proyek />
        <Organisasi />
        <Sertifikat />
        <Kontak />
      </main>

      <Footer />
    </>
  )
}
