const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "https://localhost:7033/api";

const authHeaders = (token: string) => ({
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
});

const userController = {
    async getUsers(token: string) {
        const response = await fetch(`${BASE_URL}/user`, {
            method: "GET",
            headers: authHeaders(token)
        });

        if (!response.ok) {
            throw new Error("Não foi possível buscar os usuários");
        }

        const result = await response.json();
        return result.data;
    },

    async deleteUser(token: string, userId: string) {
        const response = await fetch(`${BASE_URL}/user/${userId}`, {
            method: "DELETE",
            headers: authHeaders(token)
        });

        if (!response.ok) {
            throw new Error("Não foi possível deletar o usuário")
        }

        return response.ok;
    }
};

export default userController;