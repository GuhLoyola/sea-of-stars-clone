import clones from '../../assets/images/troupe/totw_troupe_clones.png'
import puppeteer from '../../assets/images/troupe/totw_troupe_puppeteer.png'
import pifPouf from '../../assets/images/troupe/totw_troupe_pif_pouf.png'
import tendu from '../../assets/images/troupe/totw_troupe_tendu.png'
import ticket from '../../assets/images/free_ticket_totw.png'
import ticket_mobile from '../../assets/images/free_ticket_mobile.png'
import Carousel from '../Carousel/Carousel'

import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'


const carouselImages = [clones, puppeteer, pifPouf, tendu]

const Troupe = () => {


    const containerRef = useRef(null)

    const isInView = useInView(containerRef, { once: true })
    const mainControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start('visible')
        }
    }, [isInView])

    return (
        <section ref={containerRef} className='bg-dark-midnight-blue min-h-screen flex flex-col justify-center items-center'>
            <motion.div
                initial='hidden'
                animate={mainControls}
                variants={{
                    hidden: { opacity: 0, y: 100 },
                    visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5, delay: 0.5 }}

                className='flex flex-col justify-center items-center'
            >
                <h2 className='font-rye text-3xl mb-10 text-off-white text-center'>Apresentando a trupe vilanesca</h2>
                <Carousel slides={carouselImages} />
                <picture>
                    <source media="(min-width: 768px)" srcSet={ticket} />
                    <source media="(max-width: 767px)" srcSet={ticket_mobile} />
                    <img src={ticket_mobile} alt="Ticket mobile Image" className='mt-10' />
                </picture>
            </motion.div>
        </section>
    )
}

export default Troupe