import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sign Up & Sign In | NesaNest",
    description: "Let's",
};

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="mt-8 flex justify-center items-center">
            {children}
        </main>
    );
}
