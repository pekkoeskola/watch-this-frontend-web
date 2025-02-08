const LoginForm = () => {
  return(
    <form className={"border p-4"}>
      <label className={"m-1 padding block"}>
        Username
        <input type="text" className={"border"}/>
      </label>
      <label className={"m-1 block"}>
        Password
        <input type="text" className={"border"}/>
      </label>
      <button className={"border p-2 rounded-lg"} type="submit">Login</button>
    </form> 
  )
}


export default LoginForm