// ** React Imports
import { useEffect } from 'react'

// ** Next Imports
import { useRouter } from 'next/router'

// ** Spinner Import
import Spinner from 'src/@core/components/spinner'

// ** Hook Imports
import { useAuth } from 'src/hooks/useAuth'

/**
 *  Set Home URL based on User Roles
 */
export const getHomeRoute = (role: string) => {
  if (role === 'client') return '/acl'
  else return '/demo'
}

const Home = () => {
  // ** Hooks
  // const auth = useAuth()
  const router = useRouter()

  useEffect(() => {
    router.replace("/demo")
  }, [])

  return <Spinner />
}

export default Home
