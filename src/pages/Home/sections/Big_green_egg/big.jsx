import ImgRight from "../../../../assets/images/big-green-egg/right.png";
import Img from "../../../../assets/images/big-green-egg/img.png";

function BigGreenEgg() {
	return (
		<section className="bg-porche flex my-16" id="">
			<div className="flex-1">
				<div className="flex flex-col justify-center items-center p-28 lg:px-8 gap-4">
					<h3 className="text-5xl text-center">BIG GREEN EGG</h3>
					<p className="text-center text-[#222222]">
						Big Green Egg är den heliga graalen för alla matälskare. Och ju mer du använder det, desto
						gladare kommer du att vara för alla möjligheter, resultat och reaktioner.
					</p>
					<img src={Img} alt="" className="w-96" />
					<a className="btn mt-4" href="#">
						Utforska
					</a>
				</div>
			</div>
			<img className="flex-1 w-1/2 object-cover lg:hidden" src={ImgRight} alt="" />
		</section>
	);
}

export default BigGreenEgg;
