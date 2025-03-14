import { createFileRoute } from '@tanstack/react-router'
import LoginForm from '../../components/LoginForm'

export const Route = createFileRoute('/(auth)/login')({
  component: RouteComponent,
})

function RouteComponent() {
  return(
    <div className={"h-screen flex border justify-center items-center"}>
      <LoginForm />
    </div>
  )
}
