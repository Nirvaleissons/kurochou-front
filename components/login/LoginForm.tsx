"use client"

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function LoginForm() {
    const [Username, setUsername] = useState("");
    const [Password, setPassword] = useState("");
    const router = useRouter();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
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
            if (data?.data?.token)
            {
                localStorage.setItem("authToken", data.data.token);
                localStorage.setItem("user", Username);
                toast.success(`Bem-vindo(a), ${Username}!`);
                router.replace("./");
            } else {
                toast.error("Credenciais inválidas.")
            }

        } catch (e) {
            if (e instanceof Error)
            {
                toast.error("Ocorreu um erro com o servidor")
            } else toast.error(String(e));
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
        </form>
    );
}