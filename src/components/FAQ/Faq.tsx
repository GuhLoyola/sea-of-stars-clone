import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"
import Question1 from "./Questions/question1"
import Question2 from "./Questions/question2"
import Question3 from "./Questions/question3"
import Question4 from "./Questions/question4"
import Question5 from "./Questions/question5"
import Question6 from "./Questions/question6"

// As 'keys' dizem ao React qual item cada componente responde

const questions = [
    <Question1 key={1} />,
    <Question2 key={2} />,
    <Question3 key={3} />,
    <Question4 key={4} />,
    <Question5 key={5} />,
    <Question6 key={6} />,
]

const fadeInAnimationVariants = {
    initial: { opacity: 0, y: 100 },
    animate: (index: number) => {
        return {
            opacity: 1,
            y: 0,
            transition: { delay: 0.1 * index }
        }
    }
}

const FaqSection = () => {

    const containerRef = useRef(null)

    const isInView = useInView(containerRef, { once: true })
    const mainControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start('visible')
        }
    }, [isInView])

    return (
        <section ref={containerRef} className='bg-pale-peach min-h-screen flex flex-col px-10 py-20 justify-center items-center'>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 100 },
                    visible: { opacity: 1, y: 0 }
                }}
                initial='hidden'
                animate={mainControls}
                transition={{ delay: 0.05, duration: 0.5 }}
            >
                <div className="text-center mb-10 mx-auto max-w-[900px]">
                    <h1 className="font-orpheus-pro text-dark-grayish-brown text-4xl">Perguntas e Respostas</h1>
                    <p className="text-dark-charcoal font-poppins leading-relaxed">
                        Se sua pergunta ainda não foi respondida no FAQ, sinta se livre para nos enviar um email através de <a className="font-bold underline" href="mailto:info@sabotagestudio.com" target="_blank">info@sabotagestudio.com</a> ou perguntar ao time em
                        nosso <a href="https://discord.gg/sabotagestudio" target="_blank" className="font-bold underline">Discord</a>.
                    </p>
                </div>
                <ul className="flex gap-5 flex-wrap justify-center items-center">

                    {
                        questions.map((component, index) => (
                            <motion.li
                                key={index}
                                variants={fadeInAnimationVariants}
                                initial='initial'
                                whileInView='animate'
                                viewport={{ once: true }}
                                custom={index}
                                className="bg-off-white rounded-lg px-5 py-10 shadow-md md:max-w-[25vw] leading-[1.7] font-poppins"
                            >
                                {component}
                            </motion.li>
                        ))
                    }



                </ul>
            </motion.div>
        </section>
    )
}

export default FaqSection