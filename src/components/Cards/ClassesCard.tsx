import Carousel from '../Carousel/Carousel'
import gameplay1 from '../../assets/images/dlc carousels/gameplay-1.png'
import gameplay2 from '../../assets/images/dlc carousels/gameplay-2.png'
import gameplay3 from '../../assets/images/dlc carousels/gameplay-3.png'

const carouselImages = [gameplay1, gameplay2, gameplay3]

const ClassesCard = () => {
    return (
        <div className='bg-dark-teal justify-center items-center md:p-10 max-md:pb-10 rounded-lg '>
            <div className='flex justify-center mb-3'>
                <Carousel slides={carouselImages} />
            </div>
            <div className='md:px-10 px-5'>
                <h2 className='font-rye text-light-peach md:text-2xl text-lg mb-3'>Novas classes jogáveis para Valere e Zale</h2>
                <p className='text-gray-beige font-poppins text-sm md:text-base'>No mundo de Horloge, as regras são diferentes, e os Guerreiros do Solstício precisarão se adaptar para que sua magia se manifeste. Zale aproveitará sua agilidade e se transformará em um Malabarista, enquanto Valere usará seu equilíbrio para se destacar como Acrobata. Ao abraçar a maldição com tema de circo, eles desbloquearão um novo conjunto de ataques, tipos de dano, habilidades e combos.</p>
            </div>
        </div>
    )
}

export default ClassesCard