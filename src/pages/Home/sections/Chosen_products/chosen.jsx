import SubProductSlider from "../../../../components/ProductSlider/SubProductSlider";

function ChosenProducts() {
	return (
		<section className="w-full flex justify-center py-16">
			<div className="w-[85%] flex flex-col gap-6">
				<div className="flex w-full justify-between items-center">
					<h1 className="text-4xl text-black ">Utvalda Produkter</h1>
					<a href="#" className="view-all mx-9">
						Visa alla
					</a>
				</div>

				<SubProductSlider products={[{
					id: 0,
					title: "Köttkoma BBQ Krydda",
					price: 120000,
					weight: "200 kg",
					img: "kottkoma_bbq.png",
					subimg: "kottkoma_bbq.png",
					flag: "SE"
				}, {
					id:1,
					title: "Giuseppe Giusti",
					price: 890,
					weight: "",
					img: "giuseppe_giusti.png",
					subimg:"giuseppe_giusti.png",
					flag: "SE"
				}, {
					id:2,
					title: "Black Anaconda BBQ",
					price: 59,
					weight: "",
					img: "black_anaconda_bbq.png",
					subimg: "black_anaconda_bbq.png",
					flag: "SE"
				}, {
					id:3,
					title: "Gotländsk Chilikajp Olja",
					price: 99,
					weight: "",
					img: "gotlandsk_chilikajp_olja.png",
					subimg: "gotlandsk_chilikajp_olja.png",
					flag: "SE"
				}]} />
			</div>
		</section>
	);
}

export default ChosenProducts;
