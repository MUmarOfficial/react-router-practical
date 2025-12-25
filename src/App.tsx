import { RouterProvider } from 'react-router'
import './App.css'
import appRouter from './routes'

function App() {

  return (
    <RouterProvider router={appRouter} />
  )
};

export default App;
