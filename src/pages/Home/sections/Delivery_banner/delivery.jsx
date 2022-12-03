import Banner from "../../../../reusable/BannerSection/BannerSection";
import Img from "../../../../assets/images/banners/delivery.png";

function DeliveryBanner() {
	return (
		<section className="w-full flex justify-center py-16" id="delivery">
			<div className="w-[85%] md:w-[95%]">
				<Banner
					title="FÅ HEM KÖTTET DIREKT TILL GRILLEN"
					text="Vi erbjuder utkörning av kött till mer än hälften av alla hushåll i Sverige. Tryck på knappen nedan och fyll i ditt postnummer för att se om vi kan leverera hem till dig."
					btnText="Kan jag få leverans?"
					image={Img}
					linkUrl="/"
				/>
			</div>
		</section>
	);
}

export default DeliveryBanner;
