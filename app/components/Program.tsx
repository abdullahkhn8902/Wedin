const PROGRAM = [
  { time: "6:00 PM", title: "Welcome", desc: "Reception and arrival of guests" },
  { time: "7:00 PM", title: "Nikah", desc: "The wedding ceremony" },
  { time: "8:00 PM", title: "Dinner", desc: "Dinner is served" },
  { time: "10:00 PM", title: "Conclusion", desc: "The celebration comes to a close" },
];

export default function Program() {
  return (
    <section id="program">
      <div className="section-title">
        <h2>Evening Program</h2>
        <p>What we have planned for you</p>
      </div>
      <div className="timeline">
        {PROGRAM.map((item) => (
          <div className="tl-item" key={`${item.time}-${item.title}`}>
            <div className="tl-time">{item.time}</div>
            <div className="tl-body">
              <div className="t">{item.title}</div>
              <div className="d">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
