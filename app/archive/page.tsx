import { prisma } from "../../lib/db/prismaclient"
import { readReviewCards } from "@/lib/db/read"
import ReviewGrid from "@/components/feature/reviewgrid";
import ReviewList from "@/components/feature/reviewlist";
import Pagination from "@/components/feature/pageination";

export default async function archivepage({ searchParams }: {
    searchParams: Promise<{ page?: string; pagesize?: string }>
}) {

    const { page = "1", pagesize = "15" } = await searchParams
    const currentPage = Number(page)
    const pageSize = Number(pagesize)
    const totalPages = Math.ceil(await prisma.reviews.count() / pageSize)
    const reviews = await readReviewCards(currentPage, pageSize)

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
        <Pagination currentPage={currentPage} totalPages={totalPages} />
    </>
}