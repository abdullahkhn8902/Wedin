const MAPS_LINK = "https://share.google/U9hlRm5hkaTkixH5g";
const MAPS_EMBED =
  "https://maps.google.com/maps?q=Gulzar%27s+Event+Complex+By+SICHUAN+Johar+Town+Lahore&z=16&output=embed";

export default function Venue() {
  return (
    <section id="venue">
      <div className="section-title">
        <h2>Come Celebrate the Happy Moment of</h2>
        <p className="venue-subtitle">
          Habib Ahmad and Shafqat Iqbal
        </p>
      </div>
      <div className="card">
        <div className="circle-icon">♡</div>
        <div className="venue-name">Gulzar&apos;s Event Complex By SICHUAN</div>
        <div className="venue-times">
          <span>Event Starting Time: 5:00 PM</span>
          <span>Dinner: 5:30 PM</span>
        </div>
        <div className="address">
          Main Canal Road, Block G4, Johar Town, Lahore, Punjab, Pakistan
        </div>
        <div className="venue-map">
          <iframe
            title="Map to Gulzar's Event Complex By SICHUAN"
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
