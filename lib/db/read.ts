import { prisma } from "./prismaclient"

export async function readReviewCards( currentPage:number, itemsPerPage: number ){

    const reviews = await prisma.reviews.findMany({
        select: {
            id: true,
            titel: true,
            ingress: true,
            score: true,
            mainmedia:true,
            category:{
                select: {category_name:true,}
            },
            createdAt: true,
            updatedAt:true
        },
        orderBy: {
            createdAt: "desc",
            }
        }
    )
return reviews;
}

export async function readOneReview( id:string){
    const reviewId=id;
    const reviews = await prisma.reviews.findMany({
        select: {
            id: true,
            titel: true,
            ingress: true,
            body: true,
            score: true,
            mainmedia:true,
            category:{
                select: {category_name:true,}
            },
            original_review:true,
            createdAt: true,
            updatedAt: true,
        },
        where:{
            id:reviewId
        },
        orderBy: {
            createdAt: "desc",
            }
        }
    )
return reviews;
}