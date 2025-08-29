"use client"

import Navbar from "@/components/general/Navbar";
import {useAuth} from "@/src/contexts/AuthContext";

export default function Home() {
    const {username} = useAuth();
    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-gray-950">
            <Navbar/>
            <h1 className="text-3xl font-bold">{username ? <span>Bem-vindo, {username}!</span> :
                <span>Bem vindo!</span>}</h1>
            <p className="mt-4 text-gray-600">Essa é a página inicial.</p>
        </main>
    );
}