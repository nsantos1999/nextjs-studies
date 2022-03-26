import { useAuth } from "../../providers/AuthProvider";

export function ProfileComponent() {
  const { loggedUser } = useAuth();
  return (
    <>
      <h1>Hello {loggedUser}</h1>
    </>
  );
}
