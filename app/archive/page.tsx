import { readReviewCards } from "@/lib/db/read"
import ReviewGrid from "@/components/ui/reviewgrid";
import ReviewList from "@/components/ui/reviewlist";

export default async function archivepage() {

    const reviews = await readReviewCards(1, 50)

    return <>
        <section className="
            flex 
            justify-center 
            bg-parch-dark 
            py-8">
            <h2 className="
                font-semibold 
                font-heading 
                text-3xl">
                Archive
            </h2>
        </section>
        <ReviewGrid>
            <ReviewList items={reviews} />
        </ReviewGrid>
    </>
}