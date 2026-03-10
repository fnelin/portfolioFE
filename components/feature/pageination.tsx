import Link from "next/link";
import { buildHref } from "@/lib/buildhref"
import { styleButton, styleActive, styleDisabled } from "@/lib/constants"


export default function Pagination({ currentPage, totalPages, searchParams }: { currentPage: number; totalPages: number; searchParams: Record<string, string> }) {

    const styleBtn = styleButton
    const styleAct = styleActive
    const styleDis = styleDisabled

    /*Checkers for disabling buttons navigating out of bounds*/
    const previousDisabled = currentPage <= 1 ? true : false
    const nextDisabled = currentPage >= totalPages ? true : false

    const previousPage = previousDisabled ? 1 : currentPage - 1
    const nextPage = nextDisabled ? totalPages : currentPage + 1

    return <>

        <div className="
            my-6
            flex 
            justify-center 
            items-center 
            gap-4">

            <Link
                href={buildHref(searchParams, { page: previousPage.toString() })}
                aria-disabled={nextDisabled}
                className={`${styleBtn} ${currentPage <= 1
                    ? styleDis
                    : styleAct}`}
            >
                Previous
            </Link>

            <span className="text-ink">
                Page {currentPage} of {totalPages}
            </span>

            <Link
                href={buildHref(searchParams, { page: nextPage.toString() })}
                aria-disabled={previousDisabled}
                className={`${styleBtn} ${currentPage >= totalPages
                    ? styleDis
                    : styleAct}`}
            >
                Next
            </Link>
        </div >
    </>
}