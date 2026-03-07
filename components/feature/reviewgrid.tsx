
export default function ReviewGrid({ children }: { children: any }) {

    return <section className="my-8 mx-4">
        <ul className="
                    grid 
                    justify-center">

            {children}
        </ul>
    </section>
}

export function ReviewGridArchive({ children }: { children: any }) {

    return <section className="my-8 mx-4">
        <ul className="
                    w-9/10
                    max-w-210
                    mx-auto
                    grid
                    grid-cols-1
                    justify-items-center">
            <li key={`list-header`}
                className="
                py-0.5
                w-6/8
                max-w-210
                mx-auto
                bg-ink-light
                text-parch
                even:bg-parch-dark">
                <div className="
                flex 
                justify-between 
                gap-4 ">
                    <span>
                        <span className="mx-1">
                            Poäng
                        </span>
                        <span>
                            Titel
                        </span>
                    </span>
                    <p className="mx-1">Kategori</p>
                </div>
            </li>
            {children}
        </ul>
    </section>
}