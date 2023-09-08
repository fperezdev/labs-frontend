import { useState } from 'react'
import { Link } from 'react-router-dom'
import { styled, Theme, CSSObject } from '@mui/material/styles'
import MuiDrawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import IconButton from '@mui/material/IconButton'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { Grid, Typography } from '@mui/material'
import CommitIcon from '@mui/icons-material/Commit'
import options from './Options'

const drawerWidth = 240

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
})

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
})

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}))

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    position: 'absolute',
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  })
)

export default function Sidenav() {
  const [open, setOpen] = useState(false)

  const handleDrawerToggle = () => {
    setOpen(!open)
  }

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <Typography fontWeight={600} sx={{ marginLeft: 2, display: open ? 'block' : 'none' }}>
          LABSADMIN
        </Typography>
        <IconButton onClick={handleDrawerToggle} sx={{ marginLeft: 'auto' }}>
          {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </DrawerHeader>
      <List>
        {options.map((option) => (
          <>
            {option.title && (
              <Grid item sx={{ height: 15, mt: 3, mb: 1, mx: 2.5 }}>
                {open ? (
                  <Typography textTransform="uppercase">{option.title}</Typography>
                ) : (
                  <CommitIcon />
                )}
              </Grid>
            )}
            {option.items.map((item) => (
              <ListItem key={item.key} disablePadding sx={{ display: 'block' }}>
                <Link to={`${option.path}${item.path}`} style={{ textDecoration: 'none' }}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                      }}
                    >
                      <item.icon />
                    </ListItemIcon>
                    <ListItemText primary={item.name} sx={{ opacity: open ? 1 : 0 }} />
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}
          </>
        ))}
      </List>
    </Drawer>
  )
}
