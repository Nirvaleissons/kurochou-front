"use client"

import { useEffect, useState } from "react";
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

    useEffect(() => {
        const mockUsers: User[] = [
            { id: "8deb051a-3a04-418a-a1f4-0119dbdf2729", username: "meiro", uploads: 0, role: "admin" },
            { id: "83b84c0b-4a1a-4003-8e05-0c9ff720a641", username: "felopes", uploads: 0, role: "user" },
            { id: "d3baab26-7ae1-4f9d-bc29-e9b7a13bafe6", username: "dudu", uploads: 0, role: "user" },
        ];

        setTimeout(() => {
            setUsers(mockUsers);
            setLoading(false);
        }, 800);
    }, []);
    return { users, loading };  
}