function Navbar() {
  return (
    <header className="relative z-10 border-b border-slate-200/70 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-700 text-sm font-bold text-white">
            CS
          </div>
          <div>
            <h1 className="text-lg font-black tracking-tight text-slate-900 sm:text-xl">Customer Support Zone</h1>
            <p className="text-xs text-slate-500">Ticket Command Center</p>
          </div>
        </div>

        <ul className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
          <li><a href="#tickets" className="transition hover:text-emerald-700">Tickets</a></li>
          <li><a href="#status" className="transition hover:text-emerald-700">Task Status</a></li>
          <li><a href="#footer" className="transition hover:text-emerald-700">Help</a></li>
        </ul>

        <button className="rounded-xl bg-emerald-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-800">
          New Ticket
        </button>
      </nav>
    </header>
  )
}

export default Navbar
