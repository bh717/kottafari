function SingleImage({ ImageWide, onClick }) {
	return (
		<div className="w-full h-[100vh] pb-1">
			<div
				className="w-full h-full bg-cover bg-no-repeat bg-center cursor-pointer"
				style={{
					backgroundImage: `linear-gradient(to bottom, rgb(0 0 0 / 0%), rgb(0 0 0 / 0%)), url(${ImageWide})`,
				}}
				onClick={() => onClick(0)}
			></div>
		</div>
	);
}

export default SingleImage;
