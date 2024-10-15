import { useEffect, useRef } from "react"
import ArtyCard from "./ArtyCard"
import ClassesCard from "./ClassesCard"
import CoopCard from "./CoopCard"
import NewsCard from "./NewsCard"
import { motion, useAnimation, useInView } from "framer-motion"

const Cards = () => {

    const containerRef = useRef(null)

    const isInView = useInView(containerRef, { once: true })
    const mainControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start('visible')
        }
    }, [isInView])

    return (
        <section ref={containerRef} className="bg-pale-peach min-h-screen flex justify-center items-center">
            <motion.div
                initial='hidden'
                animate={mainControls}
                variants={{
                    hidden: { opacity: 0, y: 100 },
                    visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="md:grid md:grid-cols-2 flex flex-col gap-5 max-md:py-5 md:p-5 mx-5"
            >
                <ClassesCard />
                <ArtyCard />
                <NewsCard />
                <CoopCard />
            </motion.div>
        </section>
    )
}

export default Cards