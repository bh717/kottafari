/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { Link } from "react-router-dom";
import Banner from "../../assets/images/banners/register.png";
import Apple from "../../assets/icons/apple.png";
import Google from "../../assets/icons/google.png";
import Facebook from "../../assets/icons/facebook.png";
import Login from "../../components/Login/Login";

const Register = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [updates, setUpdates] = useState(false);
	const [login, setLogin] = useState(false);
	return (
		<>
			<div>
				<div className="relative">
					<img src={Banner} alt="" className="h-[478px] md:h-[239px] object-cover object-center" />

					<div className="absolute top-0 left-0 w-full h-full bg-black/30" />

					<div className="absolute w-full h-full inset-0 flex flex-col justify-center items-center text-white gap-4">
						<h3 className="text-6xl md:text-4xl">SKAPA NY KUNDPROFIL</h3>
						<p className="text-center text-lg text-white/90 md:text-xs md:w-10/12">
							För att kunna göra en beställning måste du skapa en kundprofil.
							<br />
							Att skapa en kundprofil är gratis, och du förbinder dig inte att köpa någonting.
						</p>
					</div>
				</div>

				<div className="bg-[#E0E0E0] py-20 px-40 lg:px-20 md:px-10 md:py-10 sm:px-2">
					<div className="bg-white">
						<div className="border-b border-[#D7D7D7] py-8 flex justify-center items-center">
							<h2 className="text-lg">Ange dina uppgifter för att skapa ett konto.</h2>
						</div>
						<div className="border-b border-[#D7D7D7]">
							<div className="flex flex-col mx-auto w-[28rem] gap-5 py-16">
								<p className="text-sm text-fake text-end">* Obligatoriska fält</p>
								<div className="flex gap-5">
									<input
										type="text"
										className="input flex-1"
										placeholder="Förnamn"
										value={firstName}
										onChange={(e) => setFirstName(e.target.value)}
									/>
									<input
										type="text"
										className="input flex-1"
										placeholder="Efternamn"
										value={lastName}
										onChange={(e) => setLastName(e.target.value)}
									/>
								</div>
								<input
									type="email"
									className="input"
									placeholder="E-postaddress"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
								<input
									type="password"
									className="input"
									placeholder="Lösenord"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								/>
								<input
									type="password"
									className="input"
									placeholder="Bekräfta lösenord"
									value={confirmPassword}
									onChange={(e) => setConfirmPassword(e.target.value)}
								/>

								<div className="flex gap-4">
									<input
										type="checkbox"
										className="w-5 h-5 mt-1 text-fake border border-black/60 focus:ring-fake focus:ring-offset-0 focus:outline-0 focus:outline-offset-0 hover:border-black transition cursor-pointer"
										id="updates"
									/>
									<label htmlFor="updates">
										Jag vill få uppdateringar om Köttfabrikens exklusiva produkter, tjänster och
										aktiviteter, genom traditionella och digitala kommunikationsmetoder
									</label>
								</div>

								<p>
									Köttfabriken kommer att behandla dina personuppgifter i enlighet med
									integritetsmeddelandet och du kan när som helst återkalla samtycket som anges ovan.
								</p>

								<div className="flex justify-between text-sm mt-8 text-[#323232]">
									<p
										className="cursor-pointer font-normal hover:text-black transition"
										onClick={() => setLogin(true)}
									>
										LOGGA IN
									</p>
									<a href="" className="font-normal hover:text-black transition">
										GLÖMT LÖSENORD
									</a>
								</div>

								<a href="" className="btn text-center py-3">
									SKAPA KONTO
								</a>

								<div className="relative mt-4">
									<div className="absolute inset-0 flex items-center" aria-hidden="true">
										<div className="w-full border-t border-[#D9D9D9]" />
									</div>
									<div className="relative flex justify-center">
										<div className="bg-white px-6 flex gap-4">
											<a href="">
												<img src={Apple} alt="" className="w-[35px] h-[35px]" />
											</a>
											<a href="">
												<img src={Google} alt="" className="w-[35px] h-[35px]" />
											</a>
											<a href="">
												<img src={Facebook} alt="" className="w-[35px] h-[35px]" />
											</a>
										</div>
									</div>
								</div>
								<h3 className="text-lg text-center tracking-[0.2em] text-[#323232]">
									ELLER LOGGA IN MED
								</h3>
							</div>
						</div>
						<div className="flex justify-between items-center py-10 px-16 1.5xl:flex-col 1.5xl:items-start 1.5xl:gap-5 sm:px-4">
							<div>
								<h3 className="text-4xl md:text-3xl">Har du en fråga?</h3>
								<p className="md:text-sm">
									Du kan hitta svaren på våra vanligaste frågor och hur du ska kontakta oss på våra
									kundservice sidor.
									<br />
									Följ länken för att komma dit.
								</p>
							</div>

							<div className="">
								<Link to={"/faq"} className="btn">
									FRÅGOR & SVAR
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Login open={login} setOpen={setLogin} />
		</>
	);
};

export default Register;
