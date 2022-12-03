import { Link } from "react-router-dom";

function BrandGuide({ImgGuideOne, TitleGuideOne, TextGuideOne, ImgGuideTwo, TitleGuideTwo, TextGuideTwo}) {
    return ( 
        <section className="w-full min-h-screen flex justify-center">
            <div className="w-[85%] flex items-center justify-center gap-10">
                <div className="bg-[#F2F2F2] w-1/3">
                    <div className="bg-center bg-cover bg-no-repeat w-full h-[20rem]" style={{
				    backgroundImage: `linear-gradient(to bottom, rgb(0 0 0 / 15%), rgb(0 0 0 / 15%)), url(${ImgGuideOne})`,
			        }}></div>
                    <div className="px-5 py-10 flex items-center justify-center flex-col gap-6">
                        <h1 className="font-premier uppercase text-[#222222] text-3xl tracking-wider">{TitleGuideOne}</h1>
                        <p className="font-rival text-base text-center">{TextGuideOne}</p>
                        <Link className="uppercase font-rival font-bold tracking-wide hover:underline transition duration-300 text-[#222222]" to="/">Läs mer</Link>
                    </div>
                </div>

                <div className="bg-[#F2F2F2] w-1/3">
                    <div className="bg-center bg-cover bg-no-repeat w-full h-[20rem]" style={{
				    backgroundImage: `linear-gradient(to bottom, rgb(0 0 0 / 15%), rgb(0 0 0 / 15%)), url(${ImgGuideTwo})`,
			        }}></div>
                    <div className="px-5 py-10 flex items-center justify-center flex-col gap-6">
                        <h1 className="font-premier uppercase text-[#222222] text-3xl tracking-wider">{TitleGuideTwo}</h1>
                        <p className="font-rival text-base text-center">{TextGuideTwo}</p>
                        <Link className="uppercase font-rival font-bold tracking-wide hover:underline transition duration-300 text-[#222222]" to="/">Läs mer</Link>
                    </div>
                </div>

                <div className="bg-[#F2F2F2] w-1/3">
                    <div className="bg-center bg-cover bg-no-repeat w-full h-[20rem]" style={{
				    backgroundImage: `linear-gradient(to bottom, rgb(0 0 0 / 15%), rgb(0 0 0 / 15%)), url(${ImgGuideTwo})`,
			        }}></div>
                    <div className="px-5 py-10 flex items-center justify-center flex-col gap-6">
                        <h1 className="font-premier uppercase text-[#222222] text-3xl tracking-wider">{TitleGuideTwo}</h1>
                        <p className="font-rival text-base text-center">{TextGuideTwo}</p>
                        <Link className="uppercase font-rival font-bold tracking-wide hover:underline transition duration-300 text-[#222222]" to="/">Läs mer</Link>
                    </div>
                </div>
            </div>
        </section>
     );
}

export default BrandGuide;