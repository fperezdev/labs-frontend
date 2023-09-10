import { Grid, Typography } from '@mui/material'
import { ICampus } from '../../lib/interfaces'

interface ICampusProps {
  campus: ICampus
}

export default function Campus({ campus }: ICampusProps) {
  console.log(campus.id)
  return (
    <Grid container direction="column" gap={2} sx={{ backgroundColor: 'green' }}>
      <Typography variant="h6">{campus.name}</Typography>
      <Typography variant="body2" lineHeight={1.8}>
        {campus.active ? 'Activo' : 'Inactivo'}
      </Typography>
    </Grid>
  )
}
