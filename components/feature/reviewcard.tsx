import type { reviewshort } from "@/types/review"
import Link from "next/link"

export default function ReviewCard({ items }: { items: reviewshort[] }) {

    const griditems = items.map((rev) =>

        <li key={`grid-${rev.id}`} className="
                        my-2
                        h-90
                        w-50
                        sm:w-150
                        sm:h-auto
                        rounded-xl
                        flex
                        flex-col
                        shrink-0
                        sm:flex-row
                        sm:even:flex-row-reverse
                        md:even:justify-self-end
                        md:odd:justify-self-start
                        border
                        border-accent
                        overflow-hidden 
                        bg-parch
                        group
                        duration-300
                        ease-in-out
                        hover:shadow-lg 
                      hover:bg-parch-dark
                      hover:border-accent-light">
            <Link href={`/review/${rev.id}`} className="
                        block 
                        w-50 
                        shrink-0">
                <img src={`${(rev.mainmedia.length > 1) ? rev.mainmedia : `defaultCardPicture.svg`}`}
                    width={200}
                    height={200}
                    alt=""
                    className="
                        w-50
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
                        w-full
                        h-40
                        sm:h-auto
                        flex 
                        flex-col 
                        justify-between">
                <div className="">
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
                            <span className="hidden sm:inline">
                                Score:
                            </span>
                            {rev.score}
                        </span >
                    </div >
                    <h2 className="
                        font-heading
                        text-lg 
                        sm:text-xl
                        sm:py-2">
                        <span className="hidden sm:block">
                            {rev.titel}
                        </span>
                        <span className="block sm:hidden">
                            {rev.titel.length > 12 ? `${rev.titel.substring(0, 12)}...` : rev.titel}
                        </span >
                    </h2 >
                    <p className="
                        font-body">
                        {rev.ingress}
                    </p>
                </div >
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
            </Link >
        </li >

    )
    return griditems
}