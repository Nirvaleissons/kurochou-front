"use client"
import { useRouter } from "next/navigation";
import {useEffect, useState} from "react";

export function useRedirectIfTokenIsValid(): void
{
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (token && !isTokenExpired(token)) router.replace('./');
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

function isTokenExpired(token: string): boolean
{
    if (!token) return true;

    try
    {
        const payload = token.split('.')[1];
        const decoded = JSON.parse(atob(payload));
        if (!decoded.exp) return true;
        const now = Date.now() / 1000;
        return decoded.exp < now;
    } catch (e) {
        console.log(e);
        return true;
    }
}