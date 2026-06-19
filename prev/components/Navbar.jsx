export default function Navbar() {
  return (
    <nav className="nav" aria-label="Main navigation">
      <span className="nav__logo">const m4n0j</span>
      <ul className="nav__links">
        <li><a href="#work"       className="nav__link">Work</a></li>
        <li><a href="#experience" className="nav__link">Experience</a></li>
        <li><a href="#contact"    className="nav__link">Contact</a></li>
      </ul>
    </nav>
  );
}
