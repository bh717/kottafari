import { HomeHeader } from "./../../components/Layout/index";
import {
	BigGreenEgg,
	Blog,
	Store,
	ChosenProducts,
	DeliveryBanner,
	Hero,
	HottestGrills,
	PremiumSpice,
	PromoBanner,
} from "./sections/index";

const Home = () => {
	return (
		<>
			<Hero></Hero>
			<ChosenProducts></ChosenProducts>
			<DeliveryBanner></DeliveryBanner>
			<PremiumSpice></PremiumSpice>
			<BigGreenEgg></BigGreenEgg>
			<HottestGrills></HottestGrills>
			<Store></Store>
			<Blog></Blog>
		</>
	);
};

export default Home;
