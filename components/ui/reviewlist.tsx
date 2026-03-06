import type { reviewshort } from "@/types/review"
import Link from "next/link"

export default function ReviewList({ items }: { items: reviewshort[] }) {

    const griditems = items.map((rev, index) =>
        <li key={`list-${rev.id}`}
            className="
                py-0.5
                px-2
                bg-parch
                even:bg-parch-dark
                ">
            <Link href={`/review/${rev.id}`}
                className="
                flex 
                justify-between 
                gap-4 ">
                <span>
                    <span className="mx-4">
                        {rev.score}
                    </span>
                    <span>
                        {rev.titel}
                    </span>
                </span>
                <p>{rev.category.category_name}</p>
            </Link>
        </li>
    )
    return griditems
}