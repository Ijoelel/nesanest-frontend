"use client";

import { ModalType, PlaceData } from "@/lib/types";
import { Dispatch, SetStateAction } from "react";
import { IconType } from "react-icons";
import { FaRegMap, FaStar } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

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

export function PlaceCard({
    data,
    setModal,
}: {
    data: PlaceData;
    setModal: Dispatch<SetStateAction<ModalType>>;
}) {
    return (
        <div className="h-[21rem] w-[20.5rem] bg-linear-to-b from-blue-300/10 via-blue-300/20 to-blue-300/75 rounded-xl flex flex-col justify-between p-4 drop-shadow-lg">
            <img src={data.image} alt="" className="w-full rounded-md" />
            <button
                className="font-semibold w-full text-left hover:underline"
                onClick={() => setModal({ status: true, data })}
            >
                {data.name}
            </button>
            <div className="w-full flex justify-between">
                <div className="flex items-center gap-2">
                    <FaRegMap className="size-5" />
                    <p className="text-sm text-gray-500">
                        {`Unesa ${data.campus}`}
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <IoLocationOutline className="size-5" />
                    <p className="text-sm text-gray-500">{data.address}</p>
                </div>
                <div className="flex items-center gap-2">
                    <FaStar className="size-5" />
                    <p className="text-sm">{data.rating}</p>
                </div>
            </div>
        </div>
    );
}
