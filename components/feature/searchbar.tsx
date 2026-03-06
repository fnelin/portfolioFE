"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { buildHref } from "@/lib/buildhref"

type Category = { id: string; category_name: string }

export default function SearchBar({
    searchParams,
    categories,
    pageSizeOptions = [10, 25, 50]
}: {
    searchParams: Record<string, string>
    categories: Category[]
    pageSizeOptions?: number[]
}) {
    const router = useRouter()

    const [search, setSearch] = useState(searchParams.search ?? "")
    const [pageSize, setPageSize] = useState(searchParams.pagesize ?? "15")
    const [selectedCategories, setSelectedCategories] = useState<string[]>(
        searchParams.categories ? searchParams.categories.split(",") : []
    )
    const styleButton = "px-2 py-0.5 border rounded-2xl border-ink/50  text-ink-light hover:bg-accent hover:text-parch hover:border-ink/25 transition-all duration-300 ease-in cursor-pointer"
    const styleInput = "bg-parch border border-ink/20 rounded-lg px-3 py-1.5 font-body text-sm text-ink focus:outline-none focus:border-accent transition-colors duration-200"
    const [dropdownOpen, setDropdownOpen] = useState(false)

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
            categories: selectedCategories.join(",")
        }
        router.push(buildHref(searchParams, overrides))
    }

    return (
        <section className="grid w-3/4 place-self-center">
            <div className="-mt-3 p-4 bg-parch-dark rounded-xl border border-ink/10">
                <div className="pb-2">

                    {/* Text search */}
                    <div className="flex flex-col gap-1 flex-1 min-w-50">
                        <label className="font-mono text-xs text-muted uppercase tracking-widest">
                            Sök
                        </label>
                        <input
                            type="text"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            onKeyDown={e => e.key === "Enter" && handleSubmit()}
                            placeholder="Titel eller innehåll..."
                            className={styleInput}
                        />
                    </div>
                </div>
                <div className="flex flex-wrap gap-4 items-end">
                    {/* Dropdown trigger */}
                    <div className="relative">
                        <button
                            onClick={() => setDropdownOpen(prev => !prev)}
                            className={styleInput}
                        >
                            Kategori ▾
                        </button>
                        {dropdownOpen && (
                            <div
                                className="absolute z-10 mt-1 bg-parch border border-ink/20 rounded-lg shadow-lg p-2 flex flex-col gap-1 min-w-37.5"
                                onClick={e => e.stopPropagation()}
                            >
                                {categories.map(cat => (
                                    <label key={cat.id} className="flex items-center gap-2 font-mono text-sm text-ink cursor-pointer hover:text-accent">
                                        <input
                                            type="checkbox"
                                            checked={selectedCategories.includes(cat.id)}
                                            onChange={() => toggleCategory(cat.id)}
                                            className="accent-accent"
                                        />
                                        {cat.category_name}
                                    </label>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Page size */}
                    <div className="flex flex-col gap-1">
                        <select
                            value={pageSize}
                            onChange={e => setPageSize(e.target.value)}
                            className={styleInput}
                        >
                            {pageSizeOptions.map(size => (
                                <option key={size} value={size}>{size} per sida</option>
                            ))}
                        </select>
                    </div>

                    {/* Submit */}
                    <span
                        onClick={handleSubmit}
                        className={styleButton}
                    >
                        Sök
                    </span>
                    {/* Selected pills */}
                    <div className="flex flex-wrap gap-1">
                        {selectedCategories.map(id => {
                            const cat = categories.find(c => c.id === id)
                            return (
                                <span key={id} className="flex items-center gap-1 px-2 py-0.5 bg-ink text-parch font-mono text-xs rounded-full">
                                    {cat?.category_name}
                                    <button type="button" onClick={() => toggleCategory(id)}>×</button>
                                </span>
                            )
                        })}
                    </div>
                </div></div>
        </section>
    )
}