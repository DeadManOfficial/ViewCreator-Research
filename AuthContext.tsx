import React, { createContext, useContext, useState, useCallback, useEffect } from "react";

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  plan: "free" | "starter" | "pro" | "ultra" | "business";
  credits: number;
  createdAt: string;
}

export interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string) => Promise<void>;
  logout: () => Promise<void>;
  updateUser: (user: Partial<User>) => void;
  updateCredits: (amount: number) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Initialize from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("viewcreator_user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Failed to parse stored user:", error);
        localStorage.removeItem("viewcreator_user");
      }
    }
    setIsLoading(false);
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // Simulate API call
      const mockUser: User = {
        id: "user_" + Math.random().toString(36).substr(2, 9),
        email,
        name: email.split("@")[0],
        plan: "starter",
        credits: 25,
        createdAt: new Date().toISOString(),
      };

      setUser(mockUser);
      localStorage.setItem("viewcreator_user", JSON.stringify(mockUser));
    } finally {
      setIsLoading(false);
    }
  }, []);

  const signup = useCallback(async (email: string, password: string, name: string) => {
    setIsLoading(true);
    try {
      // Simulate API call
      const mockUser: User = {
        id: "user_" + Math.random().toString(36).substr(2, 9),
        email,
        name,
        plan: "free",
        credits: 0,
        createdAt: new Date().toISOString(),
      };

      setUser(mockUser);
      localStorage.setItem("viewcreator_user", JSON.stringify(mockUser));
    } finally {
      setIsLoading(false);
    }
  }, []);

  const logout = useCallback(async () => {
    setUser(null);
    localStorage.removeItem("viewcreator_user");
  }, []);

  const updateUser = useCallback((updates: Partial<User>) => {
    setUser((prev) => {
      if (!prev) return null;
      const updated = { ...prev, ...updates };
      localStorage.setItem("viewcreator_user", JSON.stringify(updated));
      return updated;
    });
  }, []);

  const updateCredits = useCallback((amount: number) => {
    setUser((prev) => {
      if (!prev) return null;
      const updated = { ...prev, credits: Math.max(0, prev.credits + amount) };
      localStorage.setItem("viewcreator_user", JSON.stringify(updated));
      return updated;
    });
  }, []);

  const value: AuthContextType = {
    user,
    isLoading,
    isAuthenticated: !!user,
    login,
    signup,
    logout,
    updateUser,
    updateCredits,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
