"use client"
import { useState, useTransition } from "react"
import { useRouter } from "next/navigation"
import { writeReviewDb, updateReviewDb, createCategoryDb } from "@/lib/reviewCRUD"
import type { Review, Category } from "@/types/review"


const styleInput = "w-full bg-parch border border-ink/20 rounded-lg px-3 py-1.5 font-body text-sm text-ink focus:outline-none focus:border-accent transition-colors duration-200"
const styleLabel = "font-mono text-xs text-muted uppercase tracking-widest"

export default function ReviewForm({ review, categories }: { review?: Review, categories: Category[] }) {
    const router = useRouter()
    const [isPending, startTransition] = useTransition()
    const isEdit = !!review

    const handleSubmit = (formData: FormData) => {
        startTransition(async () => {
            await action(formData)
            router.back()
        })
    }

    const action = isEdit
        ? updateReviewDb.bind(null, review.id)
        : writeReviewDb

    const [showCategoryPopup, setShowCategoryPopup] = useState(false)
    const [newCategory, setNewCategory] = useState("")
    const [categoryList, setCategoryList] = useState(categories)



    return (
        <form action={handleSubmit} className="flex flex-col gap-4 p-6 w-full max-w-160">

            <h2 className="font-heading text-2xl text-ink">
                {isEdit ? "Redigera recension" : "Ny recension"}
            </h2>

            <div className="flex flex-col gap-1">
                <label className={styleLabel}>Titel</label>
                <input name="titel" defaultValue={review?.titel} className={styleInput} required />
            </div>

            <div className="flex flex-col gap-1">
                <label className={styleLabel}>Ingress</label>
                <textarea name="ingress" defaultValue={review?.ingress} rows={2} className={styleInput} required />
            </div>

            <div className="flex flex-col gap-1">
                <label className={styleLabel}>Brödtext</label>
                <textarea name="body" defaultValue={review?.body} rows={8} className={styleInput} required />
            </div>

            <div className="flex flex-col gap-1">
                <label className={styleLabel}>Originalrecension (källa)</label>
                <input name="original_review" defaultValue={review?.original_review} className={styleInput} />
            </div>


            <div className="flex flex-col gap-1 flex-1">
                <label className={styleLabel}>Kategori</label>
                <div className="flex gap-4">
                    <select name="category_id" defaultValue={review?.category_id} className={styleInput} required>
                        {categories.map(cat => (
                            <option key={cat.id} value={cat.id}>{cat.category_name}</option>
                        ))}
                    </select>
                    <button
                        type="button"
                        onClick={() => setShowCategoryPopup(true)}
                        className="px-3 py-1.5 border border-ink/20 rounded-lg font-mono text-sm text-muted hover:text-accent hover:border-accent transition-colors duration-200"
                    >
                        +
                    </button>
                </div>
            </div>

            <div className="flex flex-col gap-1 w-24">
                <label className={styleLabel}>Score</label>
                <input name="score" type="number" min={1} max={10} defaultValue={review?.score} className={styleInput} required />
            </div>

            <div className="flex flex-col gap-1">
                <label className={styleLabel}>Bild (URL)</label>
                <input name="mainmedia" defaultValue={review?.mainmedia} className={styleInput} />
            </div>

            <div className="flex items-center gap-2">
                <input type="checkbox" name="published" value="true" defaultChecked={review?.published ?? false} className="accent-accent" />
                <label className={styleLabel}>Publicerad</label>
            </div>

            <button
                type="submit" disabled={isPending}
                className="mt-2 px-4 py-2 bg-accent text-parch font-mono text-sm rounded-lg hover:bg-accent-light transition-colors duration-200"
            >
                {isPending ? "Sparar..." : isEdit ? "Spara ändringar" : "Skapa recension"}
            </button>
            {
                showCategoryPopup && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-ink/30">
                        <div className="bg-parch rounded-xl border border-ink/20 shadow-lg p-6 flex flex-col gap-4 min-w-80">
                            <h3 className="font-heading text-lg text-ink">Ny kategori</h3>
                            <div className="flex flex-col gap-1">
                                <label className={styleLabel}>Kategorinamn</label>
                                <input
                                    type="text"
                                    value={newCategory}
                                    onChange={e => setNewCategory(e.target.value)}
                                    className={styleInput}
                                    autoFocus
                                />
                            </div>
                            <div className="flex gap-2 justify-end">
                                <button
                                    type="button"
                                    onClick={() => setShowCategoryPopup(false)}
                                    className="px-3 py-1.5 border border-ink/20 rounded-lg font-mono text-sm text-muted hover:text-accent transition-colors duration-200"
                                >
                                    Avbryt
                                </button>
                                <button
                                    type="button"
                                    onClick={async () => {
                                        const created = await createCategoryDb(newCategory)
                                        setCategoryList(prev => [...prev, created])
                                        setNewCategory("")
                                        setShowCategoryPopup(false)
                                    }}
                                    className="px-3 py-1.5 bg-accent text-parch font-mono text-sm rounded-lg hover:bg-accent-light transition-colors duration-200"
                                >
                                    Skapa
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }
        </form >
    )
}