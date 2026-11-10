import { useEffect, useId, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import {
  Award,
  Banknote,
  BarChart3,
  Braces,
  BrainCircuit,
  Car,
  ChartLine,
  ChartSpline,
  Cloud,
  Code2,
  Container,
  Cylinder,
  Database,
  Download,
  ExternalLink,
  FileCode2,
  Flame,
  GitBranch,
  Globe,
  GraduationCap,
  Grid3x3,
  HeartPulse,
  Layout,
  Map,
  Menu,
  MessageSquareText,
  Network,
  NotebookPen,
  Palette,
  Send,
  Server,
  Table2,
  Terminal,
  X,
  Zap,
} from 'lucide-react'
import {
  keahlian,
  pendidikan,
  profil,
  proyek,
  sertifikat,
  tentang,
} from './data/profile.js'
import { belum } from './lib/isi.js'

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
    <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
  </svg>
)

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
  </svg>
)

const InstagramIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="h-5 w-5"
    aria-hidden="true"
  >
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
  </svg>
)

const socials = [
  { label: 'GitHub', href: profil.github, icon: <GithubIcon /> },
  { label: 'LinkedIn', href: profil.linkedin, icon: <LinkedinIcon /> },
  { label: 'Instagram', href: profil.instagram, icon: <InstagramIcon /> },
].filter((s) => !belum(s.href))

const links = ['Home', 'About', 'Skills', 'Education', 'Projects', 'Certificates', 'Contact']
const slug = (label) => label.toLowerCase().replace(/\s+/g, '-')

const IKON_SKILL = {
  Python: Code2,
  SQL: Database,
  PHP: Server,
  Laravel: Layout,
  JavaScript: Braces,
  HTML: FileCode2,
  CSS: Palette,
  'VS Code': Terminal,
  'Jupyter Notebook': NotebookPen,
  'Google Colab': Cloud,
  'Git & GitHub': GitBranch,
  Docker: Container,
  'Scikit-Learn': BrainCircuit,
  PySpark: Zap,
  TensorFlow: Network,
  pandas: Table2,
  NumPy: Grid3x3,
  Matplotlib: ChartSpline,
  Plotly: ChartLine,
  MySQL: Cylinder,
  QGIS: Map,
  'Google Earth Engine': Globe,
}

// Tampilan kartu proyek mengikuti desain: gradien + ikon besar.
const TAMPILAN_PROYEK = {
  beauty: { Icon: MessageSquareText, grad: 'from-fuchsia-400 to-pink-300' },
  diabetes: { Icon: HeartPulse, grad: 'from-rose-400 to-orange-300' },
  linkedin: { Icon: Banknote, grad: 'from-emerald-400 to-teal-300' },
  gambut: { Icon: Flame, grad: 'from-amber-400 to-red-400' },
  itagarage: { Icon: Car, grad: 'from-sky-400 to-indigo-400' },
  webgis: { Icon: Map, grad: 'from-teal-400 to-cyan-300' },
}

const btnPrimary =
  'inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:-translate-y-0.5 hover:bg-accent-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent'
const btnSecondary =
  'inline-flex items-center justify-center gap-2 rounded-full border-2 border-accent px-7 py-3 text-sm font-semibold text-accent transition hover:-translate-y-0.5 hover:bg-accent hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent'

function Reveal({ children, className = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          io.disconnect()
        }
      },
      { threshold: 0.12 },
    )

    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  )
}

function Section({ name, title, children, alt }) {
  return (
    <section id={slug(name)} className={`py-20 md:py-28 ${alt ? 'bg-slate-50' : ''}`}>
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">{title}</h2>
          <div className="mx-auto mt-4 h-1 w-14 rounded-full bg-accent" />
        </Reveal>
        {children}
      </div>
    </section>
  )
}

function Avatar({ className }) {
  const adaFoto = !belum(profil.foto)

  // Selama foto belum diisi, tampilkan monogram inisial supaya lingkarannya
  // tetap terlihat sengaja didesain, bukan gambar yang gagal dimuat.
  const inisial = profil.nama
    .split(/\s+/)
    .filter(Boolean)
    .map((kata) => kata[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()

  return (
    <div
      className={`flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-indigo-100 to-indigo-300 text-accent ring-8 ring-white shadow-2xl shadow-indigo-200 ${className}`}
      role="img"
      aria-label={adaFoto ? `Foto ${profil.nama}` : `Monogram ${profil.nama}`}
    >
      {adaFoto ? (
        <img src={profil.foto} alt="" className="h-full w-full object-cover" />
      ) : (
        <span className="text-6xl font-extrabold tracking-tight md:text-7xl" aria-hidden="true">
          {inisial}
        </span>
      )}
    </div>
  )
}

function SocialRow() {
  return (
    <div className="flex gap-3">
      {socials.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noreferrer"
          aria-label={s.label}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:text-white"
        >
          {s.icon}
        </a>
      ))}
    </div>
  )
}

