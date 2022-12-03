/* eslint-disable jsx-a11y/anchor-is-valid */
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

function Login({ open, setOpen }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const close = () => setOpen(false);

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
							<Dialog.Panel className="relative overflow-hidden bg-porche text-left shadow-xl transition-all w-96">
								<div className="flex flex-col items-center p-8 w-full">
									<h3 className="text-2xl mb-5 uppercase tracking-wide">Logga in</h3>

									<div className="flex flex-col gap-3 w-full">
										<input
											type="email"
											className="input w-full"
											placeholder="E-postaddress"
											value={email}
											onChange={(e) => setEmail(e.target.value)}
										/>
										<input
											type="password"
											className="input w-full"
											placeholder="Lösenord"
											value={password}
											onChange={(e) => setPassword(e.target.value)}
										/>
										<div className="flex justify-end">
											<a href="" className="text-xs text-black/90 hover:text-black transition">
												Glömt lösenordet?
											</a>
										</div>

										<button className="btn bg-metal text-white py-3 uppercase">Logga in</button>
										<p className="text-center text-sm border-t border-black/10 py-3 mt-3">
											Har du inget konto?{" "}
											<Link to="/register" className="text-fake" onClick={close}>
												Skapa ett här.
											</Link>
										</p>
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

export default Login;
