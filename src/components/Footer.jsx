export default function Footer() {
  return (
    <footer
      className="p-4 text-center"
      style={{ color: "var(--main-font-color", background: "var(--black)" }}
    >
      <span>{new Date().getFullYear()} </span>
      &copy;
      <a style={{ color: "var(--main-color)" }} href="https://mohamed-fandees.firebaseapp.com">
        {" "}
        Mohammed Fandees
      </a>
    </footer>
  );
}
