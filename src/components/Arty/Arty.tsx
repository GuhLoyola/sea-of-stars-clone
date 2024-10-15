import { useEffect, useRef } from 'react';
import artyImg from '../../assets/images/characters/arty.png'
import { motion, useAnimation, useInView } from 'framer-motion';

const Arty = () => {

    const containerRef = useRef(null)

    const isInView = useInView(containerRef, { once: true })
    const mainControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start('visible')
        }
    }, [isInView])



    return (
        <section ref={containerRef} className="min-h-screen bg-pale-peach font-poppins py-12">
            <motion.div
                initial='hidden'
                animate={mainControls}
                variants={{
                    hidden: { opacity: 0, y: 100 },
                    visible: { opacity: 1, y: 0 }
                }}
                transition={{ delay: 0.5, duration: 0.5 }}
            >
                <h2 className="text-4xl text-center font-rye text-dark-teal mb-8">
                    Conheça Arty: O Engenheiro Mecânico
                </h2>

                <div className="flex flex-col lg:flex-row justify-center items-center gap-10 px-10 mb-12">
                    <img src={artyImg} alt="Arty Image" className="w-full max-w-sm object-contain" />

                    <div className="max-w-xl text-dark-teal">
                        <p className="mb-5 text-sm md:text-base leading-relaxed">
                            Arty é a mais nova adição ao elenco de heróis de <em>Sea of Stars</em> com o lançamento do DLC
                            <strong> Throes of the Watchmaker</strong>. Ele é um robô engenheiro, especializado em tecnologia
                            avançada e equipamentos de construção, pronto para ajudar Valere e Zale a salvar Horloge do caos.
                        </p>

                        <h3 className="font-rye text-xl text-dark-teal mb-4">Habilidades Tecnológicas Avançadas</h3>
                        <p className="mb-4">
                            Arty traz um arsenal de habilidades mecânicas para o time, incluindo:
                        </p>
                        <ul className="list-disc list-inside text-lg">
                            <li className="text-sm md:text-base mb-2">
                                <strong>Laser de Precisão</strong>: Com sua engenhoca personalizada, Arty desbloqueia um poderoso
                                ataque de laser, pronto para detonar seus inimigos de longe.
                            </li>
                            <li className='text-sm md:text-base'>
                                <strong>Suporte Técnico</strong>: Além de atacar, ele usa suas ferramentas para consertar e melhorar
                                equipamentos em campo, trazendo uma nova camada de estratégia às batalhas.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="text-center max-w-3xl mx-auto px-10">
                    <h3 className="text-xl font-rye text-dark-teal mb-5">
                        Parceiro Robótico
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed">
                        Leal e carismático, Arty é mais que um simples robô. Ele usa suas habilidades para equilibrar o combate e
                        proteger seus aliados enquanto enfrenta os desafios mecânicos de Horloge.
                    </p>
                </div>
            </motion.div>
        </section>
    )
}

export default Arty;
