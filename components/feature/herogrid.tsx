export default function HeroGrid() {
    return <div className="
        mx-auto 
        my-8 
        w-11/12
        max-w-6xl
        h-72
        grid 
        grid-cols-2
        sm:grid-cols-3
        md:grid-cols-6
        bg-parch-dark 
        text-ink
        rounded-xl 
        md:rounded-2xl
        overflow-hidden
        ">
        <p className="bg-white col-span-2 row-span-2">Ett</p>
        <p className="bg-blue-700 sm:col-span-1">Två</p>
        <p className="bg-red-700 md:col-span-2">Tre</p>
        <p className="bg-lime-700 sm:col-span-1 hidden sm:block">Fyra</p>
        <p className="bg-amber-400 md:col-span-2 hidden sm:block">Fem</p>
        <p className="bg-amber-900 md:col-span-2 hidden sm:block">Sex</p>
    </div>

}