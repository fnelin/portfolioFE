import type { reviewshort } from "@/types/review"
import Link from "next/link"
import { LucideTrash2, LucidePencilLine } from "lucide-react"

export default function ReviewList({ items }: { items: reviewshort[] }) {

    const styleRow = "px-2 py-1"
    const styleRowLink = styleRow + " hover:cursor-pointer hover:text-accent"

    const griditems = items.map((rev, index) =>
        <tr key={`list-${rev.id}`}
            className="
                bg-parch
                even:bg-parch-dark
                ">
            <td className={styleRow} align="right">
                {rev.score}
            </td><td className={styleRowLink}>
                <Link href={`/review/${rev.id}`}>{rev.titel}</Link>
            </td><td className={styleRow}>
                {rev.category.category_name}
            </td><td className={styleRowLink} align="center">
                <Link href={`/admin/review/edit/${rev.id}`}><LucidePencilLine /></Link>
            </td><td className={styleRowLink} align="center">
                <LucideTrash2 />
            </td>
        </tr>
    )
    return griditems
}