function Banner({ inProgressCount, resolvedCount }) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-emerald-100 bg-gradient-to-r from-emerald-700 via-teal-700 to-cyan-700 p-6 text-white shadow-lg sm:p-8">
      <div className="relative z-10 grid gap-8 md:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-white/80">Support Overview</p>
          <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">Handle Every Ticket With Clarity</h2>
          <p className="mt-3 max-w-xl text-sm text-white/85 sm:text-base">
            Track active issues, complete tasks, and keep your customer support queue under control in one place.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <article className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
            <p className="text-xs uppercase tracking-[0.2em] text-white/80">In Progress</p>
            <p className="mt-3 text-4xl font-black">{inProgressCount}</p>
          </article>
          <article className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
            <p className="text-xs uppercase tracking-[0.2em] text-white/80">Resolved</p>
            <p className="mt-3 text-4xl font-black">{resolvedCount}</p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Banner
