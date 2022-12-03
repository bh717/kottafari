import { Link } from "react-router-dom";
import Banner from "../../../../assets/images/banners/boretti.png";

function Store() {
	return (
		<section
			className="h-screen flex flex-col justify-center items-center my-16 gap-6 text-white bg-center bg-cover bg-no-repeat"
			style={{
				backgroundImage: `url(${Banner})`,
			}}
		>
			<h3 className="text-5xl drop-shadow-md tracking-wide">Alla nyheter från Borretti</h3>
			<Link to="/store" className="btn border-white hover:bg-white hover:text-black">
				UTFORSKA
			</Link>
		</section>
	);
}

export default Store;
