import { Grid, Typography } from '@mui/material'

export default function Error({ status }: { status: null | number }) {
  return (
    <Grid container direction="column" gap={2}>
      <Typography variant="h2">{`Error ${status}`}</Typography>
      <Typography>{getErrorMessage(status)}</Typography>
    </Grid>
  )
}

function getErrorMessage(status: null | number) {
  switch (status) {
    case 400:
      return 'Petición mala'
    case 401:
      return 'No autorizado'
    case 403:
      return 'Prohibido'
    case 404:
      return 'No encontrado'
    default:
      return 'Error, inténtalo de nuevo.'
  }
}
