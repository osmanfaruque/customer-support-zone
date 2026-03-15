function TaskStatus({ inProgressTickets, resolvedTickets, onCompleteTicket }) {
  return (
    <aside id="status" className="space-y-6 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <section>
        <h3 className="text-xl font-black text-slate-900">Task Status</h3>
        <p className="mt-1 text-sm text-slate-500">Tickets currently being worked on.</p>

        <div className="mt-4 space-y-3">
          {inProgressTickets.length === 0 ? (
            <p className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-4 text-sm text-slate-500">
              No ticket is in progress right now.
            </p>
          ) : (
            inProgressTickets.map((ticket) => (
              <article key={ticket.id} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <h4 className="font-semibold text-slate-800">{ticket.title}</h4>
                <button
                  type="button"
                  onClick={() => onCompleteTicket(ticket.id)}
                  className="mt-3 w-full rounded-lg border border-emerald-700 bg-white px-3 py-2 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-700 hover:text-white"
                >
                  Complete
                </button>
              </article>
            ))
          )}
        </div>
      </section>

      <section className="border-t border-slate-200 pt-5">
        <h3 className="text-xl font-black text-slate-900">Resolved List</h3>
        <p className="mt-1 text-sm text-slate-500">Recently completed support tickets.</p>

        <ul className="mt-4 space-y-2">
          {resolvedTickets.length === 0 ? (
            <li className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-4 text-sm text-slate-500">
              No resolved tickets yet.
            </li>
          ) : (
            resolvedTickets.map((ticket) => (
              <li key={ticket.id} className="rounded-xl border border-emerald-100 bg-emerald-50 p-3 text-sm text-emerald-900">
                <span className="font-semibold">{ticket.title}</span>
                <span className="block text-xs text-emerald-700">Resolved for {ticket.customer}</span>
              </li>
            ))
          )}
        </ul>
      </section>
    </aside>
  )
}

export default TaskStatus
