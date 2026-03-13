import { prisma } from "../../lib/db/prismaclient"
import { readReviewCards, fetchCategories } from "@/lib/db/read"
import { ReviewGridArchive } from "@/components/feature/reviewgrid";
import ReviewList from "@/components/feature/reviewlist";
import Pagination from "@/components/feature/pageination";
import SearchBar from "@/components/feature/searchbar";

export default async function archivepage({ searchParams }: {
    searchParams: Promise<{
        page?: string;
        pagesize?: string;
        search?: string,
        categories?: string,
        sortby?: string,
        sortdirection?: string
    }>
}) {
    const {
        page = "1",
        pagesize = "16",
        search: searchString = "",
        categories,
        sortby = "Date",
        sortdirection = "Descending",
    } = await searchParams

    const currentPage = Number(page)
    const pageSize = Number(pagesize)
    const categoriesArray = categories?.split(",").filter(c => c !== "") ?? []
    const sortBy = sortby
    const sortDirection = sortdirection
    const totalPages = Math.ceil(await prisma.reviews.count() / pageSize) /* MOVE Counts regardless of searchcriteria*/
    const reviews = await readReviewCards(currentPage, pageSize, searchString, categoriesArray, sortBy, sortDirection)
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
        <div className="flex justify-center">
            <SearchBar
                searchParams={await searchParams}
                categories={categoriesAll} />
        </div>
        <ReviewGridArchive>
            <ReviewList items={reviews} />
        </ReviewGridArchive>
        <Pagination currentPage={currentPage}
            totalPages={totalPages}
            searchParams={await searchParams} />
    </>
}