import Img1 from "../../../../assets/images/blog/1.png";
import Img2 from "../../../../assets/images/blog/2.png";
import Img3 from "../../../../assets/images/blog/3.png";

import Item from "./Item";

function Blog() {
	return (
		<section className="w-full flex justify-center py-16">
			<div className="w-[85%] grid grid-cols-4 xl:grid-cols-2 sm:grid-cols-1 gap-12">
				<div className="text-center self-center">
					<h3 className="text-6xl mb-8">
						Mer Från
						<br />
						Kött Fabriken
					</h3>
					<p className="mb-4 text-[#222222]">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et urna efficitur, interdum tortor
						sollicitudin, posuere metus. In arcu velit, commodo nec purus ac, pretium lobortis est.
					</p>
				</div>
				<Item
					img={Img1}
					title="Om vårat kött sortiment"
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis luctus sapien."
					href="#"
				/>
				<Item
					img={Img2}
					title="Om vårat kött sortiment"
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis luctus sapien."
					href="#"
				/>
				<Item
					img={Img3}
					title="Om vårat kött sortiment"
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis luctus sapien."
					href="#"
				/>
			</div>
		</section>
	);
}

export default Blog;
