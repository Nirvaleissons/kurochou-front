"use client";

import { useState } from "react";

export default function LoginForm() {
    const [Username, setUsername] = useState("");
    const [Password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        try
        {
            const res = await fetch("http://localhost:5149/api/auth/login", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    Username,
                    Password,
                }),
            });
            const data = await res.json();
            const token = data.data.token;

            localStorage.setItem("authToken", token);
            console.log(token);
        } catch (e) {
            if (e instanceof Error)
            {
                setError(e.message);
            } else setError(String(e))
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
                type="text"
                placeholder="Nome de usuário"
                value={Username}
                onChange={(e) => setUsername(e.target.value)}
                className="border p-2 rounded-lg border-gray-500 focus:outline-none"
                required
            />
            <input
                type="password"
                placeholder="Senha"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
                className="border p-2 rounded-lg border-gray-500 focus:outline-none"
                required
            />
            <button
                type="submit"
                className="bg-blue-600 text-white p-2 rounded-lg hover:bg-indigo-800 active:bg-indigo-950 focus:outline-none transition"
            >
                Entrar
            </button>
            {error && <p className="text-red-500 mx-auto">{error}</p>}
        </form>
    );
}