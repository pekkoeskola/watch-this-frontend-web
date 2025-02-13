import { createFileRoute } from '@tanstack/react-router'
import { useAppSelector } from '../hooks'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})


function RouteComponent() {
  const username = useAppSelector(state => state.auth.username)
  return <div>{`Hello ${username}`}</div>
}
