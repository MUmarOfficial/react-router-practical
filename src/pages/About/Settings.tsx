const Settings = () => {
  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-3xl font-bold text-primary mb-6 text-center">App Settings</h2>

      <div className="space-y-6">
        <div className="form-control">
          <label className="label cursor-pointer p-0">
            <div className="flex flex-col">
              <span className="label-text text-lg font-medium">Dark Mode</span>
              <span className="label-text-alt opacity-60">Enable dark theme across the application</span>
            </div>
            <input type="checkbox" className="toggle toggle-primary" defaultChecked disabled />
          </label>
        </div>

        <div className="divider"></div>

        <div className="form-control">
          <label className="label cursor-pointer p-0">
            <div className="flex flex-col">
              <span className="label-text text-lg font-medium">Notifications</span>
              <span className="label-text-alt opacity-60">Receive alerts for new messages</span>
            </div>
            <input type="checkbox" className="toggle toggle-success" defaultChecked />
          </label>
        </div>

        <div className="form-control">
          <label className="label cursor-pointer p-0">
            <div className="flex flex-col">
              <span className="label-text text-lg font-medium">Sound Effects</span>
              <span className="label-text-alt opacity-60">Play sounds on interactions</span>
            </div>
            <input type="checkbox" className="toggle toggle-success" />
          </label>
        </div>

        <div className="divider"></div>

        <div className="form-control">
          <label className="label cursor-pointer p-0">
            <div className="flex flex-col">
              <span className="label-text text-lg font-medium">Data Saver</span>
              <span className="label-text-alt opacity-60">Reduce data usage on mobile networks</span>
            </div>
            <input type="checkbox" className="toggle toggle-warning" />
          </label>
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <button className="btn btn-neutral btn-wide">Save Preferences</button>
      </div>
    </div>
  )
}

export default Settings