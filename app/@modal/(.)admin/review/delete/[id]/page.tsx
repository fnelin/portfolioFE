import DeleteForm from "@/components/feature/deleteform"
import FullReviewCard from "@/components/feature/fullreviewcard"
import ModalReview from "@/components/feature/modalreviewaction"

export default async function DeleteReviewModal({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params

    return (
        <ModalReview>
            <DeleteForm reviewId={id}>
                <FullReviewCard reviewId={id} />
            </DeleteForm>
        </ModalReview>
    )
}