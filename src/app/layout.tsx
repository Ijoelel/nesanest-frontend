import type { Metadata } from "next";
import { poppins } from "@/lib/font";
import "./globals.css";

export const metadata: Metadata = {
    title: "NesaNest",
    description: "Let's",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${poppins.className} bg-[#F9F7F4] text-gray-900 antialiased p-8 min-h-screen w-full`}
            >
                {children}
            </body>
        </html>
    );
}
