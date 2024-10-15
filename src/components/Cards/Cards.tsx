import ArtyCard from "./ArtyCard"
import ClassesCard from "./ClassesCard"
import CoopCard from "./CoopCard"
import NewsCard from "./NewsCard"

const Cards = () => {
    return (
        <section className="bg-pale-peach min-h-screen flex justify-center items-center">
            <div className="md:grid md:grid-cols-2 flex flex-col gap-5 max-md:py-5 md:p-5 mx-5">
                <ClassesCard />
                <ArtyCard />
                <NewsCard />
                <CoopCard />
            </div>
        </section>
    )
}

export default Cards