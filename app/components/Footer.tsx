import { COUPLE, DATE_LONG } from "../wedding";

export default function Footer() {
  return (
    <footer>
      <div className="heart">♡</div>
      <div className="fnames">{COUPLE}</div>
      <div className="fdate">{DATE_LONG}</div>
      <div className="credit">Made with love</div>
    </footer>
  );
}
