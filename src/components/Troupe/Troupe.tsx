import clones from '../../assets/images/troupe/totw_troupe_clones.png'
import puppeteer from '../../assets/images/troupe/totw_troupe_puppeteer.png'
import pifPouf from '../../assets/images/troupe/totw_troupe_pif_pouf.png'
import tendu from '../../assets/images/troupe/totw_troupe_tendu.png'
import ticket from '../../assets/images/free_ticket_totw.png'
import ticket_mobile from '../../assets/images/free_ticket_mobile.png'
import Carousel from '../Carousel/Carousel'


const carouselImages = [clones, puppeteer, pifPouf, tendu]

const Troupe = () => {
    return (
        <section className='bg-dark-midnight-blue min-h-screen flex flex-col justify-center items-center'>
            <h2 className='font-rye text-3xl mb-10 text-off-white text-center'>Apresentando a trupe vilanesca</h2>
            <Carousel slides={carouselImages} />
            <picture>
                <source media="(min-width: 768px)" srcSet={ticket} />
                <source media="(max-width: 767px)" srcSet={ticket_mobile} />
                <img src={ticket_mobile} alt="Ticket mobile Image" className='mt-10' />
            </picture>
        </section>
    )
}

export default Troupe