function Timeline({ items }) {
  return (
    <div className="relative mx-auto max-w-3xl">
      <div className="absolute bottom-0 left-5 top-0 w-px bg-indigo-200" />
      <ul className="space-y-8">
        {items.map((it) => (
          <li key={`${it.period}-${it.title}`} className="relative pl-16">
            <span className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white ring-4 ring-white">
              {it.icon}
            </span>
            <Reveal>
              <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-md shadow-slate-200/60 transition hover:-translate-y-1 hover:shadow-xl">
                <span className="inline-block rounded-full bg-accent-soft px-3 py-1 text-xs font-bold text-accent">
                  {it.period}
                </span>
                <h3 className="mt-3 text-lg font-bold">{it.title}</h3>
                <p className="text-sm font-medium text-slate-500">{it.sub}</p>
                {it.desc && <p className="mt-3 text-slate-600">{it.desc}</p>}
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </div>
  )
}

function SkillGroup({ title, items }) {
  return (
    <Reveal className="mb-14 last:mb-0">
      <h3 className="mb-6 text-center text-xl font-bold">{title}</h3>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((item) => {
          const Icon = IKON_SKILL[item.nama] || Code2
          return (
            <div
              key={item.nama}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-slate-100 bg-white p-6 shadow-md shadow-slate-200/60 transition hover:-translate-y-1 hover:border-accent hover:shadow-xl"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent transition group-hover:bg-accent group-hover:text-white">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <span className="text-center text-sm font-semibold">{item.nama}</span>
            </div>
          )
        })}
      </div>
    </Reveal>
  )
}

function Dialog({ title, children, onClose, wide = false }) {
  const headingId = useId()
  const panelRef = useRef(null)
  const closeRef = useRef(null)
  const onCloseRef = useRef(onClose)
  onCloseRef.current = onClose

  useEffect(() => {
    const previous = document.activeElement
    const overflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onCloseRef.current()
        return
      }

      if (event.key !== 'Tab') return

      const focusable = panelRef.current?.querySelectorAll(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
      )
      if (!focusable?.length) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = overflow
      if (previous instanceof HTMLElement) previous.focus()
    }
  }, [])

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-slate-900/50 backdrop-blur-sm sm:items-center sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onCloseRef.current()
      }}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={headingId}
        className={`max-h-[92vh] w-full overflow-y-auto rounded-t-3xl bg-white shadow-2xl sm:rounded-3xl ${
          wide ? 'sm:max-w-3xl' : 'sm:max-w-xl'
        }`}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-slate-100 bg-white/95 px-6 py-4 backdrop-blur">
          <h2 id={headingId} className="text-lg font-extrabold tracking-tight">
            {title}
          </h2>
          <button
            ref={closeRef}
            type="button"
            onClick={() => onCloseRef.current()}
            className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            aria-label="Tutup dialog"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
        <div className="px-6 py-6">{children}</div>
      </div>
    </div>,
    document.body,
  )
}

