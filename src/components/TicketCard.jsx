const priorityClasses = {
  High: 'bg-rose-100 text-rose-700 border-rose-200',
  Medium: 'bg-amber-100 text-amber-700 border-amber-200',
  Low: 'bg-sky-100 text-sky-700 border-sky-200',
}

function TicketCard({ ticket, isInProgress, onAddToProgress }) {
  return (
    <article className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center justify-between gap-3">
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
          ID #{ticket.id}
        </span>
        <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${priorityClasses[ticket.priority]}`}>
          {ticket.priority}
        </span>
      </div>

      <h3 className="mt-4 text-lg font-bold text-slate-900">{ticket.title}</h3>
      <p className="mt-2 line-clamp-3 text-sm text-slate-600">{ticket.description}</p>

      <div className="mt-5 space-y-2 text-sm text-slate-600">
        <p><span className="font-semibold text-slate-800">Customer:</span> {ticket.customer}</p>
        <p><span className="font-semibold text-slate-800">Status:</span> {ticket.status}</p>
        <p><span className="font-semibold text-slate-800">Created:</span> {ticket.createdAt}</p>
      </div>

      <button
        type="button"
        onClick={() => onAddToProgress(ticket)}
        disabled={isInProgress}
        className="mt-5 w-full rounded-xl border border-emerald-700 bg-emerald-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-800 disabled:cursor-not-allowed disabled:border-slate-300 disabled:bg-slate-200 disabled:text-slate-500"
      >
        {isInProgress ? 'Already In Progress' : 'Start Progress'}
      </button>
    </article>
  )
}

export default TicketCard
