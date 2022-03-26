import { useAuth, useRestrictAuthAccess } from "../providers/AuthProvider";

export default function Logout() {
  useRestrictAuthAccess();
  const { logout, loggedUser } = useAuth();

  const handleLogout = () => {
    logout();
    alert("Goodbye!");
  };

  return (
    <>
      <h1>{loggedUser}</h1>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}
