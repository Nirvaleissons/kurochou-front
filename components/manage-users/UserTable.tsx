"use client"
import {Trash2} from "lucide-react";
import {PencilRuler} from "lucide-react"
import {User} from '@/hooks/useAdmin';
import {useState} from "react";
import ConfirmDeleteUserModal from "@/components/manage-users/ConfirmDeleteUserModal";
import toast from "react-hot-toast";

interface UserTableProps {
    users: User[];
}

export default function UserTable({users}: UserTableProps) {
    const [toDelete, setToDelete] = useState<User | null>(null);

    const handleConfirmDelete = () => {
        if (toDelete) {
            console.log("teste deleta");
            toast.success(`Usuário ${toDelete.username} deletado com sucesso.`, {duration: 3000});
            setToDelete(null);
        }
    }
    return (
        <div className="overflow rounded-lg border border-gray-800 shadow">
            <table className="min-w-full border-collapse text-l">
                <thead className="bg-gray-900 text-gray-300">
                <tr>
                    <th className="px-4 py-4 text-left">Nome</th>
                    <th className="px-0 py-4 text-left">Uploads</th>
                    <th className="px-4 py-4 text-left">Cargo</th>
                    <th className="px-4 py-4 text-left">Ações</th>
                </tr>
                </thead>
                <tbody>
                {users.length > 0 ? (
                    users.map((user) => (
                        <tr key={user.id}
                            className={`border-t border-gray-800 transition-colors ${toDelete === user ? "bg-red-900/40 border-red-500" : "hover:bg-gray-800"}`}>
                            <td className="px-4 py-4">{user.username}</td>
                            <td className="px-4 py-4">{user.uploads}</td>
                            <td className="px-4 py-4">{user.role}</td>
                            <td className="px-4 py-4">
                                <div className="flex items-center gap-4">
                                    <button
                                        onClick={() =>
                                            setToDelete(user)
                                        }
                                    >
                                        <Trash2
                                            className="w-5 h-5 cursor-pointer transition-colors hover:text-red-600"/>
                                    </button>
                                    <button
                                    >
                                        <PencilRuler
                                            className="w-5 h-5 cursor-pointer transition-colors hover:text-blue-400"/>
                                    </button>
                                </div>
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
            <ConfirmDeleteUserModal
                isOpen={!!toDelete}
                onCancel={() => setToDelete(null)}
                onConfirm={handleConfirmDelete}
            >
                Deseja realmente excluir o usuário{" "}
                <span className="font-semibold text-red-400">
                    {toDelete?.username}
                </span>
                ?
            </ConfirmDeleteUserModal>
        </div>
    );
}