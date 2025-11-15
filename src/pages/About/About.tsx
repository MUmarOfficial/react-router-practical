import { NavLink, Outlet } from "react-router"

const About = () => {
  return (
    <main>
      <div className="flex flex-col md:flex-row gap-5">
        <ul className="menu bg-base-200 rounded-box w-full md:w-56 pb-10 gap-2.5">
          <li>
            <NavLink to={"/about/info"} className={({isActive}) => {
              return isActive ? "bg-primary focus:bg-primary active:bg-primary" : ""
              }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-info-icon lucide-info">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
              </svg>
              Info
            </NavLink>
          </li>
          <li>
            <NavLink to={"/about/settings"} className={({ isActive }) => {
              return isActive ? "bg-primary focus:bg-primary active:bg-primary" : ""
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-settings-icon lucide-settings">
                <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              Settings
            </NavLink>
          </li>
        </ul>
      </div>
      <section>
        <Outlet />
      </section>
    </main>
  )
}

export default About