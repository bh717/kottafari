import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import CookieSettings from "./Settings";

function Cookie({ open, setOpen }) {
	const close = () => setOpen(false);
	const [settingsOpen, setSettingsOpen] = useState(false);

	return (
		<>
			<Transition.Root show={open} as={Fragment}>
				<Dialog as="div" className="relative z-50" onClose={setOpen}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-200"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
					</Transition.Child>

					<div className="fixed inset-0 z-50 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center text-center sm:items-center sm:p-0">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-200"
								enterFrom="opacity-0 scale-[0.25]"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-[0.25]"
							>
								<Dialog.Panel className="relative overflow-hidden px-12 py-4 bg-porche text-left shadow-xl transition-all sm:px-6 sm:w-[90%]">
									<div className="flex flex-col items-center p-8 w-full">
										<h3 className="text-2xl mb-5 uppercase">Köttfabriken</h3>
										<h3 className="text-lg mb-5">Vi värdesätter säkerhet</h3>
										<p className="font-rival text-xs w-96 sm:w-full mb-7 text-center">
											Vi använder cookies, inklusive tredjepartscookies, av funktionella skäl, för
											statistisk analys, för att anpassa din upplevelse, erbjuda dig innehåll som
											riktar sig till dina speciella intressen och analysera resultatet av våra
											annonskampanjer. Du kan antingen acceptera dessa cookies genom att klicka på
											"Acceptera cookies", eller klicka på "Inställningar" för att göra dina
											inställningar. Du kan ändra dina inställningar när som helst genom att gå
											till avsnittet "Sekretess- och cookiemeddelande" på den här webbplatsen
											genom att klicka på länken längst ned på en webbsida för kottfabriken.se för
											mer information.
										</p>
										<div className="h-[1px] w-full bg-[#5E5E5E40] mb-7"></div>
										<div className="flex justify-center gap-20 sm:gap-4 sm:flex-col sm:w-full">
											<button
												className="btn bg-metal text-white py-3 sm:w-full"
												onClick={() => setSettingsOpen(true)}
											>
												Inställningar
											</button>
											<button className="btn bg-metal text-white py-3 sm:w-full" onClick={close}>
												Acceptera
											</button>
										</div>
									</div>
									<div className="absolute right-0 top-0 p-2">
										<button
											className="p-2 rounded-full group hover:bg-black/10 transition"
											onClick={close}
										>
											<XMarkIcon className="w-6 h-6 text-black/60 group-hover:text-black transition" />
										</button>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition.Root>

			<CookieSettings open={settingsOpen} setOpen={setSettingsOpen} closeParent={close} />
		</>
	);
}

export default Cookie;
