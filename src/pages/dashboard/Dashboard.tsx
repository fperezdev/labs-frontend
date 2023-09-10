import { Grid, Typography } from '@mui/material'
import { useFetch } from '../../lib/useFetch'
import Error from '../../components/error/Error'
import Campus from './Campus'
import { ICampus } from '../../lib/interfaces'

export default function Dashboard() {
  const { loading, status, data, error } = useFetch({ entity: 'campuses', method: 'GET' })

  return loading ? (
    <Typography>Loading</Typography>
  ) : error ? (
    <Error status={status} />
  ) : (
    <Grid>
      {data && (data as ICampus[]).map((campus) => <Campus key={campus.id} campus={campus} />)}
    </Grid>
  )
}
