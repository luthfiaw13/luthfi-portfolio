import { useState } from 'react'
import { navigation } from '../data/portfolio'
import { CloseIcon, MenuIcon } from './Icons'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const handleNavigate = () => setOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <a href="#top" className="inline-flex items-center gap-3" aria-label="Luthfi Awaludin home">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-navy-900 text-sm font-bold tracking-tight text-white">LA</span>
          <span className="hidden text-sm font-semibold tracking-tight text-navy-950 sm:block">Luthfi Awaludin</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-slate-600 transition hover:text-navy-950">
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-slate-200 text-slate-700 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {open ? (
        <nav id="mobile-navigation" className="border-t border-slate-200 bg-white px-5 py-4 md:hidden" aria-label="Mobile navigation">
          <div className="mx-auto grid max-w-7xl gap-1">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavigate}
                className="rounded-lg px-3 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-navy-950"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  )
}
