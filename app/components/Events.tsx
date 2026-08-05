import { EVENTS } from "../wedding";

/**
 * The functions, side by side on desktop and stacked on a phone.
 *
 * Each card names its own venue and opens Google Maps directly, so a guest
 * can act on a single function without scrolling anywhere. The embedded maps
 * are left to the venue section below, which groups by venue and so never
 * renders the same map twice.
 */
export default function Events() {
  return (
    <section id="events">
      <div className="section-title">
        <h2>Our Celebrations</h2>
        <p>Two evenings — we would love to have you at both</p>
      </div>
      <div className="events-grid">
        {EVENTS.map((event) => (
          <article className="event-card" key={event.id}>
            <span className="ev-badge">{event.ordinal}</span>
            <div className="circle-icon ev-icon" aria-hidden="true">
              {event.glyph}
            </div>
            <h3 className="ev-name">{event.name}</h3>
            {event.alt && <p className="ev-alt">{event.alt}</p>}
            <span className="ev-rule" aria-hidden="true" />
            <p className="ev-date">
              {event.weekday} · {event.dateLabel}
            </p>
            <p className="ev-time">{event.time}</p>
            <p className="ev-venue">{event.venue.name}</p>
            <p className="ev-area">{event.venue.area}</p>
            <a
              className="btn btn-outline ev-btn"
              href={event.venue.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              ◎ Open in Maps
              <span className="sr-only"> for the {event.name}</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
