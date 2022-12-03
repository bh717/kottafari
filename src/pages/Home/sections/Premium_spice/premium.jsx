import ImgLeft from "../../../../assets/images/premium-spices/left.png";
import SubProductSlider from "../../../../components/ProductSlider/SubProductSlider";

function PremiumSpice() {
	return (
		<section className="w-full flex justify-center py-16" id="preimum-spices">
			<div className="w-[85%] flex gap-12">
				<div className="lg:hidden w-[30%]">
					<img src={ImgLeft} alt="" className="h-full 2xl:h-auto" />
				</div>

				<div className="w-full flex flex-col w-[70%] lg:w-[100%]">
					<h3 className="text-4xl">Premium Kryddor</h3>
					<p className="text-[#222] w-96">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et urna efficitur, interdum tortor
						sollicitudin, posuere metus.
					</p>

					<div className="mt-5">
						<a href="#" className="btn">
							Utforska
						</a>
					</div>

					<div className="flex justify-end my-4">
						<a href="#" className="view-all mx-9">
							VISA ALLA
						</a>
					</div>

					<SubProductSlider products={[{
						title: "Truffels Salt",
						price: 79,
						weight: "",
						img: "truffels_salt.png",
						flag: "SE",
						clickable: false
					}, {
						title: "Islands Salt",
						price: 79,
						weight: "",
						img: "islands_salt.png",
						flag: "SE",
						clickable: false
					}, {
						title: "Pure Sea Salt",
						price: 79,
						weight: "",
						img: "pure_sea_salt.png",
						flag: "SE",
						clickable: false
					}, {
						title: "Islands Salt",
						price: 79,
						weight: "",
						img: "islands_salt.png",
						flag: "SE",
						clickable: false
					}]} />
				</div>
			</div>
		</section>
	);
}

export default PremiumSpice;
