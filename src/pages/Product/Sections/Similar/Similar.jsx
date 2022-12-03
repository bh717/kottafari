import { Product } from "./../../../../reusable/index";

import GiuseppeGiusti from "./../../../../assets/images/products/giuseppe_giusti.png";

function Similar() {
    return ( 
        <section className="w-full flex justify-center pt-16 pb-32">
            <div className="w-[85%] flex flex-col gap-5">
                <div className="flex justify-between items-end">
                    <h1 className="text-4xl text-[#222222] capitalize">Liknande produkter</h1>
                    <a href="#" className="view-all">Visa alla</a>
                </div>
                <div className="grid grid-cols-4 grid-rows-1 gap-5">
                    <Product title="Giuseppe Giusti" price={890} img={GiuseppeGiusti} flag="SE"></Product>
                    <Product title="Giuseppe Giusti" price={890} img={GiuseppeGiusti} flag="SE"></Product>
                    <Product title="Giuseppe Giusti" price={890} img={GiuseppeGiusti} flag="SE"></Product>
                    <Product title="Giuseppe Giusti" price={890} img={GiuseppeGiusti} flag="SE"></Product>
                </div>
            </div>
        </section>
     );
}

export default Similar;