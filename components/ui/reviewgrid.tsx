
export default function ReviewGrid({ children }: { children: any }) {

    return <section className="my-8 mx-4">
        <ul className="
                    grid 
                    justify-center">

            {children}
        </ul>
    </section>
}