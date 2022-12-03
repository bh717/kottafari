function Info() {
	return(
		<>
			<div className="" id="">
				<div className="grid grid-cols-2 gap-x-5 gap-y-3">
					<div className="col-span-2">
						<label className="text-xs">Kön</label>
						<select name="" id="" defaultValue="--" className="mt-1 block w-full border-gray-300 py-2 pl-3 pr-10 text-base focus:border-[#b7410d] focus:outline-none focus:ring-[#b7410d] sm:text-sm">
							<option>--</option>
							<option>Man</option>
							<option>Kvinna</option>
						</select>
					</div>

					<div className="col-span-1">
						<label className="text-xs">Förnamn</label>
						<input type="text" name="" id="" autoComplete="" className="w-full focus:border-[#b7410d] focus:outline-none focus:ring-[#b7410d]" />
					</div>
					<div className="col-span-1">
						<label className="text-xs">Efternamn</label>
						<input type="text" name="" id="" autoComplete="" className="w-full focus:border-[#b7410d] focus:outline-none focus:ring-[#b7410d]" />
					</div>

					<div className="col-span-2">
						<label className="text-xs">E-post</label>
						<input type="email" name="" id="" autoComplete="" className="w-full focus:border-[#b7410d] focus:outline-none focus:ring-[#b7410d]" />
					</div>

					<div className="col-span-2">
						<label className="text-xs">Telefonnummer</label>
						<input type="tel" name="" id="" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" autoComplete="" className="w-full focus:border-[#b7410d] focus:outline-none focus:ring-[#b7410d]" />
					</div>

					<div className="col-span-2">
						<label className="text-xs">Födelsedatum</label>
						<input type="date" name="" id="" value="YYYY &#47; MM &#47; DD" autoComplete="" className="w-full text-center uppercase focus:border-[#b7410d] focus:outline-none focus:ring-[#b7410d]" />
					</div>

					<div className="col-span-1 mt-2">
						<button className="w-full h-[42px] text-xs text-center uppercase tracking-wider bg-[#222222] text-white focus:border-[#b7410d] focus:outline-none focus:ring-[#b7410d]">Avbryt</button>
					</div>

					<div className="col-span-1 mt-2">
						<button className="w-full h-[42px] text-xs text-center uppercase tracking-wider bg-[#b7410d] text-white focus:border-[#b7410d] focus:outline-none focus:ring-[#b7410d]">Spara</button>
					</div>
				</div>
			</div>
		</>
	)	
}

export default Info;
