
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

export function ReviewGridArchive({ children }: { children: any }) {

    const styleHeader = "px-2 py-1"

    return <section className="my-8">
        <table className="mx-auto table-fixed">
            <caption className="text-muted">
                Sökresultat
            </caption>
            <thead className="">
                <tr key={`list-header`}
                    className="
                    bg-ink-light
                    text-parch">
                    <th align="left" className={styleHeader}>
                        Betyg
                    </th><th align="left" className={styleHeader}>
                        Titel
                    </th><th align="left" className={styleHeader}>
                        Kategori
                    </th><th align="left" className={styleHeader}>
                        Ändra
                    </th><th align="left" className={styleHeader}>
                        Delete
                    </th>
                </tr>
            </thead>
            <tbody>
                {children}
            </tbody>
        </table>
    </section >
}