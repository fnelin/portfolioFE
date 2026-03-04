import ReviewCard from "./reviewcard";

export default function ReviewGrid() {

    return <section className="my-8 mx-4">
        <ul className="
                    grid 
                    gap-2
                    justify-center">

            <ReviewCard />
        </ul>
    </section>
}