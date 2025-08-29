export function isTokenExpired(token?: string): boolean {
    if (!token) return true;

    try {
        const payload = token.split(".")[1];
        const decoded = JSON.parse(atob(payload));
        if (!decoded.exp) return true;

        const now = Date.now() / 1000;
        return decoded.exp < now;
    } catch (e) {
        console.error("Error decoding token:", e);
        return true;
    }
}

export function checkIsUserAdmin(token?: string): boolean {
    if (!token) return false;

    try {
        const payload = token.split(".")[1];
        const decoded = JSON.parse(atob(payload));
        const claimKey = process.env.NEXT_PUBLIC_ROLE_CLAIM as string;
        const roleClaim = decoded[claimKey];
        return roleClaim === "Admin";
    } catch (e) {
        console.error("Error while checking if user is admin:", e);
        return false;
    }
}