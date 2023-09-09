import { createBrowserRouter } from 'react-router-dom'
import Dashboard from '../../pages/dashboard/Dashboard'
import Activity from '../../pages/activity/Activity'
import App from '../../App'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
      {
        path: '/activity',
        element: <Activity />,
      },
    ],
  },
])

export default router
