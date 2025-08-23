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