import { Fragment, useState } from "react";
import { Dialog, Transition, Switch } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

function CookieSettings({ open, setOpen, closeParent }) {
	const [setting1, setSetting1] = useState(true);
	const [setting2, setSetting2] = useState(true);
	const [setting3, setSetting3] = useState(true);
	const close = () => setOpen(false);

	const handleSave = () => {
		// Spara inställningar
		close();
		closeParent();
	};

	return (
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
							<Dialog.Panel className="relative overflow-hidden bg-porche px-12 py-4 text-left shadow-xl transition-all sm:px-6 sm:w-[90%]">
								<div className="flex flex-col items-center p-8 w-full">
									<h3 className="text-2xl mb-5 uppercase">Köttfabriken</h3>
									<h3 className="text-lg mb-5">Cookie Inställningar</h3>

									<div className="flex flex-col gap-3">
										<Switch.Group as="div" className="flex items-center justify-between">
											<span className="flex flex-grow flex-col">
												<Switch.Label
													as="span"
													className="text-sm font-medium text-gray-900"
													passive
												>
													Cookie setting 1
												</Switch.Label>
												<Switch.Description as="span" className="text-sm text-gray-500">
													About the cookie setting number one.
												</Switch.Description>
											</span>
											<Switch
												checked={setting1}
												onChange={setSetting1}
												className={classNames(
													setting1 ? "bg-metal" : "bg-black/10",
													"relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-metal focus:ring-offset-2"
												)}
											>
												<span
													aria-hidden="true"
													className={classNames(
														setting1 ? "translate-x-5" : "translate-x-0",
														"pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
													)}
												/>
											</Switch>
										</Switch.Group>

										<Switch.Group as="div" className="flex items-center justify-between">
											<span className="flex flex-grow flex-col">
												<Switch.Label
													as="span"
													className="text-sm font-medium text-gray-900"
													passive
												>
													Cookie setting 1
												</Switch.Label>
												<Switch.Description as="span" className="text-sm text-gray-500">
													About the cookie setting number one.
												</Switch.Description>
											</span>
											<Switch
												checked={setting2}
												onChange={setSetting2}
												className={classNames(
													setting2 ? "bg-metal" : "bg-black/10",
													"relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-metal focus:ring-offset-2"
												)}
											>
												<span
													aria-hidden="true"
													className={classNames(
														setting2 ? "translate-x-5" : "translate-x-0",
														"pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
													)}
												/>
											</Switch>
										</Switch.Group>

										<Switch.Group as="div" className="flex items-center justify-center gap-8">
											<span className="flex flex-grow flex-col">
												<Switch.Label
													as="span"
													className="text-sm font-medium text-gray-900"
													passive
												>
													Cookie setting 1
												</Switch.Label>
												<Switch.Description as="span" className="text-sm text-gray-500">
													About the cookie setting number one.
												</Switch.Description>
											</span>
											<Switch
												checked={setting3}
												onChange={setSetting3}
												className={classNames(
													setting3 ? "bg-metal" : "bg-black/10",
													"relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-metal focus:ring-offset-2"
												)}
											>
												<span
													aria-hidden="true"
													className={classNames(
														setting3 ? "translate-x-5" : "translate-x-0",
														"pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
													)}
												/>
											</Switch>
										</Switch.Group>
									</div>

									<div className="h-[1px] w-full bg-[#5E5E5E40] mt-7 mb-7"></div>

									<div className="flex justify-center gap-20 sm:gap-4 sm:flex-col sm:w-full">
										<button className="btn bg-metal text-white py-3 sm:w-full" onClick={close}>
											Tillbaka
										</button>
										<button className="btn bg-metal text-white py-3 sm:w-full" onClick={handleSave}>
											Spara
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
	);
}

export default CookieSettings;
