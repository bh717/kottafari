import { Link } from "react-router-dom";

function BannerSection({ image, title, text, btnText, linkUrl }) {
	return (
		<div
			className="w-full h-[45vh] sm:h-[60vh] bg-cover bg-center bg-no-repeat"
			id="banner"
			style={{
				backgroundImage: `linear-gradient(to bottom, rgb(0 0 0 / 30%), rgb(0 0 0 / 30%)), url(${image})`,
			}}
		>
			<div className="h-full flex flex-col justify-center items-center gap-4">
				<h3 className="text-white text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-center">{title}</h3>
				{text && <p className="text-white/90 w-[45rem] lg:w-[30rem] md:w-[80%] text-center">{text}</p>}
				{btnText && linkUrl && (
					<div className="flex justify-center items-center">
						<Link to={linkUrl} className="btn-white text-white">
							{btnText}
						</Link>
					</div>
				)}
			</div>
		</div>
	);
}

export default BannerSection;
