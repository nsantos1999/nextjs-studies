import { ProfileComponent } from "../components/Profile";
import { useRestrictAuthAccess } from "../providers/AuthProvider";

export default function Profile() {
  useRestrictAuthAccess();

  return <ProfileComponent />;
}
