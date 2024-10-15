import Cards from "../components/Cards/Cards"
import Footer from "../components/Footer"
import DlcHero from "../components/Heroes/DlcHero"
import Navbar from "../components/Navbar"
import DlcTrailer from "../components/Trailers/DlcTrailer"

const DLC = () => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <DlcHero />
                <DlcTrailer />
                <Cards />
            </main>
            <Footer />
        </>
    )
}

export default DLC