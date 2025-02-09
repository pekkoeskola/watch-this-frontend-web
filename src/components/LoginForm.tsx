import { useState } from "react";
import loginService from "../services/login";
import { useNavigate } from "@tanstack/react-router";

import { Route as indexRoute } from "../routes/index";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate({ from: "/login" });

  const onLogin = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    try {
      const data = await loginService.login(username, password);
      console.log(data)
      navigate({ to: indexRoute.to });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <form onSubmit={onLogin} className={"border p-4"}>
      <label className={"padding m-1 block"}>
        Username
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          className={"border"}
        />
      </label>
      <label className={"m-1 block"}>
        Password
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="text"
          className={"border"}
        />
      </label>
      <button className={"rounded-lg border p-2"} type="submit">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
