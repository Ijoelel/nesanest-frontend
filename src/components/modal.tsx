import { ModalType, PlaceData } from "@/lib/types";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { FaRegMap, FaStar } from "react-icons/fa";
import { PiForkKnifeFill } from "react-icons/pi";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdClose } from "react-icons/io";

export default function Modal({
    status,
    data,
    setStatus,
}: {
    status: boolean;
    data: PlaceData;
    setStatus: Dispatch<SetStateAction<ModalType>>;
}) {
    const startY = useRef(0);
    const [draggingDown, setDraggingDown] = useState(false);

    useEffect(() => {
        if (status) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }

        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, [status]);

    const handleTouchStart = (e: React.TouchEvent) => {
        startY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        const currentY = e.touches[0].clientY;
        if (currentY - startY.current > 100) {
            setDraggingDown(true);
            setTimeout(() => {
                setStatus({ status: false, data: {} });
                setDraggingDown(false);
            }, 200);
        }
    };

    return (
        <AnimatePresence>
            {status && (
                <motion.div
                    className="fixed z-50 top-0 left-0 w-full h-full flex justify-center items-center bg-black/50 px-4 overflow-y-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className="w-full h-fit max-w-2xl bg-white flex flex-col md:flex-row p-6 md:pt-10 rounded-lg gap-4 shadow-lg relative"
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        initial={{ y: 0 }}
                        animate={{ y: draggingDown ? 500 : 0 }}
                        exit={{ y: 500, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <IoMdClose
                            className="absolute z-[51] top-3 left-6 size-6 hidden md:block"
                            onClick={() => {
                                setStatus({ status: false, data: {} });
                            }}
                        />
                        <div className="flex flex-col gap-2 md:pt-0">
                            <img
                                src={data.image}
                                alt={data.name}
                                className="rounded-md w-full object-cover"
                            />
                            <p className="font-semibold text-xl">{data.name}</p>
                            <p className="text-gray-500">{data.description}</p>
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-2">
                                    <FaRegMap className="size-5" />
                                    <p className="text-sm text-gray-500">{`Unesa ${data.campus}`}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaStar className="size-5 text-yellow-500" />
                                    <p className="text-sm">{data.rating}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <PiForkKnifeFill className="size-5" />
                                    <p className="text-sm text-gray-500">
                                        {data.category}
                                    </p>
                                </div>
                            </div>
                            <button className="self-start w-fit px-2 py-1 text-sm bg-blue-200 rounded-full drop-shadow-lg">
                                Lihat Review
                            </button>
                        </div>
                        <div className="hidden md:flex flex-col w-1/2">
                            <div>
                                <p>{data.description}</p>
                            </div>
                            <div>
                                <h4>Review</h4>
                                <div className="flex gap-2 items-center">
                                    <p className="text-4xl font-bold">
                                        {data.rating}
                                    </p>
                                    <div>
                                        <div className="flex gap-0.5">
                                            {Array.from({ length: 5 }).map(
                                                (_, i) => {
                                                    const filled =
                                                        i <
                                                        Math.floor(
                                                            data.rating as number
                                                        );
                                                    return filled ? (
                                                        <FaStar
                                                            key={i}
                                                            className="size-4 text-yellow-500"
                                                        />
                                                    ) : (
                                                        <FaStar
                                                            key={i}
                                                            className="size-4 stroke-[30] stroke stroke-yellow-500 text-white"
                                                        />
                                                    );
                                                }
                                            )}
                                        </div>
                                        <p>{`${data.review?.length} orang`}</p>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        {Array.from({ length: 5 }).map(
                                            (_, i) => {
                                                return (
                                                    <div
                                                        key={i}
                                                        className="flex items-center gap-2"
                                                    >
                                                        <FaStar className="size-3" />
                                                        <p className="w-2">{5 - i}</p>
                                                        <hr className="h-0.5 w-24"/>
                                                        <p>
                                                            {data.review?.filter(
                                                                (item) =>
                                                                    Math.floor(
                                                                        item
                                                                    ) ==
                                                                    5 - i
                                                            ).length}
                                                        </p>
                                                    </div>
                                                );
                                            }
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
