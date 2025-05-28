import { tienne } from "@/lib/font";
import Link from "next/link";

export default function SignIn() {
    return (
        <div className="w-full max-w-sm mx-auto space-y-6 bg-white backdrop-blur-md rounded-xl shadow-lg p-10 flex flex-col">
            <h1 className="font-lobster text-4xl self-center">NesaNest</h1>
            <p
                className={`text-md ${tienne.className} self-center font-semibold -mt-2`}
            >
                Sign In
            </p>
            <form className="space-y-4">
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
                        autoComplete="off"
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
                    className="w-full bg-blue-500/80 text-white bg-blue/60 font-medium rounded-lg px-5 py-2.5 text-center uppercase hover:bg-blue-500 cursor-pointer disabled:bg-gray-500"
                >
                    {0 ? (
                        <div className="flex justify-center items-center gap-2">
                            <span className="loading loading-spinner loading-md"></span>
                            <p>Loading...</p>
                        </div>
                    ) : (
                        "Sign In"
                    )}
                </button>
            </form>
            <p className="text-sm font-light text-gray-500">
                Don&apos;t have an account yet?
                <Link href="/sign-up">
                    <span className="font-medium pl-1 text-blue-600 hover:text-blue-700">
                        Sign up here
                    </span>
                </Link>
            </p>
        </div>
    );
}
