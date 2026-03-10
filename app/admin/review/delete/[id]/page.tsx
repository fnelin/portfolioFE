import DeleteForm from "@/components/feature/deleteform"
import FullReviewCard from "@/components/feature/fullreviewcard"

export default async function DeleteReviewModal({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params

    return (
        <article className="flex justify-center">
            <DeleteForm reviewId={id}>
                <FullReviewCard reviewId={id} />
            </DeleteForm>
        </article>
    )
}