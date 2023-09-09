import { Outlet } from 'react-router-dom'
import { Grid } from '@mui/material'
import Sidenav from './components/Sidenav/Sidenav'

export default function App() {
  return (
    <Grid container>
      <Sidenav />
      <Grid item sx={{ marginLeft: 10 }}>
        <Outlet />
      </Grid>
    </Grid>
  )
}
