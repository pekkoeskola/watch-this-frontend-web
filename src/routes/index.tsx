import { createFileRoute, Link } from '@tanstack/react-router'
import { useAppSelector } from '../hooks'
import GroupsList from '../components/GroupsList'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})


function RouteComponent() {
  const userDetails = useAppSelector(state => state.auth)

  if(userDetails.id !== null){
    return(
      <>    
        <div>{`Hello ${userDetails.username}`}</div>
        <GroupsList userID={userDetails.id}/>
      </>
    )
  }

  return (
    <div>
      {<Link to='/login' className="border-2 p-2 m-2 inline-block">Login</Link>}
    </div>
  )
}
