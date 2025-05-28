import { Tienne, Poppins, Inter } from "next/font/google";

export const poppins = Poppins({
    variable: "--font-poppins",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
});

export const tienne = Tienne({
    variable: "--font-tienne",
    weight: ["400", "700", "900"],
    subsets: ["latin"],
});

export const inter = Inter({
    variable: "--font-inter",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
});
