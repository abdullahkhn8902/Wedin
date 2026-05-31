const MAPS_LINK = "https://maps.app.goo.gl/pzZ5qJFSe3UPPETG8";
const MAPS_EMBED =
  "https://maps.google.com/maps?q=31.4515104,74.2719029&z=16&output=embed";

export default function Venue() {
  return (
    <section id="venue">
      <div className="section-title">
        <h2>Where We Celebrate</h2>
        <p className="venue-subtitle">
          The place where we&apos;ll say{" "}
          &ldquo;<span className="qabool">Qabool Hai</span>&rdquo;
        </p>
      </div>
      <div className="card">
        <div className="circle-icon">♡</div>
        <div className="venue-name">Topaz Event Complex</div>
        <div className="venue-times">
          <span>Nikah: 7:00 PM</span>
          <span>Dinner: 8:00 PM</span>
        </div>
        <div className="address">
          Shaukat Khanum Road, Johar Town, Lahore, Punjab, Pakistan
        </div>
        <div className="venue-map">
          <iframe
            title="Map to Topaz Event Complex"
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
