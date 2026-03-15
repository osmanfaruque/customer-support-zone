const priorityClasses = {
  High: 'text-[#f04444]',
  Medium: 'text-[#f4a300]',
  Low: 'text-[#08a54f]',
}

const statusClasses = {
  Open: 'bg-[#a7e8b8] text-[#037a34]',
  'In-Progress': 'bg-[#f0df9b] text-[#976d00]',
}

function formatDate(dateValue) {
  const date = new Date(dateValue)

  if (Number.isNaN(date.getTime())) {
    return dateValue
  }

  return date.toLocaleDateString('en-US', {
    month: 'numeric',
    day: 'numeric',
    year: 'numeric',
  })
}

function TicketCard({ ticket, isInProgress, onAddToProgress }) {
  const visualStatus = isInProgress ? 'In-Progress' : 'Open'

  return (
    <article
      role="button"
      tabIndex={0}
      onClick={() => onAddToProgress(ticket)}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          onAddToProgress(ticket)
        }
      }}
      className="group cursor-pointer rounded-md border border-slate-200 bg-white px-4 py-3 shadow-[0_1px_2px_rgba(16,24,40,0.05)] transition hover:-translate-y-[1px] hover:border-slate-300"
    >
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-[19px] font-bold leading-tight text-[#1d3557]">
          {ticket.title}
        </h3>
        <span
          className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-sm font-medium ${statusClasses[visualStatus]}`}
        >
          <span className="h-2.5 w-2.5 rounded-full bg-[#08a54f]" />
          {visualStatus}
        </span>
      </div>

      <p className="mt-2 line-clamp-2 text-[17px] leading-snug text-slate-500">{ticket.description}</p>

      <div className="mt-4 flex items-center justify-between gap-2 text-[14px]">
        <div className="flex items-center gap-4">
          <span className="font-semibold text-slate-500">#{ticket.id}</span>
          <span className={`font-bold uppercase tracking-wide ${priorityClasses[ticket.priority]}`}>
            {ticket.priority} PRIORITY
          </span>
        </div>

        <div className="flex items-center gap-4 text-slate-500">
          <span>{ticket.customer}</span>
          <span className="flex items-center gap-1">
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M6 2V4M14 2V4M3 7H17M4.5 4H15.5C16.3284 4 17 4.67157 17 5.5V16C17 16.8284 16.3284 17.5 15.5 17.5H4.5C3.67157 17.5 3 16.8284 3 16V5.5C3 4.67157 3.67157 4 4.5 4Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {formatDate(ticket.createdAt)}
          </span>
        </div>
      </div>
    </article>
  )
}

export default TicketCard
