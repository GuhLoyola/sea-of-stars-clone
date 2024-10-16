import Footer from '../components/Footer'
import Hero from '../components/Heroes/Hero'
import Navbar from '../components/Navbar'
import Order from '../components/Order/Order'
import Trailer from '../components/Trailers/Trailer'
import Characters from '../components/Characters/Characters'

const Home = () => {

    return (
        <div className='flex flex-col justify-center'>
            <header>
                <Navbar />
            </header>
            <main>
                <Hero />
                <Order />
                <Trailer />
                <Characters />
            </main>
            <Footer />
        </div>
    )
}

export default Home