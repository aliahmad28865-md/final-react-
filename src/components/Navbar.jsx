function Navbar() {
  return (
    <nav className="navbar">
      <h2>NovaTech</h2>

      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <button>Get Started</button>
    </nav>
  );
}

export default Navbar;