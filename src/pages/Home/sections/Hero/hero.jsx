import HeroImage from "./../../../../assets/images/banners/hero-image.png"

function Hero() {
    return ( 
        <section className="h-screen w-full bg-cover bg-center bg-no-repeat" id="hero" style={{backgroundImage: `linear-gradient(to bottom, rgba(0,0,0, .0), rgba(0,0,0, .0)), url(${HeroImage})`}}>
            <div className="flex w-full h-full justify-start items-end">
                <div className="mb-16 ml-12">
                    <div className="flex justify-between gap-8 mb-4">
                        <a href="#" className="hover-link text-xl capitalize font-rival text-white">Big Green Egg</a>
                        <a href="#" className="hover-link text-xl capitalize font-rival text-white">Borreti</a>
                        <a href="#" className="hover-link text-xl capitalize font-rival text-white">Lodge Cast Iron</a>
                    </div>
                    <div className="">
                        <h1 className="uppercase font-light font-premier text-6xl text-white tracking-wider">Nyheter</h1>
                    </div>
                </div>
            </div>
        </section>
     );
}

export default Hero;