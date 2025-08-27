"use client"
import { Trash2 } from "lucide-react";
import { User } from '@/hooks/useAdmin';
import { useState } from "react";

interface UserTableProps {
    users: User[];
}

export default function UserTable({ users }: UserTableProps)
{
    const [toDelete, setToDelete] = useState<string | null>(null);
    return (
        <div className="overflow rounded-lg border border-gray-800 shadow">
            <table className="min-w-full border-collapse text-l">
                <thead className="bg-gray-900 text-gray-300">
                <tr>
                    <th className="pl-4 py-4 text-left">ID</th>
                    <th className="px-4 py-4 text-left">Nome</th>
                    <th className="px-4 py-4 text-left">Uploads</th>
                    <th className="px-4 py-4 text-left">Cargo</th>
                    <th className="px-4 py-4 text-left">Ações</th>
                </tr>
                </thead>
                <tbody>
                {users.length > 0 ? (
                    users.map((user) => (
                    <tr key={user.id} className={`border-t border-gray-800 transition-colors ${toDelete === user.id ? "bg-red-900/40 border-red-500" : "hover:bg-gray-800"}`}>
                        <td className="pl-4 py-4">{user.id}</td>
                        <td className="px-4 py-4">{user.username}</td>
                        <td className="px-4 py-4">{user.uploads}</td>
                        <td className="px-4 py-4">{user.role}</td>
                        <td className="px-4 py-4">
                            <button
                                onClick={() =>
                                    setToDelete(toDelete === user.id ? null : user.id)
                                }
                            >
                                <Trash2 className="w-5 h-5 cursor-pointer" />
                            </button>
                        </td>
                    </tr>
                    ))
                ) : (
                    <tr>
                    <td colSpan={4} className="px-4 py-6 text-center text-gray-400">
                        Nenhum usuário encontrado
                    </td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
}