import { useState } from "react";
import { useAuth, useRestrictAuthAccess } from "../providers/AuthProvider";

export default function Login() {
  useRestrictAuthAccess({ inverse: true });
  const [name, setName] = useState("");

  const { login } = useAuth();

  const handleLogin = () => {
    login(name);
    alert("Welcome!");
  };

  return (
    <>
      <h1>Login</h1>
      Name: <input onChange={(e) => setName(e.target.value)} value={name} />
      <button onClick={handleLogin}>Login</button>
    </>
  );
}
