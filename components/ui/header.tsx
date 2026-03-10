"use client"
import { useState } from "react"
import Image from "next/image"
import icon from "@/public/icon.png"
import Link from "next/link"

export default function TopBar() {
    const [adminMode, setAdminMode] = useState(false);

    const handleAdminClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setAdminMode(!adminMode);
    };
    return <div
        className="
            flex 
            justify-between
            items-center
            px-4 
            py-2 
            bg-parch-dark"
    >
        <a href="/">
            <Image src={icon}
                alt=""
                height={24} />
        </a>
        <nav className="
            text-ink-light 
            font-semibold">
            <a href="/"
                className=
                "px-2">
                Home
            </a>
            <Link href="/admin/review/create"
                className={`px-2 ${adminMode ? " " : "hidden"}`}>
                Add Review
            </Link>
            <a href="/archive"
                className="
                px-2">
                Archive
            </a>
            <a href="#"
                onClick={handleAdminClick}
                className={`px-2 ${adminMode ? "text-parch bg-accent" : ""}`}>
                Admin
            </a>
        </nav>
    </div >
}