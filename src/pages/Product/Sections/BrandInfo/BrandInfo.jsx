import { Link } from "react-router-dom";

function BrandInfo({ImgBrand, LogoBrand}) {
    return ( 
		<section className="bg-porche h-screen flex" id="">
			<div className="flex w-1/2 flex-col relative">
                <img src={LogoBrand} alt="" className="absolute top-0 right-0 w-36 h-auto pt-10 pr-10" />
                <div className="flex flex-col w-full h-full justify-center items-center gap-5">
                    <h3 className="text-5xl text-center tracking-wider text-[#222222]">BIG GREEN EGG</h3>
                    <h2 className="uppercase font-rival tracking-wide text-[#222222]">Tonight you're the chef</h2>
                    <p className="w-[65%] text-center font-rival font-thin tracking-wide text-[#222222]">Big Green Egg is the most popular kamado BBQ made of the best ceramics. We have been creating beautiful memories since 1974 and we will continue to do so. Big Green Egg is the original. The Evergreen.</p>
                    <div className="pt-8">
                        <Link className="btn" to="/">Mer om egget</Link>
                    </div>
                </div>
			</div>
			<div className="flex-1 w-1/2 bg-cover bg-center bg-no-repeat lg:hidden" style={{
				backgroundImage: `linear-gradient(to bottom, rgb(0 0 0 / 15%), rgb(0 0 0 / 15%)), url(${ImgBrand})`,
			}}></div>
		</section>
     );
}

export default BrandInfo;