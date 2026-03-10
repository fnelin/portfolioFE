"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { buildHref } from "@/lib/buildhref"
import { styleButton, styleActive } from "@/lib/constants"

type Category = { id: string; category_name: string }

export default function SearchBar({
    searchParams,
    categories,
    pageSizeOptions = [8, 16, 32],
    sortByOptions = ["Date", "Score", "Title"],
    sortDirectionOptions = ["Ascending", "Descending"]
}: {
    searchParams: Record<string, string>
    categories: Category[]
    pageSizeOptions?: number[]
    sortByOptions?: string[]
    sortDirectionOptions?: string[]
}) {
    const router = useRouter()

    const [search, setSearch] = useState(searchParams.search ?? "")
    const [pageSize, setPageSize] = useState(searchParams.pagesize ?? "16")
    const [sortBy, setSortBy] = useState(searchParams.sortby ?? "Date")
    const [sortDirection, setSortDirection] = useState(searchParams.sortdirection ?? "Descending")
    const [selectedCategories, setSelectedCategories] = useState<string[]>(
        searchParams.categories ? searchParams.categories.split(",") : []
    )
    const styleBtn = styleButton + " " + styleActive
    const styleInput = "bg-parch border border-ink/20 rounded-lg px-3 py-1.5 font-body text-sm text-ink focus:outline-none focus:border-accent transition-colors duration-200"
    const styleLabel = "font-mono text-xs text-muted uppercase tracking-widest"
    const toggleCategory = (id: string) => {
        setSelectedCategories(prev =>
            prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
        )
    }

    const handleSubmit = () => {
        const overrides: Record<string, string> = {
            page: "1",
            search,
            pagesize: pageSize,
            sortby: sortBy,
            sortdirection: sortDirection,
            categories: selectedCategories.join(",")
        }
        router.push(buildHref(searchParams, overrides))
    }

    return (
        <section className="grid w-3/4 place-self-center">
            <div className="
                    -mt-3 
                    p-4 
                    bg-parch-dark 
                    rounded-xl 
                    border 
                    border-ink/10
                    shadow">
                <div className="pb-2">
                    {/* Text search */}
                    <div className="flex flex-col gap-1 flex-1 min-w-50">
                        <label className={styleLabel}>
                            Search
                        </label >
                        <input
                            type="text"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            onKeyDown={e => e.key === "Enter" && handleSubmit()}
                            placeholder="Title or content..."
                            className={styleInput}
                        />
                    </div >
                </div >
                <div className="flex flex-wrap gap-4 items-end">
                    <div
                        className="
                            mt-1 
                            p-2 
                            bg-parch 
                            border 
                            border-ink/20 
                            rounded-lg 
                            flex 
                            flex-wrap 
                            justify-evenly 
                            gap-2 
                            min-w-37.5
                            w-full">
                        {categories.map(cat => (
                            <button
                                type="button"
                                key={cat.id}
                                onClick={() => toggleCategory(cat.id)}
                                className={`font-mono text-xs px-3 py-1 rounded-full transition-colors duration-200
                                        ${selectedCategories.includes(cat.id)
                                        ? 'bg-accent text-parch border'
                                        : 'bg-parch text-ink-light border hover:text-accent'
                                    }`}
                            >
                                {cat.category_name}
                            </button>
                        ))}
                    </div>
                    <div className="flex justify-between w-full px-4">
                        {/* Page size */}
                        <div className="flex flex-col gap-1">
                            <label className={styleLabel}>
                                Items:
                            </label>
                            <select
                                value={pageSize}
                                onChange={e => setPageSize(e.target.value)}
                                className={styleInput}
                            >
                                {pageSizeOptions.map(size => (
                                    <option key={size} value={size}>{size} per page</option>
                                ))}
                            </select>
                        </div>
                        {/* Sort by */}
                        <div className="flex flex-col gap-1">
                            <label className={styleLabel}>
                                Sort by:
                            </label>
                            <select
                                value={sortBy}
                                onChange={e => setSortBy(e.target.value)}
                                className={styleInput}>
                                {sortByOptions.map(by => (
                                    <option key={by} value={by}>{by}</option>
                                ))}
                            </select>
                        </div>
                        {/* Sort direction */}
                        <div className="flex flex-col gap-1">
                            <label className={styleLabel}>
                                Direction:
                            </label>
                            <select
                                value={sortDirection}
                                onChange={e => setSortDirection(e.target.value)}
                                className={styleInput}>
                                {sortDirectionOptions.map(dir => (
                                    <option key={dir} value={dir}>{dir}</option>
                                ))}
                            </select>
                        </div>
                        {/* Submit */}
                        <span
                            onClick={handleSubmit}
                            className={styleBtn}>
                            Search
                        </span >
                    </div >
                </div >
            </div >
        </section >
    )
}