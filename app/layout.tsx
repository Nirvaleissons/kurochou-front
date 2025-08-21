import "./globals.css";
import { ReactNode } from "react";
import { Outfit } from "next/font/google";

const outfit = Outfit({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
});

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="pt-br" className={outfit.className}>
            <body className="relative min-h-screen bg-gray-950 text-white overflow-hidden">
                {children}
            </body>
        </html>
    );
}