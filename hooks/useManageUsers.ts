"use client"

import { useEffect, useState } from "react";
import { useAuth } from "@/src/contexts/AuthContext";
import userController from "@/controllers/userController";
import toast from "react-hot-toast";

export interface User {
    id: string;
    username: string;
    uploads: number;
    role: string;
}

export default function useManageUsers()
{
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const {token} = useAuth();

    const refreshUsers = async () => {
        if (!token) return;

        try {
            setLoading(true);
            const data = await userController.getUsers(token);

            const formattedUsers = data.map((u: any) => ({
                ...u,
                role: u.role === 0 ? "Admin" : "User"
            }));

            setUsers(formattedUsers);
        } catch (error) {
            toast.error("Não foi possível encontrar os usuários");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        refreshUsers();
    }, [token])

    return { users, loading, refreshUsers };
}