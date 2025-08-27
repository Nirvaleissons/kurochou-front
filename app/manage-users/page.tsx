"use client"

import useManageUsers from "@/hooks/useAdmin";
import UserTable from "@/components/manage-users/UserTable";
import Navbar from "@/components/general/Navbar";

export default function ManageUsersPage()
{
    const { users } = useManageUsers();
    return (
    <div className="flex flex-col p-10 justify-center min-h-screen bg-gray-950 overflow-hidden">
      <Navbar />
      <h1 className="text-3xl font-semibold mb-4">Gerenciar Usuários</h1>
      <UserTable users={users} />
    </div>
    );
}