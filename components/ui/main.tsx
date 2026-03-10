import { readReviewCards } from "@/lib/db/read"
import ReviewCard from "../feature/reviewcard";
import ReviewGrid from "../feature/reviewgrid";
export default async function MainGrid() {
    const reviews = await readReviewCards(1, 6, "")

    return <>
        <section className="bg-parch-dark py-8">
            <div className="flex justify-center"><h2 className="font-semibold font-heading text-xl">Search and filtering slated for v.2</h2></div>
        </section>
        <ReviewGrid>
            <ReviewCard items={reviews} />
        </ReviewGrid>
    </>
}