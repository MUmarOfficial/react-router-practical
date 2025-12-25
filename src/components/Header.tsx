import { NavLink } from "react-router";

const Header = () => {
  return (
    <nav className="w-full p-2 min-h-16 relative bg-base-100">
      <div className="flex justify-between items-center">
        <NavLink to={"/"} className="btn btn-ghost text-xl">
          React Router App
        </NavLink>
        <span className="flex"></span>
        <ul className="flex gap-4 items-center">
          <li>
            <NavLink className={({isActive}) => {
              return isActive ? "btn btn-outline btn-sm hover:text-primary/80 text-primary" : "btn btn-ghost btn-sm hover:text-primary/80"
              }} to='/contacts'>Contacts</NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => {
              return isActive ? "btn btn-outline btn-sm hover:text-primary/80 text-primary" : "btn btn-ghost btn-sm hover:text-primary/80"
            }} to='/about'>About</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
