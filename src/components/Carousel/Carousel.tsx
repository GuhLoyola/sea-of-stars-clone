import { useState } from "react"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6"
import { motion, AnimatePresence } from "framer-motion"

interface CarouselProps {
    slides: string[]
}

const imageVariants = {
    initial: (direction: number) => {
        return {
            x: direction > 0 ? 200 : -200,
            opacity: 0
        }
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
        }
    },
    exit: (direction: number) => {
        return {
            x: direction > 0 ? -200 : 200,
            opacity: 0,
            transition: {
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
            }
        }
    }
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {

    const [index, setIndex] = useState(0)
    const [direction, setDirection] = useState(0)


    const nextImage = () => {
        setDirection(1)
        if (index === slides.length - 1) {
            setIndex(0)
            return
        }

        setIndex(index + 1)
    }

    const prevImage = () => {
        setDirection(-1)
        if (index === 0) {
            setIndex(slides.length - 1)
            return
        }

        setIndex(index - 1)
    }

    return (
        <div>
            <div className="md:w-[40vw] w-[100vw] max-md:rounded-tr-lg max-md:rounded-tl-lg aspect-video relative overflow-hidden">
                <AnimatePresence initial={false} custom={direction}>
                    <motion.img
                        variants={imageVariants}
                        initial='initial'
                        animate='animate'
                        exit='exit'
                        src={slides[index]}
                        key={slides[index]}
                        custom={direction}
                        alt="slide image"
                        className="absolute top-0 left-0 w-full h-full object-cover object-center"
                    />
                </AnimatePresence>

                <button className='text-lg w-10 aspect-square rounded-full cursor-pointer text-center text-off-white bg-dark-teal hover:bg-azure-blue absolute top-1/2 left-2 -translate-y-1/2 duration-300' onClick={prevImage}>
                    <FaArrowLeft className='w-full' />
                </button>

                <button className='text-lg w-10 aspect-square rounded-full cursor-pointer text-center text-off-white bg-dark-teal hover:bg-azure-blue absolute top-1/2 right-2 -translate-y-1/2 duration-300' onClick={nextImage}>
                    <FaArrowRight className='w-full' />
                </button>
            </div>
        </div>
    )
}

export default Carousel