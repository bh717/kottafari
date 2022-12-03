function MultiImage({ ImageOne, ImageTwo, ImageThree, ImageFour, onClick }) {
	return (
		<div className="snap-start w-full h-[100vh] overflow-hidden grid grid-cols-2 grid-rows-2">
			<div className="col-span-1 row-span-1 pt-1 pr-1 pb-1">
				<div
					className="w-full h-full bg-cover bg-no-repeat bg-center cursor-pointer"
					style={{
						backgroundImage: `linear-gradient(to bottom, rgb(0 0 0 / 0%), rgb(0 0 0 / 0%)), url(${ImageOne})`,
					}}
					onClick={() => onClick(1)}
				/>
			</div>

			<div className="col-span-1 row-span-1 pt-1 pl-1 pb-1">
				<div
					className="w-full h-full bg-cover bg-no-repeat bg-center cursor-pointer"
					style={{
						backgroundImage: `linear-gradient(to bottom, rgb(0 0 0 / 0%), rgb(0 0 0 / 0%)), url(${ImageTwo})`,
					}}
					onClick={() => onClick(2)}
				/>
			</div>

			<div className="col-span-1 row-span-1 pr-1 pt-1">
				<div
					className="w-full h-full bg-cover bg-no-repeat bg-center cursor-pointer"
					style={{
						backgroundImage: `linear-gradient(to bottom, rgb(0 0 0 / 0%), rgb(0 0 0 / 0%)), url(${ImageThree})`,
					}}
					onClick={() => onClick(3)}
				/>
			</div>

			<div className="col-span-1 row-span-1 pl-1 pt-1">
				<div
					className="w-full h-full bg-cover bg-no-repeat bg-center cursor-pointer"
					style={{
						backgroundImage: `linear-gradient(to bottom, rgb(0 0 0 / 0%), rgb(0 0 0 / 0%)), url(${ImageFour})`,
					}}
					onClick={() => onClick(4)}
				/>
			</div>
		</div>
	);
}

export default MultiImage;
