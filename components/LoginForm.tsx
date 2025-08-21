"use client";

import { useState } from "react";

export default function LoginForm() {
    const [username, setUsername] = useState("");
    const [senha, setSenha] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
                type="email"
                placeholder="Nome de usuário"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="border p-2 rounded-lg border-gray-500 focus:outline-none"
                required
            />
            <input
                type="password"
                placeholder="Senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className="border p-2 rounded-lg border-gray-500 focus:outline-none"
                required
            />
            <button
                type="submit"
                className="bg-blue-600 text-white p-2 rounded-lg hover:bg-indigo-800 active:bg-indigo-950 focus:outline-none transition"
            >
                Entrar
            </button>
        </form>
    );
}