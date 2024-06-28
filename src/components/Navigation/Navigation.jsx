import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav className={css.container}>
      <NavLink to="/" className={({ isActive }) => (isActive ? `${css.navLink} ${css.navLinkActive}` : css.navLink)}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={({ isActive }) => (isActive ? `${css.navLink} ${css.navLinkActive}` : css.navLink)}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
}