import { Outlet } from "react-router"
import Header from "../components/Header"
import Breadcrumbs from "../components/Breadcrumbs"

const RootLayout = () => {
  return (
    <div className="min-h-screen bg-base-100 text-base-content font-sans">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs />
        <main className="mt-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default RootLayout