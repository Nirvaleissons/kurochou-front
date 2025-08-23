"use client"

import {useIsTokenExpired, useLogout, useIsUserAdmin} from "@/hooks/useAuth";

export default function Navbar() {
    const expired: boolean = useIsTokenExpired();
    const isAdmin: boolean = useIsUserAdmin();
    const logout: () => void = useLogout();
    return (
        <nav className="fixed top-0 left-0 w-full h-20 bg-[rgba(1,3,9,0.95)] shadow-[inset_0px_4px_6px_4px_rgba(0,_0,_0,_0.7)] flex items-center px-6 z-50">
            <div className="text-white text-4xl font-semibold tracking-wide">
                kurochou<span className="font-thin text-xl">.me</span>
            </div>

            <div className="ml-auto flex space-x-6">
                <a href="./" className="text-white opacity-80 hover:opacity-100 transition">
                    Início
                </a>
                <a href="#" className="text-white opacity-80 hover:opacity-100 transition">
                    Sobre
                </a>
                {expired &&
                    <a href="/login" className="text-white opacity-80 hover:opacity-100 transition">
                        Login
                    </a>
                }
                {isAdmin &&
                    <>
                        <a href ="#" className="text-white opacity-80 hover:opacity-100 transition">
                            Gerenciar Usuários
                        </a>
                    </>
                }
                {!expired && <>
                    <a href="#" className="text-white opacity-80 hover:opacity-100 transition">
                        Upload
                    </a>
                    <a
                        href="/login"
                        className="text-white ..."
                        onClick={(e) => {
                            e.preventDefault();
                            logout();
                        }}
                    >
                        Sair
                    </a>
                </>
                }
            </div>
        </nav>
    )
}