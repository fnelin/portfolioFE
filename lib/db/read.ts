import { prisma } from "./prismaclient"

export async function readReviewCards( currentPage:number, itemsPerPage: number, searchString:string, categories: string[] = []){

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
        where: {
            AND: [
                ...(searchString.length > 0 ? [{
                    OR: [
                        { titel: { contains: searchString } },
                        { body: { contains: searchString } }
                    ]
                }] : []),
                ...(categories.length > 0 ? [{ category_id: { in: categories } }] : [])
            ]
        },
        orderBy: {
            createdAt: "desc",
            },
        skip: (currentPage - 1) * itemsPerPage,
        take: itemsPerPage,
        }
    )
return reviews;
}

export async function readOneReview( id:string){
    const reviewId=id;
    /* REMOVE BEFORE PROD */
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    const reviews = await prisma.reviews.findUnique({
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
        }
        }
    )
return reviews;
}

export async function fetchCategories(){
    
    const categories= await prisma.category.findMany({
        select:{
            id:true,
            category_name:true,},
            orderBy: {
                category_name:"asc",
            },
        }
    )

return categories

}