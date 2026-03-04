import HeroGrid from "@/components/feature/herogrid"

export default function Hero() {
    return <>
        <div className="flex flex-col items-center mx-4 my-12 text-center">
            <h1 className="text-3xl font-heading ">Reviews and thoughts</h1>
            <p>Because we don't have enough opinions on the internet</p>
        </div>
        <HeroGrid />
    </>
}