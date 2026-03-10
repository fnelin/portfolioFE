import "dotenv/config"
import { readFileSync } from "fs"
import { join } from "path"
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3"
import { PrismaClient } from "../app/generated/prisma/client"

const connectionString = `${process.env.DATABASE_URL}`
const adapter = new PrismaBetterSqlite3({ url: connectionString })
const prisma = new PrismaClient({ adapter })

function extractIngress(text: string): string {
    if (!text) return ""
    const firstNewline = text.indexOf("\n")
    const firstPeriod = text.indexOf(".")
    
    if (firstNewline === -1 && firstPeriod === -1) return text.substring(0, 150)
    if (firstNewline === -1) return text.substring(0, firstPeriod + 1)
    if (firstPeriod === -1) return text.substring(0, firstNewline)
    
    const cutoff = Math.min(firstNewline, firstPeriod)
    return text.substring(0, cutoff + 1)
}

async function main() {
    console.log("Starting seed...")

    const defaultCategory = await prisma.category.upsert({
        where: { id: "imported-review" },
        update: {},
        create: {
            id: "imported-review",
            category_name: "Imported Review"
        }
    })

    console.log(`Using category: ${defaultCategory.category_name}`)

    const filePath = join(process.cwd(), "prisma", "seed.json")
    const geojson = JSON.parse(readFileSync(filePath, "utf-8"))

    const features = geojson.features as any[]
    console.log(`Found ${features.length} reviews to import`)

    let imported = 0
    let skipped = 0

    for (const feature of features) {
        const props = feature.properties
        const reviewText = props.review_text_published ?? ""
        const title = props.location?.name ?? "Untitled"

        if (!reviewText) {
            skipped++
            continue
        }

        try {
            await prisma.reviews.create({
                data: {
                    titel: title,
                    ingress: extractIngress(reviewText),
                    body: reviewText,
                    score: (props.five_star_rating_published ?? 3) * 2,
                    mainmedia: "/images/placeholder.svg",
                    original_review: props.google_maps_url ?? "",
                    category_id: defaultCategory.id,
                    published: true,
                    createdAt: new Date(props.date),
                }
            })
            imported++
            if (imported % 100 === 0) console.log(`Imported ${imported}...`)
        } catch (e) {
            console.error(`Failed to import: ${title}`, e)
            skipped++
        }
    }

    console.log(`Done. Imported: ${imported}, Skipped: ${skipped}`)
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect())