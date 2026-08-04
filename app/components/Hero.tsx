import { BRIDE, GROOM, DATE_LINE } from "../wedding";

export default function Hero() {
  return (
    <header className="hero">
      <div className="ayah">
        <p className="ayah-ar" lang="ar" dir="rtl">
          وَخَلَقْنَاكُمْ أَزْوَاجًا
        </p>
        <p className="ayah-tr">&ldquo;And We created you in pairs&rdquo;</p>
        <p className="ayah-ref">Qur&apos;an 78:8</p>
      </div>
      <div className="label">We&apos;re Getting Married</div>
      <div className="names">{BRIDE}</div>
      <div className="amp">&amp;</div>
      <div className="names">{GROOM}</div>
      <div className="star">✦</div>
      <div className="date">{DATE_LINE}</div>
      <a href="#events" className="btn">
        View Events
      </a>
    </header>
  );
}
