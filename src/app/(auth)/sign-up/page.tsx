import { tienne } from "@/lib/font";
import Link from "next/link";

export default function SignUp() {
    return (
        <div className="w-full max-w-sm mx-auto space-y-6 bg-white backdrop-blur-md rounded-xl shadow-lg p-10 flex flex-col">
            <h1 className="font-lobster text-4xl self-center">NesaNest</h1>
            <p
                className={`text-md ${tienne.className} self-center font-semibold -mt-2`}
            >
                Sign Up
            </p>
            <form className="space-y-4">
                <div>
                    <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-gray-900"
                    >
                        Nama
                    </label>
                    <input
                        type="name"
                        name="name"
                        placeholder="Your Name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full p-2.5"
                    />
                </div>
                <div>
                    <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="john.doe@gmail.com"
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full p-2.5"
                    />
                </div>
                <div>
                    <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        placeholder="********"
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full p-2.5"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full text-white bg-blue/60 font-medium rounded-lg px-5 py-2.5 text-center uppercase bg-blue-500/80 hover:bg-blue-500 hover:cursor-pointer"
                >
                    {0 ? "Registering..." : "Register"}
                </button>
            </form>
            <p className="text-sm font-light text-gray-500">
                Already have an account?
                <Link href="/sign-in">
                    <span className="font-medium pl-1 text-blue-600 hover:text-blue-700">
                        Sign in here
                    </span>
                </Link>
            </p>
        </div>
    );
}
