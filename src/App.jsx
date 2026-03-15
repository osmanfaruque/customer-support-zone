import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import TaskStatus from './components/TaskStatus'
import TicketCard from './components/TicketCard'
import tickets from './data/tickets'

function App() {
  const [availableTickets, setAvailableTickets] = useState(tickets)
  const [inProgressTickets, setInProgressTickets] = useState([])
  const [resolvedTickets, setResolvedTickets] = useState([])

  useEffect(() => {
    console.log('[TicketFlow] InitialLoad', {
      availableCount: tickets.length,
      inProgressCount: 0,
      resolvedCount: 0,
    })
  }, [])

  useEffect(() => {
    console.log('[TicketFlow] StateSnapshot', {
      availableCount: availableTickets.length,
      inProgressCount: inProgressTickets.length,
      resolvedCount: resolvedTickets.length,
    })
  }, [availableTickets, inProgressTickets, resolvedTickets])

  const handleAddToProgress = (ticket) => {
    console.log('[TicketFlow] AddRequested', {
      ticketId: ticket.id,
      title: ticket.title,
    })

    const alreadyInProgress = inProgressTickets.some((item) => item.id === ticket.id)
    const alreadyResolved = resolvedTickets.some((item) => item.id === ticket.id)

    if (alreadyInProgress || alreadyResolved) {
      console.log('[TicketFlow] AddIgnored', {
        ticketId: ticket.id,
        reason: alreadyResolved ? 'already_resolved' : 'already_in_progress',
      })
      toast.info('This ticket is already tracked.')
      return
    }

    setInProgressTickets((prev) => {
      const next = [...prev, ticket]
      console.log('[TicketFlow] InProgressUpdated', {
        addedTicketId: ticket.id,
        nextInProgressIds: next.map((item) => item.id),
      })
      return next
    })

    toast.success('Ticket added to task status.')
  }

  const handleCompleteTicket = (ticketId) => {
    console.log('[TicketFlow] CompleteRequested', { ticketId })

    const completedTicket = inProgressTickets.find((item) => item.id === ticketId)

    if (!completedTicket) {
      console.log('[TicketFlow] CompleteIgnored', {
        ticketId,
        reason: 'not_in_progress',
      })
      toast.error('Ticket not found in progress list.')
      return
    }

    setInProgressTickets((prev) => {
      const next = prev.filter((item) => item.id !== ticketId)
      console.log('[TicketFlow] InProgressAfterComplete', {
        ticketId,
        nextInProgressIds: next.map((item) => item.id),
      })
      return next
    })

    setResolvedTickets((prev) => {
      const next = [...prev, completedTicket]
      console.log('[TicketFlow] ResolvedUpdated', {
        resolvedTicketId: completedTicket.id,
        nextResolvedIds: next.map((item) => item.id),
      })
      return next
    })

    setAvailableTickets((prev) => {
      const next = prev.filter((item) => item.id !== ticketId)
      console.log('[TicketFlow] AvailableUpdated', {
        removedTicketId: ticketId,
        nextAvailableIds: next.map((item) => item.id),
      })
      return next
    })

    toast.success('Ticket completed and moved to resolved list.')
  }

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      <main className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-12 pt-6 sm:px-6 lg:px-8">
        <Banner
          inProgressCount={inProgressTickets.length}
          resolvedCount={resolvedTickets.length}
        />

        <section id="tickets" className="mt-8 grid gap-6 lg:grid-cols-[2fr_1fr]">
          <div>
            <h2 className="text-2xl font-black text-slate-900">Customer Tickets</h2>
            <p className="mt-1 text-sm text-slate-500">
              Select a ticket to move it to task status.
            </p>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {availableTickets.length === 0 ? (
                <div className="col-span-full rounded-2xl border border-dashed border-slate-300 bg-white p-6 text-center text-slate-500">
                  No customer ticket left in queue.
                </div>
              ) : (
                availableTickets.map((ticket) => (
                  <TicketCard
                    key={ticket.id}
                    ticket={ticket}
                    isInProgress={inProgressTickets.some((item) => item.id === ticket.id)}
                    onAddToProgress={handleAddToProgress}
                  />
                ))
              )}
            </div>
          </div>

          <TaskStatus
            inProgressTickets={inProgressTickets}
            resolvedTickets={resolvedTickets}
            onCompleteTicket={handleCompleteTicket}
          />
        </section>
      </main>

      <Footer />
      <ToastContainer position="top-right" autoClose={2200} pauseOnHover theme="colored" />
    </div>
  )
}

export default App
