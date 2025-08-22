"use client"

import LoginForm from "@/components/login/LoginForm";
import { useRedirectIfTokenIsValid } from "@/hooks/useAuth";

export default function LoginPage() {
    useRedirectIfTokenIsValid();
    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-gray-950 overflow-hidden">
            <p className="text-white text-2xl mb-6">kurochou.me</p>
            <div className="w-full max-w-md bg-black/50 p-6 rounded-4xl px-8 pt-6 pb-8 mb-4 shadow-[inset_0px_4px_6px_4px_rgba(0,_0,_0,_0.7)]">
                <h2 className="text-3xl text-center mb-6 text-white">Entre em sua conta</h2>
                <LoginForm />
            </div>
            <p className="text-white text-lg mb-6">Se você não possui uma conta, peça a um administrador para criar uma.</p>
            <div className="pointer-events-none absolute bottom-45 left-1/2 -translate-x-1/2 h-64 w-[120%] blur-2xl bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.2),transparent)]"></div>
        </main>
    );
}