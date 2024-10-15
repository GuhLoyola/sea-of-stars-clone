import Carousel from "../Carousel/Carousel"
import coop1 from '../../assets/images/dlc carousels/totw-coop-1.png'
import coop2 from '../../assets/images/dlc carousels/totw-coop-2.png'
import coop3 from '../../assets/images/dlc carousels/totw-coop-3.png'


const carouselImages = [coop1, coop2, coop3]

const CoopCard = () => {
    return (
        <div className='bg-dark-teal justify-center items-center md:p-5 max-md:pb-10 rounded-lg '>
            <div className='flex justify-center mb-3'>
                <Carousel slides={carouselImages} />
            </div>
            <div className='px-10'>
                <h2 className='font-rye text-light-peach md:text-2xl text-lg mb-5'>Modo cooperativo local em até 3 jogadores</h2>
                <p className='text-gray-beige font-poppins text-sm md:text-base mb-3'>O novo modo de cooperação local também estará disponível em Throes of the Watchmaker. Ele permitirá que até três jogadores participem de desafios e combates com uma nova mecânica de “acertos em tempo co-op”!
                </p>
                <p className="text-gray-beige font-poppins text-sm md:text-base mb-3">Aviso: essa atualização também será lançada na aventura principal de Sea of Stars no quarto trimestre de 2024.</p>
            </div>
        </div>
    )
}

export default CoopCard