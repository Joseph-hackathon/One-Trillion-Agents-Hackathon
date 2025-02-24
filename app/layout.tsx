import { ReactNode } from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import MuiThemeProvider from "./lib/wagmi/MuiProvider";
import Web3Provider from './lib/wagmi/Web3Provider';
import "./globals.css";
import '@fontsource/roboto';

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Nero",
    description: "One-Trillion-Agents-Hackathon",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {

    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <Web3Provider>
                    <MuiThemeProvider>
                        {children}
                    </MuiThemeProvider>
                </Web3Provider>
                
            </body>
        </html>
    );
}
