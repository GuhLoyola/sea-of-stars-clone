import sabotageLogo from '../assets/images/logos/logo-sabotage-white.png'

const Footer = () => {
    return (
        <footer className='bg-dark-midnight-blue flex flex-col justify-center items-center text-off-white py-5 md:px-10 px-3 leading-relaxed text-center'>
            <p className='mb-3 md:mb-1'>
                Este site não é oficial e não possui vínculo com os criadores de <span className='font-bold text-medium-aquamarine'>Sea of Stars</span>.
            </p>

            <p>
                Todos os direitos pertencem à <span className='font-bold text-medium-aquamarine'>Sabotage Studios</span>.  Para mais informações, visite o site oficial de <a href="https://seaofstarsgame.co/" target="_blank" className='hover:text-medium-aquamarine duration-300 underline'>Sea of Stars</a>.
            </p>
            <div>
                <a href="https://sabotagestudio.com/" target='_blank'>
                    <img src={sabotageLogo} alt="Logo Sabotage Studios" className='max-w-32' />
                </a>
            </div>
        </footer>
    )
}

export default Footer