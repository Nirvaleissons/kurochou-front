"use client"
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { isTokenExpired } from "@/utils/auth/auth";
import toast from "react-hot-toast";

export function useRedirectIfTokenIsValid(): void
{
    const router = useRouter();
    useEffect(() => {
        const token = localStorage.getItem("authToken");
        if (token && !isTokenExpired(token)) {
            router.replace('/');
            toast.error("Você já está autenticado!")
        }
    }, [router]);
}