import ReviewForm from "@/components/feature/reviewform"
import ModalReview from "@/components/feature/modalreviewaction"
import { fetchCategories } from "@/lib/db/read"

export default async function CreateReviewModal() {
    const categories = await fetchCategories()
    return (
        <ModalReview>
            <ReviewForm categories={categories} />
        </ModalReview>
    )
}