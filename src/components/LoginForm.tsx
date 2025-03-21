import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";

import { Route as indexRoute } from "../routes/index";
import { useLoginMutation } from "../features/apiSlice";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [login, { error }] = useLoginMutation();
  const navigate = useNavigate({ from: "/login" });

  const onLogin = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    login({ username, password })
      .unwrap()
      .then(() => navigate({ to: indexRoute.to }));
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
          type="password"
          className={"border"}
        />
      </label>
      <button className={"rounded-lg border p-2"} type="submit">
        Login
      </button>
      {error !== undefined && <div>couldn't login</div>}
    </form>
  );
};

export default LoginForm;
