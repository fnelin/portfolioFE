import type { reviewshort } from "@/types/review"
import Link from "next/link"

export default function ReviewCard({ items }: { items: reviewshort[] }) {

    const griditems = items.map((rev) =>

        <li key={`grid-${rev.id}`} className="
                        my-2
                        max-w-50
                        sm:w-150
                        sm:max-w-150
                        h-90
                        sm:h-auto
                        border
                        rounded-xl
                        flex
                        flex-col
                        sm:flex-row
                        sm:even:flex-row-reverse
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
                <img src="images/placeholder.png" alt="" className="
                        w-50
                        sm:w-50
                        aspect-square
                        object-cover
                        object-center
                        overflow-hidden
                        transition-transform
                        duration-300
                        sm:group-hover:scale-110" />
            </Link>
            <Link href={`/review/${rev.id}`} className="
                        px-4 
                        py-1 
                        sm:w-full
                        h-40
                        sm:h-auto
                        flex 
                        flex-col 
                        justify-between">
                <div>
                    <div className="
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
                            {rev.titel.length > 12 ? `${rev.titel.substring(0, 12)}...` : rev.titel}</span>
                    </h2>
                    <p className="
                        font-body">
                        {rev.ingress}
                    </p>
                </div>
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