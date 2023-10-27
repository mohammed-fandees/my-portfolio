export default function Footer() {
  return (
    <footer className="p-4 text-center" style={{ background: "var(--black)" }}>
      <span style={{ color: "var(--main-font-color" }}>{new Date().getFullYear()} &copy; </span>
      <a className="m-transition" style={{ color: "var(--main-color)" }} href="https://mohammed-fandeess.firebaseapp.com">Mohammed Fandees</a>
    </footer>
  );
}
