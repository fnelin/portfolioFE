import Link from "next/link";

export default function Pagination({ currentPage, totalPages }: { currentPage: number; totalPages: number }) {

    const styleButton = "px-2 py-0.5 border rounded-2xl border-ink/50  text-ink-light "
    const styleActive = "hover:bg-accent hover:text-parch hover:border-ink/25 transition-all duration-300 ease-in"
    const styleDisabled = "opacity-40 cursor-not-allowed"

    /*Checkers for disabling buttons navigating out of bounds*/
    const previousDisabled = currentPage <= 1 ? true : false
    const nextDisabled = currentPage >= totalPages ? true : false

    const previousPage = previousDisabled ? 1 : currentPage - 1
    const nextPage = nextDisabled ? totalPages : currentPage + 1

    return <>

        <div className="
            mt-6
            flex 
            justify-center 
            items-center 
            gap-4">

            <Link
                href={`?page=${previousPage}`}
                aria-disabled={nextDisabled}
                className={`${styleButton} ${currentPage <= 1
                    ? styleDisabled
                    : styleActive}`}
            >
                Föregående
            </Link>

            <span className="text-ink">
                Sida {currentPage} av {totalPages}
            </span>

            <Link
                href={`?page=${nextPage}`}
                aria-disabled={previousDisabled}
                className={`${styleButton} ${currentPage >= totalPages
                    ? styleDisabled
                    : styleActive}`}
            >
                Nästa
            </Link>
        </div >
        ;
    </>
}