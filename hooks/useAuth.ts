import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function useRedirectIfTokenIsValid()
{
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (token && !isTokenExpired(token)) router.replace('./');
    }, [router]);
}


function isTokenExpired(token: string)
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