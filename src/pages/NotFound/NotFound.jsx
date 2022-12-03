import { Link } from "react-router-dom";
import Image from "./../../assets/images/error404/img.png"

export default function Example() {
	return (
	  <>
		<main
		  className="h-screen flex items-center justify-center bg-cover bg-top sm:bg-top"
		  style={{
			backgroundImage: `linear-gradient(to bottom, rgb(0 0 0 / 45%), rgb(0 0 0 / 45%)), url(${Image})`,
		}}
		>
		  <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8 lg:py-48">
			<p className="text-lg font-semibold text-white text-opacity-70">404</p>
			<h1 className="mt-2 text-5xl font-bold tracking-tight text-white sm:text-5xl">Uh oh! I think you’re lost.</h1>
			<p className="mt-2 text-xl font-base text-white text-opacity-70">
			  It looks like the page you’re looking for doesn't exist.
			</p>
			<div className="mt-6">
				<Link to="/" className="btn-white text-white">Go back home</Link>
			</div>
		  </div>
		</main>
	  </>
	)
  }
  