"use client";

import { FiSearch } from "react-icons/fi";
import Header from "../header";
import { SelectionCard } from "../card";
import { inter } from "@/lib/font";
import { FaRegMap, FaStar } from "react-icons/fa";
import { PiBasketball, PiBookOpenText, PiForkKnifeFill } from "react-icons/pi";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Home() {
    const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            redirect(`/search/${(event.target as HTMLInputElement).value}`);
        }
    };
    return (
        <>
            <Header />
            <main className="flex flex-col justif-between w-full h-full py-4 lg:p-24 lg:flex-row">
                <div className="flex flex-initial flex-col gap-4 max-w-full lg:max-w-1/2 p-4 lg:p-8 ">
                    <h2 className="font-bold text-5xl">
                        Find the best rated spots near our university
                    </h2>
                    <p>
                        Explore top-rated places nearby based on ratings,
                        distance, and location.
                    </p>
                    <div className="bg-white flex p-3 gap-4 w-full justify-start items-center rounded-md drop-shadow-lg">
                        <FiSearch className="size-6 stroke-gray-500" />
                        <input
                            type="text"
                            placeholder="Cari tempat..."
                            className="text-lg font-semibold focus:ring-0 focus:outline-0 w-full"
                            onKeyDown={(event) => handleEnter(event)}
                        />
                    </div>
                    <div className="flex flex-col justify-between items-center gap-4 lg:flex-row">
                        <Link href={"restaurant"}>
                            <SelectionCard
                                icon={PiForkKnifeFill}
                                text={"Food"}
                            />
                        </Link>
                        <Link href={"study"}>
                            <SelectionCard
                                icon={PiBookOpenText}
                                text={"Study"}
                            />
                        </Link>
                        <Link href={"play"}>
                            <SelectionCard icon={PiBasketball} text={"Play"} />
                        </Link>
                    </div>
                    <div className="hidden lg:flex w-48 h-10 mt-8 justify-start items-center bg-gray-400/20 rounded-full gap-4 font-semibold drop-shadow-lg">
                        <div className="w-1/2 h-full flex justify-center items-center bg-blue-300/70 rounded-full drop-shadow-lg">
                            <Link href={"sign-up"} className="hover:underline">
                                Sign Up
                            </Link>
                        </div>
                        <Link href={"sign-in"} className="hover:underline">
                            Sign In
                        </Link>
                    </div>
                </div>
                <div className="w-full lg:w-2/5 h-full lg:ml-12">
                    <div className="lg:relative lg:flex-row flex flex-col p-4 justify-between bg-gradient-to-b from-transparent to-sky-400/25 gap-2 rounded-lg drop-shadow-xl">
                        <div className="flex flex-col w-2/3 h-fit lg:h-96 gap-2">
                            <h3
                                className={`${inter.className} text-3xl font-semibold w-2/3`}
                            >
                                Strawberry Oatmeal Pancake with Honey Syrup
                            </h3>
                            <div className="flex items-center gap-2 mt-4">
                                <FaRegMap className="size-8" />
                                <p className="text-xl font-semibold text-gray-500">
                                    Unesa 1
                                </p>
                            </div>
                            <div className="flex items-center gap-2">
                                <PiForkKnifeFill className="size-8" />
                                <p className="text-xl font-semibold text-gray-500">
                                    Food
                                </p>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaStar className="size-8" />
                                <p className="text-xl font-semibold">{`4.9 (19 rating)`}</p>
                            </div>
                            <div className="mb-4">
                                <p></p>
                            </div>
                        </div>

                        <div className="w-2/3 lg:absolute lg:top-1/5 lg:left-2/4 lg:w-2/3 ">
                            <img
                                src="/test/images/3.png"
                                alt=""
                                className="rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
