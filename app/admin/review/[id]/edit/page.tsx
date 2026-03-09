import ReviewForm from "@/components/feature/reviewform"
import { fetchCategories, readOneReview } from "@/lib/db/read"
import { notFound } from "next/navigation"

export default async function EditReviewModal({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const [review, categories] = await Promise.all([
        readOneReview(id),
        fetchCategories()
    ])

    if (!review) notFound()

    return (
        <ReviewForm review={review} categories={categories} />
    )
}