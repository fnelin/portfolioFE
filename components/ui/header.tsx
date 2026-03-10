import Image from "next/image"
import icon from "@/public/icon.png"
import Link from "next/link"

export default function TopBar() {
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
                height={30} />
        </a>
        <nav className="
            text-ink-light 
            font-semibold">
            <a href="/"
                className=
                "px-2">
                Home
            </a>
            <Link href="/admin/review/create">
                Add Review
            </Link>
            <a href="/archive"
                className=
                "px-2">
                Archive
            </a>
            <a href="#"
                className="
                px-2">
                Admin
            </a>
        </nav>
    </div >
}