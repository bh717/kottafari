import { Fragment, useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { ChevronLeftIcon, ChevronRightIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Transition } from "@headlessui/react";

function ProductGallery({ images, show, setShow, index }) {
	const [currentIndex, setCurrentIndex] = useState(index);

	useEffect(() => {
		if (show) {
			setTimeout(() => {
				document.body.style.overflowY = "hidden";
			}, 100);
		} else {
			document.body.style.overflowY = "initial";
		}
	}, [show]);

	useEffect(() => {
		setCurrentIndex(index);
	}, [index]);

	return (
		<Transition.Root show={show} as={Fragment}>
			<Transition.Child
				as={Fragment}
				enter="ease-out duration-200"
				enterFrom="opacity-0"
				enterTo="opacity-100"
				leave="ease-in duration-200"
				leaveFrom="opacity-100"
				leaveTo="opacity-0"
			>
				<div className="fixed inset-0 w-screen h-screen bg-white z-[60]">
					<div className="absolute top-0 right-0 p-4 z-[70]">
						<button
							className="p-2 rounded-full group hover:bg-black/10 transition"
							onClick={() => setShow(false)}
						>
							<XMarkIcon className="w-8 h-8 text-black/90 group-hover:text-black transition" />
						</button>
					</div>

					<div className="flex h-full justify-center items-center">
						<div className="w-[45rem]">
							<Carousel
								emulateTouch
								showArrows
								infiniteLoop
								showThumbs={false}
								showStatus={false}
								showIndicators={false}
								renderArrowPrev={(onClickHandler) => <Arrow onClick={onClickHandler} />}
								renderArrowNext={(onClickHandler) => <Arrow onClick={onClickHandler} isNext />}
								onChange={(index) => setCurrentIndex(index)}
								selectedItem={currentIndex}
							>
								{images.map((image, index) => (
									<div key={index} className="">
										<img src={image} alt="" className="" />
									</div>
								))}
							</Carousel>
							<Indicator imagesLength={images.length} index={currentIndex} />
						</div>
					</div>
				</div>
			</Transition.Child>
		</Transition.Root>
	);
}

const Indicator = ({ imagesLength, index }) => {
	return (
		<div className="h-[3px] mt-2 w-full bg-[#D9D9D9]">
			<div
				className="bg-metal h-full transition"
				style={{
					width: `${100 / imagesLength}%`,
					transform: `translateX(${index * 100}%)`,
				}}
			/>
		</div>
	);
};

const Arrow = ({ isNext, onClick }) => {
	const ArrowIcon = isNext ? ChevronRightIcon : ChevronLeftIcon;
	console.log(isNext);

	return (
		<div
			className={`absolute top-0 bottom-0 h-screen flex items-center ${
				isNext ? "justify-end right-0" : "justify-start left-0"
			}`}
		>
			<button
				className="m-4 p-2 rounded-full group hover:bg-black/10 transition z-[62] md:bg-white md:hover:bg-white"
				onClick={onClick}
			>
				<ArrowIcon className="w-8 h-8 text-black/90 group-hover:text-black transition" />
			</button>
		</div>
	);
};

export default ProductGallery;
