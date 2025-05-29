"use client";

import { PlaceCard } from "@/components/card";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { data } from "../../../../public/test/data";
import { ModalType, PlaceData } from "@/lib/types";
import { BiArrowBack } from "react-icons/bi";
import Link from "next/link";
import Modal from "@/components/modal";

export default function SearchPage() {
    const { key } = useParams();
    const [filter, setFilter] = useState<number>(0);
    const [placeData, setPlaceData] = useState<PlaceData[]>(data);
    const [modal, setModal] = useState<ModalType>({ status: false, data: {} });

    const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
        console.log(event.key);
        console.log(key);
    };

    useEffect(() => {
        if (filter) {
            setPlaceData(() => data.filter((item) => item.campus === filter));
        } else {
            setPlaceData(data);
        }
    }, [filter]);

    return (
        <main className={` md:px-96 flex flex-col gap-8`}>
            <Link href={"/"}>
                <BiArrowBack className="size-6" />
            </Link>
            <div className="flex flex-col gap-2">
                <div className="bg-white flex p-3 gap-4 w-full justify-start items-center rounded-md drop-shadow-lg">
                    <FiSearch className="size-6 stroke-gray-500" />
                    <input
                        type="text"
                        placeholder="Cari tempat..."
                        className="text-lg font-semibold focus:ring-0 focus:outline-0 w-full"
                        onKeyDown={(event) => handleEnter(event)}
                    />
                </div>
                <p className="font-semibold">Filter</p>
                <div className="flex items-center gap-2">
                    <button
                        onClick={() =>
                            setFilter((prev) => (prev !== 1 ? 1 : 0))
                        }
                        className={`${
                            filter === 1
                                ? "bg-blue-400 text-white hover:bg-blue-500"
                                : "bg-white text-gray-500 hover:bg-gray-300"
                        } flex justify-center items-center font-semibold px-4 py-1 rounded-full drop-shadow-lg cursor-pointer`}
                    >
                        Unesa Kampus 1
                    </button>
                    <button
                        onClick={() =>
                            setFilter((prev) => (prev !== 2 ? 2 : 0))
                        }
                        className={`${
                            filter === 2
                                ? "bg-blue-400 text-white hover:bg-blue-500"
                                : "bg-white text-gray-500 hover:bg-gray-300"
                        } flex justify-center items-center font-semibold px-4 py-1 rounded-full drop-shadow-lg cursor-pointer`}
                    >
                        Unesa Kampus 2
                    </button>
                </div>
            </div>
            {/* Main Section */}
            <div className="w-full flex flex-wrap gap-4 justify-center">
                {placeData.map((data, i) => (
                    <PlaceCard key={i} data={data} setModal={setModal} />
                ))}
            </div>
            <Modal
                status={modal.status}
                data={modal.data}
                setStatus={setModal}
            />
        </main>
    );
}
