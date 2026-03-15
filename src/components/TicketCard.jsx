const priorityClasses = {
  High: 'text-[#f04444]',
  Medium: 'text-[#f4a300]',
  Low: 'text-[#08a54f]',
}

const statusClasses = {
  Open: 'bg-[#a7e8b8] text-[#037a34]',
  'In-Progress': 'bg-[#f0df9b] text-[#976d00]',
}

const statusDotClasses = {
  Open: 'bg-[#08a54f]',
  'In-Progress': 'bg-[#f4b000]',
}

const statusLabel = {
  Open: 'Open',
  'In-Progress': 'In- Progress',
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
      className="group cursor-pointer rounded-[6px] border border-[#d9dce3] bg-[#f8fafc] px-5 py-4 shadow-[0_1px_1px_rgba(16,24,40,0.04)] transition hover:border-[#cfd5df]"
    >
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-[15px] font-bold leading-[1.2] tracking-[-0.01em] text-[#122a44] sm:text-[17px]">
          {ticket.title}
        </h3>
        <span
          className={`inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-1.5 text-[14px] font-medium leading-none ${statusClasses[visualStatus]}`}
        >
          <span className={`h-2.5 w-2.5 rounded-full ${statusDotClasses[visualStatus]}`} />
          {statusLabel[visualStatus]}
        </span>
      </div>

      <p className="mt-3 line-clamp-2 text-[14px] leading-[1.25] text-[#6a7687] sm:text-[15px]">{ticket.description}</p>

      <div className="mt-5 flex items-center justify-between gap-2 text-[13px] sm:text-[14px]">
        <div className="flex items-center gap-4">
          <span className="font-semibold text-[#677588]">#{ticket.id}</span>
          <span className={`font-bold uppercase tracking-wide ${priorityClasses[ticket.priority]}`}>
            {ticket.priority} PRIORITY
          </span>
        </div>

        <div className="flex items-center gap-4 text-[#677588]">
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
