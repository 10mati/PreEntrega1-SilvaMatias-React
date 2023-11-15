import CartWidget from "../CartWidget/CartWidget";
import Logo from "../img/LogoCoffe.jpg";

const NavBar = () => {
    return (
        <div className="container">
        <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
        <a className="navbar-item" href="/">
        <img src={Logo} width="60" height="20" alt="Logo"></img>
        </a>

    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
      <a className="navbar-item" href="/">
       Inicio
      </a>

      <a className="navbar-item" href="/">
        Contacto
      </a>

      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link"href="/">
          Productos
        </a>

        <div className="navbar-dropdown">
          <a className="navbar-item" href="/">
            About
          </a>
          <a className="navbar-item" href="/">
            Jobs
          </a>
        </div>
      </div>
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <button className="button is-light">
          <CartWidget />
          </button>
        </div>
      </div>
    </div>
  </div>
</nav>
</div>
    )
}
export default NavBar;