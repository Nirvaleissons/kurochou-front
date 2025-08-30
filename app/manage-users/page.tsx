"use client"

import useManageUsers from "@/hooks/useAdmin";
import UserTable from "@/components/manage-users/UserTable";
import Navbar from "@/components/general/Navbar";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/src/contexts/AuthContext";
import toast from "react-hot-toast";

export default function ManageUsersPage() {
    const {users} = useManageUsers();
    const router = useRouter();
    const {isAdmin} = useAuth();
    useEffect(() => {
        if (!isAdmin) {
            toast.error("Você não é um administrador.")
            router.replace("/");
        }
    }, [isAdmin, router]);
    return (
        <div className="flex flex-col px-10 pt-24 justify-start min-h-screen bg-gray-950 overflow-hidden">
            <Navbar/>
            <div className="w-full max-w-7xl mx-auto">
                <h1 className="text-3xl font-semibold mb-4">Gerenciar Usuários</h1>
                <UserTable users={users}/>
            </div>
        </div>
    );
}