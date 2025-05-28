"use client";
import Link from "next/link";

export default function Header() {
    return (
        <header className="flex justify-between">
            <Link href={"/"}>
                <h1 className={`font-lobster text-4xl font-bold pl-4`}>
                    NesaNest
                </h1>
            </Link>
            <Link
                href={"sign-in"}
                className="w-fit h-10 flex justify-center items-center bg-blue-300/70 rounded-full drop-shadow-lg px-4 font-semibold lg:hidden"
            >
                Sign In
            </Link>
        </header>
    );
}
