import { useRouter } from "next/router";
import { createContext, useContext, useEffect, useState } from "react";

export type IAuthProviderProps = {
  children: React.ReactNode;
};

export type IAuthProviderContext = {
  loggedUser: string;
  isLogged: boolean;
  isLoaded: boolean;
  login: (name: string) => void;
  logout: () => void;
};

const AuthContext = createContext({} as IAuthProviderContext);

export function AuthProvider({ children }: IAuthProviderProps) {
  const [loggedUser, setLoggedUser] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loggedUser = localStorage.getItem("loggedUser");

    if (loggedUser) {
      login(loggedUser);
    }

    setIsLoaded(true);
  }, []);

  const login = (name: string) => {
    localStorage.setItem("loggedUser", name);
    setLoggedUser(name);
  };

  const logout = () => {
    localStorage.removeItem("loggedUser");
    setLoggedUser("");
  };

  return (
    <AuthContext.Provider
      value={{
        loggedUser,
        isLogged: !!loggedUser,
        isLoaded,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const authContext = useContext(AuthContext);

  return authContext;
}

export function useRestrictAuthAccess({
  inverse = false,
}: {
  inverse?: boolean;
} = {}) {
  const { isLogged, isLoaded } = useAuth();
  const router = useRouter();

  useEffect(() => {
    console.log(isLoaded, isLogged);
    if (!isLoaded) return;

    if (!inverse && !isLogged) {
      router.push("/login");
    }

    if (inverse && isLogged) {
      router.push("/profile");
    }
  }, [isLogged, isLoaded]);
}
