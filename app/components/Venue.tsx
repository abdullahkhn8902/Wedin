import { VENUE_GROUPS } from "../wedding";

export default function Venue() {
  return (
    <section id="venue">
      <div className="section-title">
        <h2>Where to Join Us</h2>
        <p>Three celebrations across two venues</p>
      </div>
      {VENUE_GROUPS.map(({ venue, events }) => (
        <div className="card venue-card" id={`venue-${venue.id}`} key={venue.id}>
          <div className="circle-icon">♡</div>
          <div className="venue-name">{venue.name}</div>
          <div className="venue-times">
            {events.map((event) => (
              <span key={event.id}>
                <strong>{event.name}</strong> · {event.shortDate}, {event.time}
              </span>
            ))}
          </div>
          <div className="address">{venue.address}</div>
          <div className="venue-map">
            <iframe
              title={`Map to ${venue.name}`}
              src={venue.mapsEmbed}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a
              className="venue-map-link"
              href={venue.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open in Maps
              <span aria-hidden="true">↗</span>
            </a>
          </div>
          <a
            className="btn btn-outline"
            href={venue.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            ◎ Open in Maps
          </a>
        </div>
      ))}
    </section>
  );
}
