export function isTokenExpired(): boolean
{
    if (typeof window === "undefined") return true;
    const token = localStorage.getItem('authToken');
    if (!token) return true;

    try
    {
        const payload = token.split('.')[1];
        const decoded = JSON.parse(atob(payload));
        if (!decoded.exp) return true;
        const now = Date.now() / 1000;
        return decoded.exp < now;
    } catch (e) {
        console.log(e);
        return true;
    }
}

export function checkIsUserAdmin(): boolean
{
    if (typeof window === "undefined") return false;
    const token = localStorage.getItem('authToken');
    if (!token) return false;

    try
    {
        const payload = token.split('.')[1];
        const decoded = JSON.parse(atob(payload));
        const claimKey = <string>process.env.NEXT_PUBLIC_ROLE_CLAIM;
        const roleClaim = decoded[claimKey];
        return roleClaim === "Admin";
    } catch (e) {
        console.error("Error while checking if user is admin:", e);
        return false;
    }
}