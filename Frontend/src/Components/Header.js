import { FaSignInAlt, FaUser, FaBlog } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      {/* App logo */}
      <div className="logo">
        <Link to="/">
          <FaBlog />
          Blogs
        </Link>
      </div>
      {/* End of App logo */}
      <ul>
        <li>
          <Link to="/login">
            <FaSignInAlt /> Login
          </Link>
        </li>
        <li>
          <Link to="/register">
            <FaUser /> Register
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
