import { NavLink } from "react-router";

const Header = () => {
  return (
    <nav className="navbar bg-base-200 shadow-lg px-4 sm:px-8">
      <div className="flex-1">
        <NavLink to={"/"} className="btn btn-ghost text-xl font-bold text-primary tracking-tight">
          Contacts App
        </NavLink>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 gap-2">
          <li>
            <NavLink
              className={({ isActive }) => isActive ? "active font-medium" : "font-medium"}
              to='/contacts'
            >
              Contacts
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => isActive ? "active font-medium" : "font-medium"}
              to='/about'
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
