import ReviewForm from "@/components/feature/reviewform"
import { fetchCategories } from "@/lib/db/read"

export default async function CreateReviewModal() {
    const categories = await fetchCategories()
    return (
        <ReviewForm categories={categories} />
    )
}