"use server"
import { readOneReview } from "@/lib/db/read";
import { notFound } from "next/navigation";
import Image from "next/image";


export default async function FullReviewCard({ reviewId }: { reviewId: string }) {
    const review = await readOneReview(reviewId)
    if (!review) notFound()

    const reviewImage = "/images/placeholder.png"

    return <article className="
                        m-4
                        max-w-160
                        min-w-100
                        border
                        rounded-xl
                        flex
                        even:flex-row-reverse
                        border-accent
                        overflow-hidden 
                        bg-parch">
        <Image src={reviewImage}
            alt=""
            width={200}
            height={200} />
        <div className="
                px-2
                grid
                content-start
                ">
            <div className="
                    my-1
                    sm:my-2
                    w-full 
                    flex 
                    justify-between 
                    items-center">
                <span className="
                        px-3 
                        py-1
                        font-mono
                        text-xs
                        sm:text-sm 
                        text-parch 
                        bg-ink 
                        rounded-full">
                    {review.category.category_name}
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
                    {review.score}
                </span>
            </div>
            <h2 className="
                font-heading
                text-lg 
                sm:text-2xl">
                <span className="
                hidden 
                sm:block">
                    {review.titel}
                </span>
                <span className="
                block 
                sm:hidden">
                    {review.titel.length > 20 ? `${review.titel.substring(0, 20)}...` : review.titel}
                </span>
            </h2>
            <p className="
                my-1
                sm:my-2
                italic
                text-sm
                sm:text-lg">
                {review.ingress}
            </p>
            <p className="
                text-sm
                sm:text-base">
                {review.body}
            </p>
            <span className="
                        px-2 
                        py-0.5
                        flex
                        justify-end
                        font-mono 
                        text-xs 
                        text-muted">
                {review.createdAt.toLocaleDateString("sv-se")}
            </span>
        </div>

    </article>
}
