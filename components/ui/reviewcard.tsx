import type { reviewshort } from "@/types/review"
import Link from "next/link"

export default function ReviewCard({ items }: { items: reviewshort[] }) {

    const griditems = items.map((rev) =>

        <li key={`grid-${rev.id}`} className="
                        my-2
                        max-w-160
                        border
                        rounded-xl
                        flex
                        even:flex-row-reverse
                        border-accent
                        overflow-hidden 
                        bg-parch
                        duration-300
                        ease-in-out
                        group 
                        hover:shadow-lg 
                      hover:bg-parch-dark
                      hover:border-accent-light">
            <Link href={`/review/${rev.id}`}>
                <img src="images/placeholder.png" className="
                        w-25
                        sm:w-50
                        aspect-square
                        object-cover
                        object-center
                        overflow-hidden
                        transition-transform
                        duration-300
                        group-hover:scale-110" />
            </Link>
            <Link href={`/review/${rev.id}`} className="px-4 py-1 w-full flex flex-col justify-between">
                <div className="
                        w-full 
                        flex 
                        justify-between 
                        items-center">
                    <span className="
                        px-3 
                        py-1
                        font-mono
                        text-xs
                        md:text-sm 
                        text-parch 
                        bg-ink 
                        rounded-full">
                        {rev.category.category_name}
                    </span>
                    <span className="
                        px-3 
                        py-1
                        font-mono 
                        text-sm 
                        bg-accent 
                        text-parch 
                        rounded-full">
                        <span className="hidden sm:inline">Score: </span>{rev.score}
                    </span>
                </div>
                <h2 className="
                        font-heading
                        text-lg 
                        sm:text-xl">
                    <span className="hidden sm:block">
                        {rev.titel}
                    </span>
                    <span className="block sm:hidden">
                        {rev.titel.length > 20 ? `${rev.titel.substring(0, 20)}...` : rev.titel}</span>
                </h2>
                <p className="
                        font-body">
                    {rev.ingress}
                </p>
                <span className="
                        px-2 
                        py-0.5
                        flex
                        justify-end
                        
                        font-mono 
                        text-xs 
                        text-muted">
                    {rev.createdAt.toLocaleDateString("sv-se")}
                </span>
            </Link>
        </li >

    )
    return griditems
}