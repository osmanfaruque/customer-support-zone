function Navbar() {
  const navItems = ["Home", "FAQ", "Changelog", "Blog", "Download", "Contact"];
  return (
    <header className="relative z-20 border-b border-slate-300 bg-[#f4f5f7]">
      <nav className="sticky flex items-center justify-between py-3 sm:py-5 px-5 sm:px-8 lg:px-12">
        <h1 className="text-2xl font-black text-[#15153a] sm:text-3xl lg:text-4xl">
          CS - Ticket System
        </h1>

        <div className="mx-6 hidden flex-1 items-center md:flex lg:mx-10">
          <ul className="mx-5 flex items-center gap-6  font-medium text-slate-700 lg:gap-7">
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
          <button className="rounded-md border border-[#6d40e8] bg-[#7b49f0] px-4 py-2 text-sm font-semibold text-white shadow-[0_2px_0_rgba(0,0,0,0.18)] transition hover:bg-[#6d40e8]">
            + New Ticket
          </button>{" "}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
