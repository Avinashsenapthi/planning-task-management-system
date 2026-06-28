function Navbar({ title }) {
  return (
    <div className="navbar">
      <h2>{title}</h2>
      <div className="navbar-right">
        <div className="nav-avatar">JD</div>
      </div>
    </div>
  );
}

export default Navbar;