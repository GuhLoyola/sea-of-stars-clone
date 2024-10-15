import Carousel from '../Carousel/Carousel'
import news1 from '../../assets/images/dlc carousels/news-1.png'
import news2 from '../../assets/images/dlc carousels/news-2.png'
import news3 from '../../assets/images/dlc carousels/news-3.png'

const carouselImages = [news1, news2, news3]

const NewsCard = () => {
    return (
        <div className='bg-dark-teal justify-center items-center md:p-5 max-md:pb-10 rounded-lg '>
            <div className='flex justify-center mb-3'>
                <Carousel slides={carouselImages} />
            </div>
            <div className='px-10'>
                <h2 className='font-rye text-light-peach md:text-2xl text-lg mb-5'>Novas áreas, músicas, masmorras, inimigos, chefes e desafios</h2>
                <p className='text-gray-beige font-poppins text-sm md:text-base mb-3'>Aventure-se em um mundo mágico e miniaturizado repleto de curiosidades e maravilhas. Em Horloge, um carnaval amaldiçoado ameaça os inocentes habitantes, e o cenário é repleto de ambientes únicos, NPCs, inimigos e masmorras. E, é claro, o compositor de Sabotage, Eric W. Brown, retorna para trazer uma nova e emocionante trilha sonora!</p>
            </div>
        </div>
    )
}

export default NewsCard