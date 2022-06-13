// import { useEffect } from "react";
import { FaSignInAlt, FaUser, FaBlog, FaSignOutAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { reset, logout} from '../features/Auth/AuthSlice'

function Header() {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const { user } = useSelector((state) => {
    return state.auth
  })

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  }

  return (
    <header className="header">
      <div className="logo">
        <>
          {user ? "" : <p className="author">Bubacarr</p>}
          <Link to="/">
            <FaBlog />
            Blogs
          </Link>
        </>
      </div>
      <ul>
        {user ? (
          <>
            <p className="user">{user.firstName +' '+ user.lastName}</p>
            <li>
              <button className="btn" onClick={onLogout}>
                <FaSignOutAlt /> LogOut
              </button>
            </li>
          </>
        ) : (
          <>
            <header></header>
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
          </>
        )}
      </ul>
    </header>
  );
}

export default Header;
