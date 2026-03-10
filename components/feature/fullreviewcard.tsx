"use server"
import { readOneReview } from "@/lib/db/read";
import { notFound } from "next/navigation";
import Image from "next/image";


export default async function FullReviewCard({ reviewId }: { reviewId: string }) {
    const review = await readOneReview(reviewId)
    if (!review) notFound()

    const reviewImage = review.mainmedia || "/images/placeholder.svg"

    return <article className=" 

            m-4
            max-w-50
            sm:w-150
            sm:max-w-150
            border
            rounded-xl
            border-accent
            overflow-hidden
            bg-parch">
        <span className="
            flex
            flex-col
            sm:flex-row
            items-start">
            <Image src={reviewImage}
                alt=""
                width={200}
                height={200}
                className="
                w-50
                h-50
                object-cover
                shrink-0
                overflow-hidden"/>
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
            </div>
        </span>
        <div className="
        m-2">
            <p className="
                text-sm
                sm:text-base">
                {review.body}
            </p>
            <span className="
                    flex
                    justify-end
                    font-mono 
                    text-xs 
                    text-muted">
                {review.createdAt.toLocaleDateString("sv-se")}
            </span>
        </div>
    </article >

}
