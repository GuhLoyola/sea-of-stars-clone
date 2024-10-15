import arty1 from '../../assets/images/dlc carousels/arty-1.png'
import arty2 from '../../assets/images/dlc carousels/arty-2.png'
import arty3 from '../../assets/images/dlc carousels/arty-3.png'
import Carousel from '../Carousel/Carousel'

const carouselImages = [arty1, arty2, arty3]

const ArtyCard = () => {
    return (
        <div className='bg-dark-teal justify-center items-center md:p-5 max-md:pb-10 rounded-lg '>
            <div className='flex justify-center mb-3'>
                <Carousel slides={carouselImages} />
            </div>
            <div className='px-10'>
                <h2 className='font-rye text-light-peach md:text-2xl text-lg mb-5'>Novo personagem jogável: Arty</h2>
                <p className='text-gray-beige font-poppins text-sm md:text-base mb-3'>O Artifíce entra para o grupo! O engenhoso robô, agora com seu construto capaz de disparar lasers, se juntará a Valere e Zale na batalha para salvar Horloge.</p>
            </div>
        </div>
    )
}

export default ArtyCard