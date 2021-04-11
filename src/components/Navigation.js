function Navigation() {
  return (
    <nav className="header-nav">
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink to="/characters">Characters</NavLink>
    </nav>
  );
}
