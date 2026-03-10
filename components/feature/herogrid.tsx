export default function HeroGrid() {
    /*Change to randomly selected from reviews.*/
    const imageUrls: string[] = [
        "images/coffee.jpg",
        "images/ph.jpg",
        "images/lunch.jpg",
        "images/dos_ojos.jpg",
        "images/rainbow.jpg",
        "images/chichen_itza.jpg",
        "images/shellfishlunch.jpg",
        "images/diverselfie.png",
        "images/woodenboar.jpg",
        "images/dinner.jpg",
        "images/darkwhaleshark.jpg"
    ]

    return <section className="relative">
        <div className="
                aspect-2/3
                sm:aspect-square
                md:aspect-2/1
                grid 
                grid-cols-2
                grid-rows-3
                sm:grid-cols-6
                sm:grid-rows-6
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
                sm:col-span-4 sm:row-span-4" />
            <img src={imageUrls[1]} alt=""
                className="
                sm:col-span-2 sm:row-span-2
                md:col-span-1 md:row-span-1" />
            <img src={imageUrls[2]} alt=""
                className="
                sm:col-span-2 sm:row-span-2
                md:col-span-1 md:row-span-1" />
            <img src={imageUrls[3]} alt=""
                className="
                hidden 
                sm:block
                sm:col-span-2 sm:row-span-2" />
            <img src={imageUrls[4]} alt=""
                className="
                hidden 
                sm:block
                sm:col-span-2 sm:row-span-2
                md:col-span-1 md:row-span-1"/>
            <img src={imageUrls[5]} alt=""
                className="
                hidden 
                sm:block"/>
            <img src={imageUrls[6]}
                className="
                 hidden
                 sm:block
                 md:col-span-2 md:row-span-2"/>
            <img src={imageUrls[7]}
                className="
                 hidden
                 sm:block
                 "/>
            <img src={imageUrls[8]}
                className="
                 hidden
                 sm:block"/>
            <img src={imageUrls[9]}
                className="
                 hidden
                 md:block"/>
            <img src={imageUrls[10]}
                className="
                 hidden
                 md:block"/>
        </div>
        <div className="
                    absolute 
                    inset-0 
                    flex 
                    flex-col 
                    items-center 
                    sm:justify-center">
            <h1 className="
            px-4
                    relative
                    font-heading
                    top-[25%]
                    sm:top-auto
                    text-4xl 
                    sm:text-5xl 
                    md:text-6xl
                  text-parch 
                  bg-muted/60
                    rounded-4xl">
                Reviews and thoughts
            </h1>
            <p className="
                    px-2
                    relative
                    top-[25%]
                    sm:top-auto
                    mt-4 
                    sm:text-lg
                    text-parch
                    bg-muted/60
                    rounded-2xl">
                Because we don't have enough opinions on the internet
            </p>
        </div>
    </section >
}