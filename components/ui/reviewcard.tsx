import type { reviewshort } from "@/types/review"

export default function ReviewCard({ items }: { items: reviewshort[] }) {

    const griditems = items.map((rev) =>

        <li key={`grid-${rev.id}`} className="
                        max-w-160
                        border
                        rounded-xl
                        flex
                        border-accent
                        overflow-hidden 
                        bg-parch
                        duration-300
                        ease-in-out
                        group 
                        hover:shadow-lg 
                      hover:bg-parch-dark
                      hover:border-accent-light">
            <img src="images/placeholder.png" className="
                        w-100
                        sm:w-75
                        md:w-50
                        aspect-square
                        object-cover
                        object-center
                        overflow-hidden
                        transition-transform
                        duration-300
                        group-hover:scale-110" />
            <div className="px-4 py-1 w-full flex flex-col justify-between">
                <div className="
                        w-full 
                        flex 
                        justify-between 
                        items-center">
                    <span className="
                        px-3 
                        py-1
                        font-mono
                        text-sm 
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
                        Score: {rev.score}
                    </span>
                </div>
                <h2 className="
                        font-heading 
                        text-2xl">
                    {rev.titel}
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
            </div>
        </li>

    )
    return griditems
}