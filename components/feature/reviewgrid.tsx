
export default function ReviewGrid({ children }: { children: any }) {

    return <section className="my-8 mx-4">
        <ul className="
                    md:w-9/10
                    md:max-w-210
                    md:mx-auto
                    grid
                    grid-cols-2
                    sm:grid-cols-1
                    justify-items-center">
            {children}
        </ul>
    </section>
}