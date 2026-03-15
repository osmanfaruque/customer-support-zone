function Navbar() {
  const navItems = ['Home', 'FAQ', 'Changelog', 'Blog', 'Download', 'Contact']
  return (
    <header className="relative z-20 border-b border-slate-300 bg-[#f4f5f7]">
      <nav className="mx-auto flex h-[78px] w-full max-w-[1600px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <div className="shrink-0">
          <h1 className="text-[28px] font-black tracking-tight text-[#15153a] sm:text-[30px]">
            CS - Ticket System
          </h1>
        </div>

        <div className="mx-6 hidden flex-1 items-center md:flex lg:mx-10">
          <ul className="mx-5 flex items-center gap-6 whitespace-nowrap text-[13px] font-medium text-slate-700 lg:gap-7">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="transition-colors duration-150 hover:text-[#6f43eb]"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <button className="rounded-md border border-[#6d40e8] bg-[#7b49f0] px-4 py-2 text-sm font-semibold text-white shadow-[0_2px_0_rgba(0,0,0,0.18)] transition hover:bg-[#6d40e8]">
          + New Ticket
        </button>
      </nav>
    </header>
  )
}

export default Navbar
