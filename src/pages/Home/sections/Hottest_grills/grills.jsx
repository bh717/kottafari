import GrillFranklin from "../../../../assets/images/products/grill_franklin.png";
import BorettiSmall from "../../../../assets/images/products/boretti_small.png";
import PkGrill from "../../../../assets/images/products/pk_grill.png";
import BigGreenEggMedium from "../../../../assets/images/products/big_green_egg_medium.png";

import FlagItaly from "../../../../assets/images/flags/italy.png";
import FlagScotland from "../../../../assets/images/flags/scotland.png";
import FlagUSA from "../../../../assets/images/flags/usa.png";
import FlagSweden from "../../../../assets/images/flags/sweden.png";

import IronSkillet from "../../../../assets/images/iron_skillet.png";
import Product from "../../../../reusable/Product/Product";

function LatestNews() {
	return (
		<section className="w-full flex justify-center py-16" id="latest-news">
			<div className="w-[85%] flex gap-24 2lg:flex-col">
				<div className="flex-1 flex flex-col gap-6">
					<div className="flex justify-between items-center">
						<h1 className="text-4xl">Hetaste Grillarna</h1>
						<a href="#" className="view-all">
							VISA ALLA
						</a>
					</div>
					<div className="grid grid-cols-2 sm:grid-cols-1 gap-8">
						<Product title="Franklin Portable Grill" price={2229} img={GrillFranklin} flag="SE" />
						<Product title="Boretti Small" price={3999} img={BorettiSmall} flag="SE" />
						<Product title="Pk Grill" price={890} img={PkGrill} flag="SE" />
						<Product title="Big Green Egg Medium" price={4550} img={BigGreenEggMedium} flag="SE" />
					</div>
				</div>
				<div className="flex-1 flex flex-col gap-2">
					<div className="relative w-full 2lg:h-1/2 md:h-full">
						<img src={IronSkillet} alt="" className="w-full h-full object-cover" />
						<h3 className="absolute bottom-8 left-8 text-6xl md:text-5xl sm:text-4xl text-white drop-shadow">
							The Only Cast Iron
							<br />
							Skillet you’ll ever need.
						</h3>
					</div>
					<div className="flex items-center gap-2">
						<h2 className="text-3xl">Lodge Cast Iron</h2>
						<a href="#" className="view-all text-fake mt-[0.375rem]">
							-&nbsp;&nbsp;Läs mer
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}

export default LatestNews;
