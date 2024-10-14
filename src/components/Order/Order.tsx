import { motion, useAnimation, useInView } from 'framer-motion'
import orderGame from '../../assets/images/orderGame.webp'
import { useEffect, useRef } from 'react'



const Order = () => {

    const containerRef = useRef(null)

    const isInView = useInView(containerRef, { once: true })
    const mainControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start('visible')
        }
    }, [isInView])


    return (
        <section ref={containerRef} className='bg-pale-peach min-h-screen flex flex-col justify-center items-center'>
            <motion.div
                initial='hidden'
                animate={mainControls}
                variants={{
                    hidden: { opacity: 0, y: 100 },
                    visible: { opacity: 1, y: 0 }
                }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className='z-[1]'
            >
                <h2 className='text-4xl text-center mt-10 mx-5 lg:mx-0 lg:mt-0 font-orpheus-pro text-dark-grayish-brown'>Uma Jornada Épica Através de Mundos Encantados</h2>
                <div className='flex flex-col lg:flex-row items-center my-12 lg:mx-10 gap-5 md:gap-10 px-5'>
                    <img src={orderGame} alt="physical edition image" className='md:max-w-[500px] max-w-56' />
                    <div className='p-4 leading-relaxed font-poppins'>
                        <p className='md:text-justify text-center text-xs md:text-base mb-10'>Embarque nessa aventura épica em Sea of Stars, um jogo de RPG inspirado nos clássicos que combina uma narrativa envolvente, personagens cativantes e batalhas estratégicas. Explore um mundo vasto e vibrante, onde a magia e a mitologia se encontram, enfrentando inimigos desafiadores e desvendando mistérios antigos. Junte-se aos protagonistas enquanto eles lutam para salvar seu mundo, utilizando poderosas habilidades elementares e resolvendo quebra-cabeças que testarão sua inteligência. Prepare-se para uma jornada inesquecível, cheia de surpresas e emoção, onde cada escolha pode mudar o destino da história!</p>

                        <a href="https://seaofstars.iam8bit.com/us/" target='_blank' className='p-4 border-2 border-pale-beige text-dark-charcoal uppercase font-bold hover:bg-pale-beige duration-300 md:inline inline-block w-full text-center'>
                            Comprar jogo
                        </a>
                    </div>
                </div>
            </motion.div>

        </section>
    )
}

export default Order