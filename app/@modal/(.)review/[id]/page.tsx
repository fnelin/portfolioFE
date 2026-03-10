import { Suspense } from "react"
import ModalReview from "@/components/feature/modalreviewcard"
import FullReviewCard from "@/components/feature/fullreviewcard"
import ReviewSkeleton from "@/components/feature/reviewskeleton"

export default async function ModalPage({ params }: { params: Promise<{ id: string }> }) {
    const { id: reviewId } = await params

    return (
        <ModalReview>
            <Suspense fallback={<ReviewSkeleton />}>
                <FullReviewCard reviewId={reviewId} />
            </Suspense>
        </ModalReview>
    )
}