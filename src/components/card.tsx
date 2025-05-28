"use client";

import { PlaceData } from "@/lib/types";
import { IconType } from "react-icons";
import { FaRegMap, FaStar } from "react-icons/fa";
import { PiForkKnifeFill } from "react-icons/pi";

export function SelectionCard({
    icon: Icon,
    text,
}: {
    icon: IconType;
    text: string;
}) {
    return (
        <>
            <div className="size-44 max-w-44 max-h-44 flex flex-col items-center justify-center bg-white gap-4 rounded-lg drop-shadow-xl hover:translate-y-1">
                <Icon className="size-12" />
                <p className="text-2xl font-bold">{text}</p>
            </div>
        </>
    );
}

export function PlaceCard({ data }: { data: PlaceData }) {
    return (
        <div className="h-[21rem] w-[20.5rem] bg-linear-to-b from-transparent via-blue-300/15 to-blue-300/75 rounded-xl flex flex-col justify-between p-4 drop-shadow-lg">
            <img src={data.image} alt="" className="w-full rounded-md"/>
            <h1 className="font-semibold">{data.name}</h1>
            <div className="w-full flex justify-between">
                <div className="flex items-center gap-2">
                    <FaRegMap className="size-5" />
                    <p className="text-sm text-gray-500">
                        {`Unesa ${data.campus}`}
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <PiForkKnifeFill className="size-5" />
                    <p className="text-sm text-gray-500">{data.category}</p>
                </div>
                <div className="flex items-center gap-2">
                    <FaStar className="size-5" />
                    <p className="text-sm">{data.rating}</p>
                </div>
            </div>
        </div>
    );
}
