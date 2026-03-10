"use server"
import { prisma } from "@/lib/db/prismaclient"

export async function softDeleteReview(id: string) {
    await prisma.reviews.update({
        where: { id },
        data: { published: false }
    })
}