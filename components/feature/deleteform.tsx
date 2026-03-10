"use client"
import { softDeleteReviewDb } from "@/lib/reviewCRUD"
import { useRouter } from "next/navigation"
import { useTransition } from "react"

export default function DeleteForm({ reviewId, children }: { reviewId: string, children: React.ReactNode }) {
    const router = useRouter()
    const [isPending, startTransition] = useTransition()

    const handleDelete = () => {
        startTransition(async () => {
            await softDeleteReviewDb(reviewId)
            router.back()
        })
    }

    return (
        <div className="
            flex 
            flex-col
            bg-red-800
            rounded-2xl
            py-2">
            <h1 className="font-semibold text-4xl text-parch self-center">Do you want to delete this review?</h1>
            {children}
            <div className="flex justify-around">
                <button type="button"
                    onClick={() => router.back()}
                    className="
                        p-2 
                        text-parch 
                        border
                         border-parch 
                         rounded-2xl 
                         hover:font-semibold
                         ">
                    wtf..NO!!!
                </button>
                <button type="button"
                    onClick={handleDelete}
                    disabled={isPending}
                    className="
                        p-2 
                        text-parch 
                        border
                         border-parch 
                         rounded-2xl 
                         hover:font-semibold
                         ">
                    {isPending ? "Deleting..." : "I know what I'm doing"}
                </button>
            </div>
        </div>
    )
}