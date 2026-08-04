import { EVENTS } from "../wedding";

/**
 * The three functions, side by side on desktop and stacked on a phone.
 * Each card links down to its venue block, so the map for a function is
 * always one tap away without repeating the same map three times.
 */
export default function Events() {
  return (
    <section id="events">
      <div className="section-title">
        <h2>Our Celebrations</h2>
        <p>Three evenings — we would love to have you at every one</p>
      </div>
      <div className="events-grid">
        {EVENTS.map((event) => (
          <article className="event-card" key={event.id}>
            <span className="ev-badge">{event.ordinal}</span>
            <div className="circle-icon ev-icon" aria-hidden="true">
              {event.glyph}
            </div>
            <h3 className="ev-name">{event.name}</h3>
            <p className="ev-alt">{event.alt}</p>
            <span className="ev-rule" aria-hidden="true" />
            <p className="ev-date">
              {event.weekday} · {event.dateLabel}
            </p>
            <p className="ev-time">{event.time}</p>
            <p className="ev-venue">{event.venue.name}</p>
            <a className="ev-link" href={`#venue-${event.venue.id}`}>
              Directions
              <span aria-hidden="true">↓</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
