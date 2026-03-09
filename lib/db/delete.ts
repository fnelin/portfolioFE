"use server"
import { prisma } from "@/lib/db/prismaclient"

export async function softDeleteReview(id: string) {
    await prisma.reviews.update({
        where: { id },
        data: { createdAt: new Date("3000-01-01") }
    })
}