"use client";
import {createContext, useContext, useEffect, useState, ReactNode} from "react";
import {useRouter} from "next/navigation";
import {isTokenExpired, checkIsUserAdmin} from "@/utils/auth/auth";

type AuthContextType = {
    username?: string;
    token?: string;
    isAdmin: boolean;
    isLoggedIn: boolean;
    login: (username: string, token: string) => void;
    logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({children}: { children: ReactNode }) {
    const [username, setUsername] = useState<string>();
    const [token, setToken] = useState<string>();
    const [isAdmin, setIsAdmin] = useState<boolean>(false);
    const router = useRouter();
    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        const storedToken = localStorage.getItem("authToken");

        if (storedUser && storedToken && !isTokenExpired()) {
            setUsername(storedUser);
            setToken(storedToken);
            setIsAdmin(checkIsUserAdmin(token));
        }
    }, [token]);

    const login = (username: string, token: string) => {
        localStorage.setItem("user", username);
        localStorage.setItem("authToken", token);
        setUsername(username);
        setToken(token);
        setIsAdmin(checkIsUserAdmin(token));
    };

    const logout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("authToken");
        setUsername(undefined);
        setToken(undefined);
        setIsAdmin(false);
        router.replace("/login");
    };

    return (
        <AuthContext.Provider
            value={{
                username,
                token,
                isAdmin,
                isLoggedIn: !!token && !isTokenExpired(token),
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error("useAuth deve ser usado dentro de AuthProvider");
    return ctx;
}