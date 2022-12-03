import Banner from "../../reusable/BannerSection/BannerSection";
import BannerImg from "../../assets/images/banners/account.png";
import { HeartIcon, UserCircleIcon, TruckIcon, HomeIcon, GiftIcon, TagIcon } from "@heroicons/react/24/outline";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const routes = [
	{ path: "info", label: "Kontoinformation", icon: <UserCircleIcon /> },
	{ path: "orders", label: "Dina beställningar", icon: <TruckIcon /> },
	{ path: "adress", label: "Din adress", icon: <HomeIcon /> },
	{ path: "favorites", label: "Favoriter", icon: <HeartIcon /> },
	{ path: "discount", label: "Rabattkoder", icon: <TagIcon /> },
	{ path: "giftcard", label: "Presentkort", icon: <GiftIcon /> },
];

const Account = () => {
	const path = useLocation().pathname;
	const currentRoute = routes.find((route) => path.endsWith(route.path));
	return (
		<>
			<Banner title="Mitt Konto" image={BannerImg} />

			<div className="w-full flex justify-center py-24 px-12">
				<div className="flex gap-12">
					<ul className="p-2 w-80">
						<h1 className="px-6 pb-2 font-premier text-4xl">Hej Anton</h1>
						{routes.map((route, index) => (
							<li className="px-6">
								<div
									className={`py-3 border-b flex items-center gap-2 ${
										index === routes.length - 1 ? "border-transparent" : "border-black/10"
									}`}
								>
									
									<div className="h-auto w-10 color-[#222222]">{route.icon}</div>
									<Link
										to={route.path}
										className={`h-full w-full uppercase font-rival tracking-wide font-normal color-[#222222] transition-colors ${
											path.endsWith(route.path) ? "text-fake" : "text-black/80 hover:text-black"
										}`}
									>
										{route.label}
									</Link>
								</div>
							</li>
						))}
						<div>
							<button className="px-6 underline underline-offset-4 text-[#222222b3]">Logga ut</button>
						</div>
					</ul>

					<div className="w-[55rem] p-8">
						{currentRoute && <h1 className="text-4xl">{currentRoute.label ?? ""}</h1>}
						<Outlet />
					</div>
				</div>
			</div>
		</>
	);
};

export default Account;
