// Tautan sosial diturunkan dari `profil`, jadi tidak ada data yang ditulis dua
// kali. Yang masih berupa penanda "[" otomatis tersaring keluar dan tidak
// pernah muncul sebagai tombol rusak.
import { profil } from '../data/profile.js'
import { belum } from './isi.js'

export function tautanSurel(nilai) {
  return belum(nilai) ? null : `mailto:${nilai}`
}

export function tautanWhatsApp(nilai) {
  if (belum(nilai)) return null

  // Nomor boleh ditulis apa adanya seperti di CV ("08515 6046 957").
  // Bentuk internasionalnya dibentuk di sini.
  let angka = String(nilai).replace(/\D/g, '')
  if (angka.startsWith('0')) angka = '62' + angka.slice(1)
  else if (angka.startsWith('8')) angka = '62' + angka

  return angka ? `https://wa.me/${angka}` : null
}

export function daftarSosial() {
  const kandidat = [
    { kunci: 'github', label: 'GitHub', tautan: profil.github },
    { kunci: 'linkedin', label: 'LinkedIn', tautan: profil.linkedin },
    { kunci: 'instagram', label: 'Instagram', tautan: profil.instagram },
    { kunci: 'whatsapp', label: 'WhatsApp', tautan: tautanWhatsApp(profil.whatsapp) },
    { kunci: 'email', label: 'Email', tautan: tautanSurel(profil.email) },
  ]

  return kandidat.filter((s) => !belum(s.tautan))
}

// Inisial untuk monogram saat foto belum diisi. "Muhammad Ihsar Fatiha" -> MIF.
export function inisial(nama) {
  const huruf = String(nama)
    .split(/\s+/)
    .filter((kata) => /^[a-z0-9]/i.test(kata))
    .map((kata) => kata[0].toUpperCase())
  return [...new Set(huruf)].slice(0, 3).join('')
}
