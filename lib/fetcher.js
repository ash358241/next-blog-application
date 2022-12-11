const response = (...args) => fetch(...args).then(res => res.json())
import { useQuery } from '@tanstack/react-query'
import useSWR from 'swr'

// const baseUrl = process.env.baseUrl
const baseUrl = 'http://localhost:3000/'

export default function Fetcher(endpoint) {
    const { data, error, isLoading } = useSWR(`${baseUrl}${endpoint}`, response)

    return {
        data,
        isLoading : !error && !data,
        isError: error
      }
}

export function TryOut(endpoint){
  const { isLoading, error, data } = useQuery({
    queryKey: ['postData'],
    queryFn: () =>
      fetch(`${baseUrl}${endpoint}`).then(res =>
        res.json()
      )
  })

  return {
    data, 
    isLoading,
    isError: error
  }
}


