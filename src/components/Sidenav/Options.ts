import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard'
import BarChartIcon from '@mui/icons-material/BarChart'
import FavoriteIcon from '@mui/icons-material/Favorite'
import WatchLaterIcon from '@mui/icons-material/WatchLater'
import ArchiveIcon from '@mui/icons-material/Archive'
import AutoFixNormalIcon from '@mui/icons-material/AutoFixNormal'

const options = [
  {
    title: null,
    path: '/',
    items: [
      {
        key: 'dashboard',
        name: 'Dashboard',
        path: '',
        icon: SpaceDashboardIcon,
      },
    ],
  },
  {
    title: 'Actividad',
    path: '/activity',
    items: [
      {
        key: 'activity',
        name: 'Actividad',
        path: '',
        icon: BarChartIcon,
      },
      {
        key: 'state',
        name: 'Estado',
        path: '/state',
        icon: FavoriteIcon,
      },
    ],
  },
  {
    title: 'Calendario',
    path: '/calendar',
    items: [
      {
        key: 'schedule',
        name: 'Horarios',
        path: '/schedule',
        icon: WatchLaterIcon,
      },
      {
        key: 'request',
        name: 'Solicitudes',
        path: '/request',
        icon: ArchiveIcon,
      },
      {
        key: 'administrate',
        name: 'Administrar',
        path: '/administrate',
        icon: AutoFixNormalIcon,
      },
    ],
  },
]

export default options
