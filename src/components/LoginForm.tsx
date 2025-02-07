const LoginForm = () => {
  return(
    <div className={"flex justify-center align-baseline border"}>
      <form className={"flex-row justify-center align-baseline"}>
        <label className={"block m-1 padding"}>
          Username
          <input type="text" className={"border m-2"}/>
        </label>
        <label className={"block m-1"}>
          Password
          <input type="text" className={"border m-2"}/>
        </label>
        <button className={"border p-2 rounded-lg"} type="submit">Login</button>
      </form>
    </div>
  )
}

export default LoginForm