import axios from "axios";
import React, { useState, useEffect, createContext } from "react";

import { api } from "../api";

interface User {
  id: string;
  avatar: string;
  username: string;
  discriminator: string;
}

interface AuthContext {
  isAuthenticated: boolean;
  user: User | null;
  signIn: () => void;
  signOut: () => void;
}

interface AuthProvider {
  children?: React.ReactNode
}

export const AuthContext = createContext({} as AuthContext);

export function AuthProvider({ children }: AuthProvider) {
  const [user, setUser] = useState<User | null>(null);

  const isAuthenticated = !!user;

  useEffect(() => {
    (async () => {
      await api.get<User>("/user/profile", {
        withCredentials: true
      })
      .then(res => setUser(res.data))
      .catch(error => console.log("No user logged in."));
    })();
  }, []);

  function signIn() {
    window.location.href = `${import.meta.env.VITE_API_URL}/auth/discord`;
  }

  async function signOut() {
    try {
      await api.delete("/auth/logout", {
        withCredentials: true
      });
      window.location.href = import.meta.env.BASE_URL;
    }
    catch (error) {
      console.log(error);
    }
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, signIn, signOut }}>
      { children }
    </AuthContext.Provider>
  );
}
