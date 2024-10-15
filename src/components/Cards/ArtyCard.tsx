import arty1 from '../../assets/images/dlc carousels/arty-1.png'
import arty2 from '../../assets/images/dlc carousels/arty-2.png'
import arty3 from '../../assets/images/dlc carousels/arty-3.png'
import Carousel from '../Carousel/Carousel'

const carouselImages = [arty1, arty2, arty3]

const ArtyCard = () => {
    return (
        <div className='bg-dark-teal justify-center items-center md:p-10 max-md:pb-10 rounded-lg '>
            <div className='flex justify-center mb-3'>
                <Carousel slides={carouselImages} />
            </div>
            <div className='md:px-10 px-5'>
                <h2 className='font-rye text-light-peach md:text-2xl text-lg mb-3'>Novo personagem jogável: Arty</h2>
                <p className='text-gray-beige font-poppins text-sm md:text-base'>O Artificer entra para o grupo! O engenhoso robô, agora com seu construto capaz de disparar lasers, se juntará a Valere e Zale na batalha para salvar Horloge.</p>
            </div>
        </div>
    )
}

export default ArtyCard