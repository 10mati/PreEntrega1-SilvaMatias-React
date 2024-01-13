import CartWidget from "../CartWidget/CartWidget";
import Logo from "../img/LogoCoffe.jpg";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (

        <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
        <a className="navbar-item" href="/">
        <img src={Logo} width="60" height="20" alt="Logo"></img>
        </a>

    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" href="/">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
      <Link className="navbar-item" to="/">
       Inicio
      </Link>

      <Link to="/" className="navbar-item">
          Contacto
        </Link>

      <div className="navbar-item has-dropdown is-hoverable">
        <Link to="/" className="navbar-link">
          Productos
        </Link>

        <div className="navbar-dropdown">
          <Link to="/category/cafes"  className="navbar-item">
            Cafes
          </Link>

          < Link to="/category/cafeteras" className="navbar-item">
            Cafeteras
          </Link>
          
          </div>
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
</nav>
 );
}

export default NavBar;