export default function ReviewCard() {

    return <li key="" className="
                        max-w-160
                        border
                        rounded-xl
                        flex
                        border-accent
                        overflow-hidden 
                        bg-parch
                        duration-300
                        ease-in-out
                        group 
                        hover:shadow-lg 
                      hover:bg-parch-dark
                      hover:border-accent-light">
        <img src="images/placeholder.png" className="
                        w-100
                        sm:w-75
                        md:w-50
                        aspect-square
                        object-cover
                        object-center
                        overflow-hidden
                        transition-transform
                        duration-300
                        group-hover:scale-110" />
        <div className="px-4 py-1">
            <div className="
                        w-full 
                        flex 
                        justify-between 
                        items-center">
                <span className="
                            px-2
                            font-mono
                            text-xs 
                            text-ink 
                            bg-accent-light 
                            rounded-xl">
                    CATEGORY
                </span>
                <span className="">
                    SCORE
                </span>
            </div>
            <h2 className="
                        font-heading 
                        text-4xl">
                Title
            </h2>
            <p className="
                        font-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium obcaecati deleniti asperiores cupiditate.
            </p>
            <span className="
                        px-2 
                        py-0.5
                        flex
                        justify-end
                        font-mono 
                        text-xs 
                        text-muted">
                DATE
            </span>
        </div>
    </li>
}