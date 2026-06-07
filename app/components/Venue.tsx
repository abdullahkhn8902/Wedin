const MAPS_LINK = "https://share.google/jbwxlYDsCkXjT1mCN";
const MAPS_EMBED =
  "https://maps.google.com/maps?q=Sichuan+Chinese+Restaurant+Main+Canal+Road+Johar+Town+Lahore&z=16&output=embed";

export default function Venue() {
  return (
    <section id="venue">
      <div className="section-title">
        <h2>Come Celebrate the Happy Moment of</h2>
        <p className="venue-subtitle">
          Habib &amp; Shafqat&apos;s Family
        </p>
      </div>
      <div className="card">
        <div className="circle-icon">♡</div>
        <div className="venue-name">Sichuan Chinese Restaurant</div>
        <div className="venue-times">
          <span>Event Starting Time: 5:00 PM</span>
          <span>Dinner: 5:30 PM</span>
        </div>
        <div className="address">
          Main Canal Road, Block G4, Johar Town, Lahore, Punjab, Pakistan
        </div>
        <div className="venue-map">
          <iframe
            title="Map to Sichuan Chinese Restaurant"
            src={MAPS_EMBED}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
          <a
            className="venue-map-link"
            href={MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open in Maps
            <span aria-hidden="true">↗</span>
          </a>
        </div>
        <a
          className="btn btn-outline"
          href={MAPS_LINK}
          target="_blank"
          rel="noopener noreferrer"
        >
          ◎ Open in Maps
        </a>
      </div>
    </section>
  );
}
