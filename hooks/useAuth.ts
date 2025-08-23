"use client"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { isTokenExpired } from "@/utils/auth/auth";

export function useRedirectIfTokenIsValid(): void
{
    const router = useRouter();
    useEffect(() => {
        if (!isTokenExpired()) router.replace('./');
    }, [router]);
}

export function useUsername(): string | undefined
{
    const [username, setUsername] = useState<string>();

    useEffect(() => {
        const usernameInStorage = localStorage.getItem('user');
        if (usernameInStorage) setUsername(usernameInStorage);
    }, []);
    return username;
}

export function useIsTokenExpired(): boolean
{
    const [expired, setExpired] = useState<boolean>();
    useEffect(() => {
        setExpired(isTokenExpired());
    }, [])
    return <boolean>expired;
}

export function useLogout(): () => void
{
    const router = useRouter();
    return () => {
        localStorage.removeItem('user');
        localStorage.removeItem('authToken');
        router.replace('/login');
    };
}