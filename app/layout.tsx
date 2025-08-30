import "./globals.css";
import { ReactNode } from "react";
import { Outfit } from "next/font/google";
import Providers from "@/providers";
import { AuthProvider } from "@/src/contexts/AuthContext";

const outfit = Outfit({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
});

export default function RootLayout({children}: { children: ReactNode }) {
    return (
        <html lang="pt-br" className={outfit.className}>
        <body className="relative min-h-screen bg-gray-950 text-white overflow-hidden">
        <AuthProvider>
            <Providers>
                {children}
            </Providers>
        </AuthProvider>
        </body>
        </html>
    );
}