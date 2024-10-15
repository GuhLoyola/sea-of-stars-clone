import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"

const DlcTrailer = () => {
    const containerRef = useRef(null)

    const isInView = useInView(containerRef, { once: true })
    const mainControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start('visible')
        }
    }, [isInView])


    return (
        <section ref={containerRef} className="bg-dark-midnight-blue min-h-screen flex justify-center items-center">
            <motion.div
                initial='hidden'
                animate={mainControls}
                variants={{
                    hidden: { opacity: 0, y: 100 },
                    visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >
                <iframe width="560" height="315" src="https://www.youtube.com/embed/yBnJv-rQjMM?si=BSeBLulG_xtDEyXo" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen
                    className="border-medium-aquamarine border-2 rounded-md w-[300px] md:w-[600px]
                h-[180px] md:h-[420px]"></iframe>
            </motion.div>
        </section>
    )
}

export default DlcTrailer