"use server"
import { prisma } from "@/lib/db/prismaclient"


export async function writeReview(formData: FormData) {
    await prisma.reviews.create({
        data: {
            titel: formData.get("titel") as string,
            ingress: formData.get("ingress") as string,
            body: formData.get("body") as string,
            score: Number(formData.get("score")),
            mainmedia: formData.get("mainmedia") as string,
            original_review: formData.get("original_review") as string,
            category_id: formData.get("category_id") as string,
            published: formData.get("published") === "true",
        }
    })
}

export async function createCategory(name: string) {
    return await prisma.category.create({
        data: { category_name: name }
    })
}