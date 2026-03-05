import type { reviewshort } from "@/types/review"

export default function ReviewList({ items }: { items: reviewshort[] }) {

    const griditems = items.map((rev, index) =>
        <li key={`list-${rev.id}`}
            className={`
                flex 
                justify-between 
                gap-4 
                ${index % 2 === 0 ? 'bg-parch-dark' : 'bg-parch'}`}>

            <span>
                <span className="mx-4">{rev.score}</span>
                <span>{rev.titel}</span>
            </span>
            <p>{rev.category.category_name}</p>
        </li>
    )
    return griditems
}