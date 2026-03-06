import FullReviewCard from "@/components/feature/fullreviewcard"

export default async function ReviewDetails({ params }: { params: Promise<{ id: string }> }) {
    const { id: reviewId } = await params
    return <section className="flex justify-center">
        <FullReviewCard reviewId={reviewId} />
    </section>
}