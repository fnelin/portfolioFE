import ModalReview from "@/components/feature/modalreview"
import FullReviewCard from "@/components/ui/fullreviewcard"

export default async function ModalPage({ params }: { params: Promise<{ id: string }> }) {
    const { id: reviewId } = await params

    return (
        <ModalReview>
            <FullReviewCard reviewId={reviewId} />
        </ModalReview>
    )
}