"use client";
import endPoints from "@/services/api";
import axios from "axios";
import { useContext, createContext, ReactNode, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export type AuthContextType = {
  userinfo: UserType;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function AuthProvider({ children }: { children: ReactNode }) {
  const auth = useProviderAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};

const useProviderAuth = () => {
  const initialUser = {
    email: null,
    imageUrl: null,
    name: null,
    avatar: null,
  };
  const [userinfo, setUserInfo] = useState<UserType>(initialUser);
  const router = useRouter();

  const signIn = async (email: string, password: string) => {
    const options = {
      headers: {
        accept: "*/*",
        "Content-Type": "application/json",
      },
    };
    // setUser("Iniciaste");
    const { data: acces_token } = await axios.post(
      endPoints.auth.login,
      { email, password },
      options
    );

    if (acces_token) {
      const token = acces_token.access_token;
      Cookies.set("token", token, { expires: 5 });
      axios.defaults.headers.Authorization = `Bearer ${token}`;
      const { data: user } = await axios.get(endPoints.auth.profile);
      setUserInfo(user);
    }
  };
  const signOut = () => {
    Cookies.remove("token");
    setUserInfo(initialUser);
    delete axios.defaults.headers.Authorization;
    router.push("/log-in");
  };

  return { userinfo, signIn, signOut };
};
