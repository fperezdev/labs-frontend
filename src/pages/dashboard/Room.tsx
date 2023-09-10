import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material'
import PeopleIcon from '@mui/icons-material/People'
import BuildIcon from '@mui/icons-material/Build'
import ArticleIcon from '@mui/icons-material/Article'

export default function Room() {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h6">A1-COM101</Typography>
        <Grid container direction="column" mt={2} gap={1}>
          <Grid container gap={1}>
            <PeopleIcon />
            <Typography variant="body2" lineHeight={1.8}>
              Capacidad: 8
            </Typography>
          </Grid>
          <Grid container gap={1}>
            <BuildIcon />
            <Typography variant="body2" lineHeight={1.8}>
              Revisar: 8
            </Typography>
          </Grid>
          <Grid container gap={1}>
            <ArticleIcon />
            <Typography variant="body2" lineHeight={1.8}>
              Licencias: 8
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Button size="small" variant="outlined">
          Ver Laboratorio
        </Button>
        <Button size="small" variant="outlined">
          Agregar PCs
        </Button>
      </CardActions>
    </Card>
  )
}
