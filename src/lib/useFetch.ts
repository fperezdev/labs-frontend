import axios from 'axios'
import { useState, useEffect } from 'react'
import { VITE_API_BASE_URL } from './envs'

interface IRequest {
  entity: 'campuses' | 'rooms' | 'workstations'
  method: 'GET' | 'POST' | 'PUT' | 'DELETE'
  id?: number
  params?: object
  body?: object
}

interface IResponse {
  loading: boolean
  status: null | number
  data: null | object[]
  error: boolean
}

export function useFetch({ entity, method, id, params, body }: IRequest): IResponse {
  const [loading, setLoading] = useState(true)
  const [status, setStatus] = useState<number | null>(null)
  const [data, setData] = useState(null)
  const [error, setError] = useState(false)

  const url = `${entity}/${id ? id : ''}`

  useEffect(() => {
    setLoading(true)

    axios
      .request({
        baseURL: VITE_API_BASE_URL,
        url,
        method,
        params,
        data: body,
      })
      .then((res) => {
        setStatus(res.status)
        setData(res.data)
        setError(false)
      })
      .catch(() => {
        setStatus(500)
        setData(null)
        setError(true)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [url, method, params, body])

  return { loading, status, data, error }
}
