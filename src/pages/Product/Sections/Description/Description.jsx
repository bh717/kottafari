function Description() {
    return ( 
        <div className="w-full flex justify-center py-28">
            <div className="w-[85%] flex">
                <div className="flex flex-col gap-8 mr-[20%]">
                    <h1 className="font-rival text-xl uppercase tracking-wide">Beskrivning</h1>
                    <div className="flex flex-col gap-5">
                        <p className="">Är du på jakt efter en grill som klarar det mesta?</p>

                        <div className="">
                            <h2 className="">I detta komplettpaket ingår det:</h2>
                            <p className="">
                                - Big Green Egg Extra Large <br></br>
                                - Underrede (Nest) <br></br>
                                - Sidohyllor (Mates)
                            </p>
                        </div>

                        <div className="">
                            <h2 className="">Alla Egg är standardutrustade och levereras med:</h2>
                            <p className="">
                                - Rostfri nedre luftlucka <br></br>
                                - Rostfritt galler att grilla på <br></br>
                                - Vattenfast keramisk knopp till toppen för att avsluta grillningen <br></br>
                                - Gjutjärnsreglage för reglering av värmen till toppen <br></br>
                                - Dubbla lager glacering av hela Egget för skydd mot regn
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-8">
                    <h1 className="font-rival text-xl uppercase tracking-wide">Produkt information</h1>
                    <div className="flex gap-36">
                        <div className="flex flex-col gap-5">
                            <div className="flex flex-col gap-2">
                                <h1 className="font-rival uppercase tracking-wider">Vikt</h1>
                                <p className="font-rival font-thin">70 KG</p>
                            </div>

                            <div className="flex flex-col gap-2">
                                <h1 className="font-rival uppercase tracking-wider">Grillyta diameter</h1>
                                <p className="font-rival font-thin">Stora diameter<br></br>46 cm</p>
                            </div>

                            <div className="flex flex-col gap-2">
                                <h1 className="font-rival uppercase tracking-wider">Färg</h1>
                                <p className="font-rival font-thin">Mörkgrön</p>
                            </div>

                            <div className="flex flex-col gap-2">
                                <h1 className="font-rival uppercase tracking-wider">Modell</h1>
                                <p className="font-rival font-thin">Extra Large</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-5">
                            <div className="flex flex-col gap-2">
                                <h1 className="font-rival uppercase tracking-wider">Varumärke</h1>
                                <p className="font-rival font-thin">Big Green Egg</p>
                            </div>

                            <div className="flex flex-col gap-2">
                                <h1 className="font-rival uppercase tracking-wider">Grillyta diameter</h1>
                                <p className="font-rival font-thin">Stora diameter<br></br>46 cm</p>
                            </div>

                            <div className="flex flex-col gap-2">
                                <h1 className="font-rival uppercase tracking-wider">Artikelnummer</h1>
                                <p className="font-rival font-thin">A1016006018</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Description;