function DetailProyek({ p }) {
  const adaRepo = !belum(p.repo)
  const adaDemo = !belum(p.demo)

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-500">
        <span className="rounded-full bg-accent-soft px-3 py-1 text-accent">{p.kategori}</span>
        <span>{p.tahun}</span>
      </div>

      <h3 className="mt-4 text-2xl font-extrabold tracking-tight">{p.nama}</h3>
      <p className="mt-3 leading-relaxed text-slate-600">{p.detail}</p>

      {p.metrik?.length ? (
        <ul className="mt-6 grid grid-cols-2 gap-3">
          {p.metrik.map((m) => (
            <li key={m.label} className="rounded-xl bg-slate-50 p-4">
              <span className="block text-lg font-extrabold text-accent">{m.nilai}</span>
              <span className="text-xs font-medium text-slate-500">{m.label}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {p.stack?.length ? (
        <div className="mt-6">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
            Stack yang dipakai
          </p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {p.stack.map((s) => (
              <li
                key={s}
                className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {adaDemo || adaRepo ? (
        <div className="mt-7 flex flex-wrap gap-3">
          {adaDemo ? (
            <a className={btnPrimary} href={p.demo} target="_blank" rel="noreferrer">
              Buka demo
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          ) : null}

          {adaRepo ? (
            <a className={btnSecondary} href={p.repo} target="_blank" rel="noreferrer">
              Kode sumber
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          ) : null}
        </div>
      ) : (
        <p className="mt-6 rounded-xl bg-slate-50 p-4 text-sm text-slate-500">
          Tautan demo dan kode sumber proyek ini belum dipublikasikan.
        </p>
      )}
    </div>
  )
}

function KartuSertifikat({ s }) {
  const adaTautan = !belum(s.tautan)

  return (
    <article className="group flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-md shadow-slate-200/60 transition hover:-translate-y-1 hover:border-accent hover:shadow-xl">
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent transition group-hover:bg-accent group-hover:text-white">
        <Award className="h-5 w-5" aria-hidden="true" />
      </span>

      <h3 className="mt-4 font-bold leading-snug">{s.nama}</h3>
      <p className="mt-2 text-sm font-medium text-slate-500">{s.penerbit}</p>
      <p className="mt-1 text-xs font-semibold text-slate-400">{s.tahun}</p>

      <div className="mt-auto pt-5">
        {adaTautan ? (
          <a
            href={s.tautan}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-accent transition hover:text-accent-dark"
          >
            Verifikasi
            <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        ) : (
          <span className="text-xs font-medium text-slate-400">Tanpa tautan</span>
        )}
      </div>
    </article>
  )
}

export default function App() {
  const [open, setOpen] = useState(false)
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ Nama: '', Email: '', Pesan: '' })
  const [proyekAktif, setProyekAktif] = useState(null)

  const ubah = (event) => {
    const { name, value } = event.target
    setForm((previous) => ({ ...previous, [name]: value }))
    if (sent) setSent(false)
  }

  const kirim = (event) => {
    event.preventDefault()

    const subjek = `Pesan portofolio dari ${form.Nama}`
    const isi = `Nama: ${form.Nama}\nEmail: ${form.Email}\n\n${form.Pesan}`

    window.location.href = `mailto:${profil.email}?subject=${encodeURIComponent(
      subjek,
    )}&body=${encodeURIComponent(isi)}`

    setSent(true)
  }

  return (
    <div className="min-h-screen antialiased">
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/85 backdrop-blur">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#home" className="text-lg font-extrabold tracking-tight md:text-xl">
            {profil.nama}
            <span className="text-accent">.</span>
          </a>

          <ul className="hidden items-center gap-7 lg:flex">
            {links.map((l) => (
              <li key={l}>
                <a
                  href={`#${slug(l)}`}
                  className="text-sm font-medium text-slate-600 transition hover:text-accent"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="rounded-lg p-2 lg:hidden"
            aria-label="Buka menu navigasi"
            aria-expanded={open}
            aria-controls="menu-utama"
            onClick={() => setOpen(!open)}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </nav>

        {open && (
          <ul id="menu-utama" className="border-t border-slate-100 bg-white px-6 py-3 lg:hidden">
            {links.map((l) => (
              <li key={l}>
                <a
                  href={`#${slug(l)}`}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm font-medium text-slate-700 hover:text-accent"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        )}
      </header>

      <main>
        <section id="home" className="bg-gradient-to-b from-indigo-50/70 to-white py-20 md:py-32">
          <div className="mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
            <Reveal className="flex flex-col items-center">
              <Avatar className="h-56 w-56 md:h-72 md:w-72" />
              <p className="mt-10 text-sm font-bold uppercase tracking-widest text-accent">
                Halo, saya {profil.panggilan}
              </p>
              <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">
                {profil.peran}
              </h1>
              <div className="mt-9 flex flex-wrap justify-center gap-4">
                <a href="#contact" className={btnPrimary}>
                  Hire Me
                </a>

                {belum(profil.cv) ? null : (
                  <a
                    href={profil.cv}
                    download="CV - Muhammad Ihsar Fatiha.pdf"
                    className={btnSecondary}
                  >
                    <Download className="h-4 w-4" aria-hidden="true" />
                    Download CV
                  </a>
                )}
              </div>
            </Reveal>
          </div>
        </section>

        <Section name="About" title="About Me">
          <Reveal className="mx-auto max-w-3xl">
            <p className="text-lg leading-relaxed text-slate-600">{tentang.join(' ')}</p>
            <div className="mt-8">
              <SocialRow />
            </div>
          </Reveal>
        </Section>

        <Section name="Skills" title="Skills" alt>
          {keahlian.map((group) => (
            <SkillGroup key={group.nama} title={group.nama} items={group.isi} />
          ))}
        </Section>

        <Section name="Education" title="Education">
          <Timeline
            items={pendidikan.map((item) => ({
              period: item.periode,
              title: item.institusi,
              sub: item.jenjang,
              desc: item.ipk ? `IPK ${item.ipk}` : null,
              icon: <GraduationCap className="h-5 w-5" aria-hidden="true" />,
            }))}
          />
        </Section>

        <Section name="Projects" title="My Portfolio">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {proyek.map((p) => {
              const tampilan = TAMPILAN_PROYEK[p.id] || {
                Icon: BarChart3,
                grad: 'from-slate-400 to-slate-300',
              }
              const Icon = tampilan.Icon

              return (
                <Reveal key={p.id}>
                  <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-md shadow-slate-200/60 transition hover:-translate-y-1 hover:shadow-xl">
                    <div
                      className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${tampilan.grad}`}
                    >
                      {p.gambar ? (
                        <img
                          src={p.gambar}
                          alt={`Pratinjau proyek ${p.nama}`}
                          width={1600}
                          height={1000}
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center">
                          <Icon
                            className="h-14 w-14 text-white/90 transition group-hover:scale-110"
                            strokeWidth={1.5}
                            aria-hidden="true"
                          />
                        </div>
                      )}
                    </div>

                    <div className="flex flex-1 flex-col justify-between gap-5 p-6">
                      <h3 className="font-bold leading-snug">{p.nama}</h3>
                      <button
                        type="button"
                        onClick={() => setProyekAktif(p)}
                        className="self-start rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white transition hover:bg-accent-dark"
                        aria-label={`Lihat detail proyek ${p.nama}`}
                      >
                        Lihat
                      </button>
                    </div>
                  </article>
                </Reveal>
              )
            })}
          </div>

          <Reveal className="mt-12 text-center">
            <a
              href="https://github.com/ihsarfatiha?tab=repositories"
              target="_blank"
              rel="noreferrer"
              className={btnSecondary}
            >
              Lihat Semua
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </Reveal>
        </Section>

        <Section name="Certificates" title="Certificates">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {sertifikat.map((s) => (
              <Reveal key={`${s.nama}-${s.tahun}`}>
                <KartuSertifikat s={s} />
              </Reveal>
            ))}
          </div>
        </Section>

        <Section name="Contact" title="Contact Me" alt>
          <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[1fr_auto]">
            <Reveal>
              <form
                onSubmit={kirim}
                className="space-y-5 rounded-2xl bg-white p-6 shadow-md shadow-slate-200/60 md:p-8"
              >
                <label className="block text-sm font-semibold">
                  Nama
                  <input
                    required
                    type="text"
                    name="Nama"
                    value={form.Nama}
                    onChange={ubah}
                    autoComplete="name"
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-accent focus:ring-4 focus:ring-indigo-100"
                  />
                </label>

                <label className="block text-sm font-semibold">
                  Email
                  <input
                    required
                    type="email"
                    name="Email"
                    value={form.Email}
                    onChange={ubah}
                    autoComplete="email"
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-accent focus:ring-4 focus:ring-indigo-100"
                  />
                </label>

                <label className="block text-sm font-semibold">
                  Pesan
                  <textarea
                    required
                    name="Pesan"
                    value={form.Pesan}
                    onChange={ubah}
                    rows={5}
                    className="mt-2 w-full resize-none rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-accent focus:ring-4 focus:ring-indigo-100"
                  />
                </label>

                <button type="submit" className={btnPrimary}>
                  <Send className="h-4 w-4" aria-hidden="true" />
                  Kirim Pesan
                </button>

                {sent && (
                  <p role="status" className="text-sm font-medium text-emerald-600">
                    Terima kasih! Pesan Anda siap dikirim lewat aplikasi email.
                  </p>
                )}
              </form>
            </Reveal>

            <Reveal className="flex flex-col justify-center gap-4">
              <p className="font-semibold">Temukan saya di</p>

              <div className="flex gap-3 md:flex-col">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-accent hover:bg-accent hover:text-white"
                  >
                    {s.icon}
                    <span className="hidden sm:inline">{s.label}</span>
                  </a>
                ))}
              </div>
            </Reveal>
          </div>
        </Section>
      </main>

      <footer className="border-t border-slate-100 py-8 text-center text-sm text-slate-500">
        © {profil.panggilan}. All Rights Reserved.
      </footer>

      {proyekAktif ? (
        <Dialog title="Detail Proyek" wide onClose={() => setProyekAktif(null)}>
          <DetailProyek p={proyekAktif} />
        </Dialog>
      ) : null}
    </div>
  )
}
