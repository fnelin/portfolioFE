"use server"
import { revalidatePath } from "next/cache"
import { writeReview, createCategory } from "@/lib/db/write"
import { updateReview } from "@/lib/db/update"
import { softDeleteReview } from "@/lib/db/delete"

export async function writeReviewDb(formData: FormData){
    await writeReview(formData)
    revalidatePath("/archive")
}

export async function updateReviewDb(id: string, formData: FormData) {
    await updateReview(id, formData)
    revalidatePath("/archive")
}

export async function createCategoryDb(name: string) {
    const category = await createCategory(name)
    revalidatePath("/archive")
    return category
}

export async function softDeleteReviewDb(id:string){
 await softDeleteReview(id)
 revalidatePath("/archive")

}