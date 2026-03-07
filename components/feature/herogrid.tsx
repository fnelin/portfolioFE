export default function HeroGrid() {
    /*Change to randomly selected from reviews.*/
    const imageUrls: string[] = [
        "images/coffee.jpg",
        "images/dinner.jpg",
        "images/lunch.jpg",
        "images/woodenboar.jpg",
        "images/rainbow.jpg",
        "images/chichen_itza.jpg"
    ]

    return <section className="relative">
        <div className="
                aspect-2/3
                sm:aspect-square
                md:aspect-2/1
                grid 
                grid-cols-2
                grid-rows-3
                sm:grid-cols-3
                sm:grid-rows-3
                md:grid-cols-8
                md:grid-rows-4
                bg-parch-dark 
                text-ink
                [&>img]:w-full
                [&>img]:h-full
                [&>img]:object-cover
                [&>img]:object-center
                [&>img]:overflow-hidden ">

            <img src={imageUrls[0]} alt=""
                className="        
                    col-span-2 row-span-2 
                    sm:col-span-2 sm:row-span-2 
                    md:col-span-4 md:row-span-4" />
            <img src={imageUrls[1]} alt=""
                className="
                    col-span-1 row-span-1 
                    sm:col-span-1 sm:row-span-1 
                    md:col-span-1 md:row-span-2" />
            <img src={imageUrls[2]} alt=""
                className="
                    col-span-1 row-span-1 
                    sm:col-span-1 sm:row-span-1 
                    md:col-span-2 md:row-span-2" />
            <img src={imageUrls[3]} alt=""
                className="
                    hidden 
                    sm:block sm:col-span-1 sm:row-span-1 
                    md:col-span-1 md:row-span-2" />
            <img src={imageUrls[4]} alt=""
                className="
                    hidden 
                    sm:block sm:col-span-1 sm:row-span-1 
                    md:col-span-2 md:row-span-2" />
            <img src={imageUrls[5]} alt=""
                className="
                    hidden 
                    sm:block sm:col-span-1 sm:row-span-1 
                    md:col-span-2 md:row-span-2" />
        </div>
        <div className="
                    absolute 
                    inset-0 
                    flex 
                    flex-col 
                    items-center 
                    sm:justify-center
                    bg-ink/20 ">
            <h1 className="
                    relative
                    font-heading
                    top-[25%]
                    sm:top-auto
                    text-4xl 
                    md:text-6xl 
                    lg:text-7xl
                  text-parch ">
                Reviews and thoughts
            </h1>
            <p className="
                    relative
                    top-[25%]
                    sm:top-auto
                    mt-4 
                    max-w-xl 
                    md:text-lg
                    text-parch ">
                Because we don't have enough opinions on the internet
            </p>
        </div>
    </section >
}