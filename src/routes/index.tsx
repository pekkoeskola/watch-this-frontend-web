import { createFileRoute, Link } from '@tanstack/react-router'
import { useAppSelector } from '../hooks'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})


function RouteComponent() {
  const username = useAppSelector(state => state.auth.username)
  return (
    <div>
      <div>{`Hello ${username}`}</div>
      <Link to='/login' className="border-2 p-2 m-2 inline-block">Login</Link>
    </div>
  )
}
