import { NavLink, Outlet } from "react-router"

const About = () => {
  return (
    <main className="flex flex-col md:flex-row gap-6 max-w-5xl mx-auto">
      <aside className="w-full md:w-64 flex-shrink-0">
        <div className="card bg-base-200 shadow-lg">
          <div className="card-body p-4">
            <h3 className="card-title text-lg px-2 mb-2 text-primary">Menu</h3>
            <ul className="menu bg-base-200 w-full rounded-box gap-2 p-0">
              <li>
                <NavLink to={"/about/info"} className={({ isActive }) =>
                  isActive ? "active font-medium bg-primary text-white" : "font-medium hover:bg-base-300"
                }>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 16v-4" />
                    <path d="M12 8h.01" />
                  </svg>
                  App Info
                </NavLink>
              </li>
              <li>
                <NavLink to={"/about/settings"} className={({ isActive }) =>
                  isActive ? "active font-medium bg-primary text-white" : "font-medium hover:bg-base-300"
                }>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                  Settings
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </aside>

      <section className="flex-1">
        <div className="card bg-base-200 shadow-xl min-h-[400px]">
          <div className="card-body">
            <Outlet />
          </div>
        </div>
      </section>
    </main>
  )
}

export default About