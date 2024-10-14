import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useAnimation, useInView } from 'framer-motion'

import valereIdle from '../../assets/images/characters/img-valere-idle.png'
import zaleIdle from '../../assets/images/characters/img-zale-idle.png'
import garlIdle from '../../assets/images/characters/img-garl-idle.png'
import reshanIdle from '../../assets/images/characters/img-reshan-idle.png'
import seraiIdle from '../../assets/images/characters/img-serai-idle.png'
import bstIdle from '../../assets/images/characters/img-bst-idle.png'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'

const characterProfile = [
    {
        id: 1,
        name: "Valere",
        img: valereIdle,
        alias: 'Monge lunar',
        description: "Nascida no Solstício de Inverno, carrega consigo tanto a curiosidade quanto o equilíbrio. Dotada de Magia Lunar, ela utiliza seu bastão lunar para absorver Orbes do Eclipse, liberando ataques devastadores. Treinada nas artes marciais dos monges, ela segue o caminho da Deusa Guardiã Luana. O Ancião Névoa enxerga grande potencial nela, acreditando que, um dia, ela poderá criar 'caminhos sobre a água'."
    },
    {
        id: 2,
        name: "Zale",
        img: zaleIdle,
        alias: 'Dançarino da lâmina solar',
        description: "Nascido no Solstício de Verão, é otimista e destemido. Empunhando uma espada solar, ele pode absorver Orbes do Eclipse para intensificar o impacto de seus ataques. Como dançarino de lâminas, ele trilha o caminho do Deus Guardião Solen. O Ancião Névoa previu que, para encontrar sua verdadeira luz e alcançar seu pleno potencial, ele precisará primeiro 'encarar a escuridão dentro de si.'"
    },
    {
        id: 3,
        name: "Garl",
        img: garlIdle,
        alias: 'Cozinheiro guerreiro',
        description: "Nasceu como uma criança comum, sem poderes especiais. Junto com seu treinamento como cozinheiro, sua constituição física naturalmente forte o torna um lutador defensivo capaz, fornecendo o suporte necessário para seus dois melhores amigos em suas missões como Guerreiros do Solstício. O Ancião Névoa viu algo peculiar nas estrelas sobre ele, sugerindo que seu coração caloroso pode ser capaz de 'acalmar uma alma atormentada por muito tempo.'"
    },
    {
        id: 4,
        name: "Seraï",
        img: seraiIdle,
        alias: 'Assassina do portal',
        description: "Uma assassina misteriosa e mestre em venenos, com suas origens e lealdades envoltas em mistério. Sua agilidade e precisão lhe permitem rasgar o tecido da realidade com suas adagas, teleportando-se pelo campo de batalha. Embora esteja claramente ao lado dos heróis, pouco se sabe sobre o que realmente impulsiona suas motivações."
    },
    {
        id: 5,
        name: "Resh'an",
        img: reshanIdle,
        alias: "Alquimista Imortal",
        description: "Um alquimista lendário que usou sua arte para alcançar a imortalidade. Em tempos passados, ele criou seu próprio frasco alquímico ao dominar as etéreas Areias do Tempo. Se o destino lhe for favorável, ele poderá enfim encontrar uma maneira de olhar para o passado, movido por seu desejo de compreender mais profundamente a Era dos Ovates."
    },
    {
        id: 6,
        name: "B'st",
        img: bstIdle,
        alias: "Golem de vidro vivo",
        description: "Uma das almas perdidas, deixada para trás pelos cruéis experimentos do Carniceiro. Ele permaneceu preso em uma cúpula por séculos, temendo que sua forma gasosa se dissipasse no vazio. Sua vontade inquebrável foi o ingrediente final que Resh’an precisava para, finalmente, criar o Vidro Vivo. Agora, com uma forma física novamente, B’st habita seu Golem de Vidro Vivo e está pronto para lutar para recuperar seu mundo."
    },
]

const imgVariants = {
    initial: (direction: any) => {
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
    exit: (direction: any) => {
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

const Characters = () => {

    const containerRef = useRef(null)

    const isInView = useInView(containerRef, { once: true })
    const mainControls = useAnimation()

    const [index, setIndex] = useState(0)
    const [direction, setDirection] = useState(0)

    const nextStep = () => {

        setDirection(1)

        if (index === characterProfile.length - 1) {
            setIndex(0)
            return
        }

        setIndex(index + 1)
    }

    const prevStep = () => {

        setDirection(-1)

        if (index === 0) {
            setIndex(characterProfile.length - 1)
            return
        }

        setIndex(index - 1)
    }

    useEffect(() => {
        if (isInView) {
            mainControls.start('visible')
        }
    }, [isInView])

    return (
        <section className="min-h-screen bg-pale-peach flex">
            <div ref={containerRef} className='flex flex-col-reverse md:flex-row justify-center items-center my-5 md:my-0 mx-auto lg:gap-[200px] md:gap-[100px] gap-5'>

                <motion.div
                    initial='hidden'
                    animate={mainControls}
                    variants={{
                        hidden: { opacity: 0, x: -100 },
                        visible: { opacity: 1, x: 0 }
                    }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="md:w-[30vw] w-full aspect-video relative overflow-hidden rounded-2xl">

                    <AnimatePresence initial={false} custom={direction}>
                        <motion.img
                            variants={imgVariants}
                            initial='initial'
                            animate='animate'
                            exit='exit'
                            custom={direction}
                            key={characterProfile[index].id}
                            src={characterProfile[index].img}
                            alt="Character idle"
                            className='absolute top-0 left-0 w-full h-full object-contain object-center'
                        />
                    </AnimatePresence>

                    <button className='text-lg w-16 aspect-square rounded-full cursor-pointer text-center text-off-white bg-dark-midnight-blue hover:bg-azure-blue absolute top-1/2 left-4 -translate-y-1/2 duration-300' onClick={prevStep}>
                        <FaArrowLeft className='w-full' />
                    </button>

                    <button className='text-lg w-16 aspect-square rounded-full cursor-pointer text-center text-off-white bg-dark-midnight-blue hover:bg-azure-blue absolute top-1/2 right-4 -translate-y-1/2 duration-300' onClick={nextStep}>
                        <FaArrowRight className='w-full' />
                    </button>
                </motion.div>

                <motion.div
                    initial='hidden'
                    animate={mainControls}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1 }
                    }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className='md:w-[40vw] w-[90vw] text-center md:text-left'>
                    <div className='mb-5'>
                        <h2 className='text-dark-grayish-brown text-5xl font-orpheus-pro'>
                            {characterProfile[index].name}
                        </h2>
                        <h3 className='text-dark-vanilla text-2xl font-orpheus-pro tracking-wide uppercase'>
                            {characterProfile[index].alias}
                        </h3>
                    </div>
                    <p className='leading-relaxed font-poppins text-xs sm:text-base'>{characterProfile[index].description}</p>
                </motion.div>

            </div>
        </section>
    )
}

export default Characters