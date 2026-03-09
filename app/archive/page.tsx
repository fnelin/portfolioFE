import { prisma } from "../../lib/db/prismaclient"
import { readReviewCards, fetchCategories } from "@/lib/db/read"
import { ReviewGridArchive } from "@/components/feature/reviewgrid";
import ReviewList from "@/components/feature/reviewlist";
import Pagination from "@/components/feature/pageination";
import SearchBar from "@/components/feature/searchbar";

export default async function archivepage({ searchParams }: {
    searchParams: Promise<{ page?: string; pagesize?: string; search?: string, categories?: string }>
}) {

    const { page = "1", pagesize = "15", search: searchString = "", categories } = await searchParams
    const currentPage = Number(page)
    const pageSize = Number(pagesize)
    const categoriesArray = categories?.split(",").filter(c => c !== "") ?? []
    const totalPages = Math.ceil(await prisma.reviews.count() / pageSize)
    const reviews = await readReviewCards(currentPage, pageSize, searchString, categoriesArray)
    const categoriesAll = await fetchCategories()

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

        <SearchBar
            searchParams={await searchParams}
            categories={categoriesAll} />

        <ReviewGridArchive>
            <ReviewList items={reviews} />
        </ReviewGridArchive>
        <Pagination currentPage={currentPage}
            totalPages={totalPages}
            searchParams={await searchParams} />
    </>
}