import Cards from "../components/Cards/Cards"
import Footer from "../components/Footer"
import DlcHero from "../components/Heroes/DlcHero"
import Navbar from "../components/Navbar"
import DlcTrailer from "../components/Trailers/DlcTrailer"
import Troupe from "../components/Troupe/Troupe"

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
                <Troupe />
            </main>
            <Footer />
        </>
    )
}

export default DLC