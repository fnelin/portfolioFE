import ReviewForm from "@/components/feature/reviewform"
import { fetchCategories } from "@/lib/db/read"

export default async function CreateReviewModal() {
    const categories = await fetchCategories()
    return (
        <article className="flex justify-center">
            <ReviewForm categories={categories} />
        </article>
    )
}