export default function HeroGrid() {
    return <section>
        <div className="
                mx-auto 
                my-8 
                w-11/12
                max-w-87
                aspect-2/3
                sm:aspect-square
                sm:max-w-100
                md:aspect-2/1
                md:max-w-10/12
                grid 
                grid-cols-2
                grid-rows-3
                sm:grid-cols-3
                sm:grid-rows-3
                md:grid-cols-8
                md:grid-rows-4
                bg-parch-dark 
                text-ink
                rounded-xl 
                md:rounded-2xl
                overflow-hidden
                [&>img]:w-full
                [&>img]:h-full
                [&>img]:object-cover
                [&>img]:object-center
                [&>img]:transition-transform
                [&>img]:duration-500
                [&>img]:hover:scale-105
                [&>img]:overflow-hidden
        ">
            <img src="images/coffee.jpg"
                className="        
                    col-span-2 row-span-2 
                    sm:col-span-2 sm:row-span-2 
                    md:col-span-4 md:row-span-4" />
            <img src="images/dinner.jpg"
                className="
                    col-span-1 row-span-1 
                    sm:col-span-1 sm:row-span-1 
                    md:col-span-1 md:row-span-2" />
            <img src="images/lunch.jpg"
                className="
                    col-span-1 row-span-1 
                    sm:col-span-1 sm:row-span-1 
                    md:col-span-2 md:row-span-2" />
            <img src="images/woodenboar.jpg"
                className="
                    hidden 
                    sm:block sm:col-span-1 sm:row-span-1 
                    md:col-span-1 md:row-span-2" />
            <img src="images/rainbow.jpg"
                className="
                    hidden 
                    sm:block sm:col-span-1 sm:row-span-1 
                    md:col-span-2 md:row-span-2" />
            <img src="images/chichen_itza.jpg"
                className="
                    hidden 
                    sm:block sm:col-span-1 sm:row-span-1 
                    md:col-span-2 md:row-span-2" />
        </div>
    </section>
}