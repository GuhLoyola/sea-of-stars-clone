import FaqSection from "../components/FAQ/Faq"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const FAQ = () => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <FaqSection />
            </main>
            <Footer />
        </>
    )
}

export default FAQ