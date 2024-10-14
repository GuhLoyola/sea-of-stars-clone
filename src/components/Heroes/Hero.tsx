import outNow from '../../assets/images/out-now.png'

const Hero = () => {
    return (
        <section className="bg-hero-pattern bg-cover bg-center min-h-screen flex justify-center items-center">
            <img src={outNow} alt="Out Now image" className='self-end pb-16' />
        </section>
    )
}

export default Hero