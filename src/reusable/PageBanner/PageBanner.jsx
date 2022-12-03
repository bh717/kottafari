import { Link } from "react-router-dom";

function PageBanner({ image, title, url1, url2, url3 }) {
    return ( 
        <div className="w-full h-[45vh] sm:h-[60vh] bg-cover bg-center bg-no-repeat"
        id="banner"
        style={{
            backgroundImage: `linear-gradient(to bottom, rgb(0 0 0 / 30%), rgb(0 0 0 / 30%)), url(${image})`,
        }}>
            <div className="top-0 left-0 w-full h-full bg-black/30" />

            <div className="w-full h-full inset-0 flex flex-col justify-center items-center text-white gap-4">
                <h2 className="text-xl md:text-lg"><Link to={`/${url1}`}>{url1}</Link> / <Link to={`/${url2}`}>{url2}</Link> / <Link to={`/${url3}`}>{url3}</Link></h2>
                <h3 className="text-6xl md:text-4xl">{title}</h3>
            </div>
        </div>
     );
}

export default PageBanner;