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

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
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
        <form onSubmit={handleSubmit} className="
                                        flex 
                                        flex-col 
                                        gap-4 
                                        p-6 
                                        w-full 
                                        max-w-160">

            <h2 className="font-heading text-2xl text-ink">
                {isEdit ? "Edit review" : "New review"}
            </h2>

            <div className="flex flex-col gap-1">
                <label className={styleLabel}>Title</label>
                <input name="titel"
                    defaultValue={review?.titel}
                    className={styleInput}
                    required />
            </div>

            <div className="flex flex-col gap-1">
                <label className={styleLabel}>Intro</label>
                <textarea name="ingress"
                    defaultValue={review?.ingress}
                    rows={2}
                    className={styleInput}
                    required />
            </div>

            <div className="flex flex-col gap-1">
                <label className={styleLabel}>Text</label>
                <textarea name="body"
                    defaultValue={review?.body}
                    rows={8}
                    className={styleInput}
                    required />
            </div>

            <div className="flex flex-1 justify-between">
                <div className="flex flex-col gap-1 w-1/3">
                    <label className={styleLabel}>Image (URL)</label>
                    <input name="mainmedia"
                        defaultValue={review?.mainmedia}
                        className={styleInput} />
                </div>

                <span className="flex gap-4">
                    <div className="flex flex-col gap-1">
                        <label className={styleLabel}>Category</label>
                        <div className="flex gap-4">
                            <select name="category_id"
                                defaultValue={review?.category_id}
                                className={styleInput}
                                required>
                                {categories.map(cat => (
                                    <option key={cat.id}
                                        value={cat.id}>
                                        {cat.category_name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className={styleLabel}>New cat.</label>
                        <button
                            type="button"
                            onClick={() => setShowCategoryPopup(true)}
                            className="px-3 py-1.5 border border-ink/20 rounded-lg font-mono text-sm text-muted hover:text-accent hover:border-accent transition-colors duration-200"
                        >
                            +
                        </button>
                    </div>
                </span>

            </div>

            <span className="flex gap-8 justify-between">
                <div className="flex flex-col gap-1 w-16">
                    <label className={styleLabel}>Score</label>
                    <input name="score"
                        type="number"
                        min={1} max={10}
                        defaultValue={review?.score || 5}
                        className={`${styleInput} text-center`}
                        required />
                </div>

                <div className="flex flex-col gap-1 w-1/2">
                    <label className={styleLabel}>Source</label>
                    <input name="original_review"
                        defaultValue={review?.original_review}
                        className={styleInput} />
                </div>
            </span>

            <div className="flex items-center gap-2">
                <input type="checkbox" name="published" value="true" defaultChecked={review?.published ?? false} className="accent-accent" />
                <label className={styleLabel}>Publish</label>
            </div>
            <span className="flex gap-8 justify-between">
                <button type="reset"
                    onClick={() => router.back()}
                    className="
                        mt-2 
                        px-4 
                        py-2
                        border
                        border-ink/20
                        rounded-lg
                        cursor-pointer
                        hover:border
                        hover:border-ink/60
                        ">
                    Don`t save
                </button>
                <button type="reset"
                    disabled={isPending}
                    className="
                        mt-2 
                        px-4 
                        py-2
                        border
                        border-ink/20
                        rounded-lg
                        cursor-pointer
                        hover:border
                        hover:border-ink/60
                        ">
                    Reset form
                </button>
                <button
                    type="submit"
                    disabled={isPending}
                    className="
                        mt-2 
                        px-4 
                        py-2 
                        bg-accent 
                        text-parch 
                        font-mono 
                        text-sm 
                        rounded-lg 
                        cursor-pointer
                        hover:bg-accent-light 
                        transition-colors 
                        duration-200">
                    {isPending ? "Saving..." : isEdit ? "Save changes" : "Save review"}
                </button>

            </span>
            {
                showCategoryPopup && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-ink/30">
                        <div className="bg-parch rounded-xl border border-ink/20 shadow-lg p-6 flex flex-col gap-4 min-w-80">
                            <h3 className="font-heading text-lg text-ink">New category</h3>
                            <div className="flex flex-col gap-1">
                                <label className={styleLabel}>Category label</label>
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
                                    Cancel
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
                                    Add
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }
        </form >
    )
}
