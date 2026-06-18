import Link from 'next/link'

export const dynamic = 'force-dynamic'

export default function NotFound() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#1a1a1a', flexDirection: 'column', gap: 24, padding: 40 }}>
      <div style={{ fontSize: 80, fontWeight: 700, color: 'rgba(255,255,255,.1)', lineHeight: 1 }}>404</div>
      <h1 style={{ fontSize: 24, fontWeight: 600, color: '#fff', margin: 0 }}>Stranica nije pronađena</h1>
      <Link href="/" style={{ padding: '14px 40px', background: '#e11f26', color: '#fff', fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none' }}>
        Povratak na početnu
      </Link>
    </div>
  )
}
