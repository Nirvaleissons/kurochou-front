"use client"
import Image from "next/image";
import KuroIcon from "@/src/assets/brasileirinha.svg"
import { useAuth } from "@/src/contexts/AuthContext";
import Link from "next/link";
import toast from "react-hot-toast";

export default function Navbar() {
    const {isAdmin, isLoggedIn, logout, username} = useAuth()
    return (
        <nav
            className="fixed top-0 left-0 w-full h-20 bg-[rgba(1,3,9,0.95)] shadow-[inset_0px_4px_6px_4px_rgba(0,_0,_0,_0.7)] flex items-center px-6 z-50">
            <div className="text-white text-4xl font-semibold tracking-wide p-3 flex items-baseline">
                <Image
                    src={KuroIcon}
                    alt={"Brasileirinha"}
                    width={45}
                    height={45}
                    className="pr-3 relative top-1"
                />
                kurochou<span className="font-thin text-xl">.me</span>
            </div>

            <div className="ml-auto flex space-x-6">
                <Link href="./" className="text-white opacity-80 hover:opacity-100 transition">
                    Início
                </Link>
                <Link href="#" className="text-white opacity-80 hover:opacity-100 transition">
                    Sobre
                </Link>
                {!isLoggedIn &&
                    <Link href="/login" className="text-white opacity-80 hover:opacity-100 transition">
                        Login
                    </Link>
                }
                {isAdmin &&
                    <>
                        <Link href="/manage-users" className="text-white opacity-80 hover:opacity-100 transition">
                            Gerenciar Usuários
                        </Link>
                    </>
                }
                {isLoggedIn && <>
                    <Link href="#" className="text-white opacity-80 hover:opacity-100 transition">
                        Upload
                    </Link>
                    <Link
                        href="/"
                        className="text-white ..."
                        onClick={(e) => {
                            e.preventDefault();
                            logout(false);
                            toast(`Até mais, ${username}!`, {icon: '👋', duration: 3000})
                        }}
                    >
                        Sair
                    </Link>
                </>
                }
            </div>
        </nav>
    )
}