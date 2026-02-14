const Info = () => {
  return (
    <div className="prose prose-invert max-w-none">
      <h2 className="text-3xl font-bold text-primary mb-4">About Contacts App</h2>
      <p className="text-lg opacity-80">
        Contacts App is a powerful and intuitive contact management solution designed to help you stay organized.
        Built with the latest web technologies, it offers a seamless experience for managing your personal and professional connections.
      </p>

      <div className="divider"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div>
          <h3 className="text-xl font-semibold mb-3">App Details</h3>
          <ul className="list-none p-0 space-y-2">
            <li className="flex justify-between border-b border-base-300 pb-2">
              <span className="opacity-70">Version</span>
              <span className="font-mono">1.0.0</span>
            </li>
            <li className="flex justify-between border-b border-base-300 pb-2">
              <span className="opacity-70">License</span>
              <span>MIT</span>
            </li>
            <li className="flex justify-between border-b border-base-300 pb-2">
              <span className="opacity-70">Developer</span>
              <span>Muhammad Umar</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            <span className="badge badge-primary">React 19</span>
            <span className="badge badge-secondary">React Router 7</span>
            <span className="badge badge-accent">Vite</span>
            <span className="badge badge-neutral">Tailwind CSS 4</span>
            <span className="badge badge-info">DaisyUI 5</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info