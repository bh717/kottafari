import StepOne from "./steps/stepone";
import StepTwo from "./steps/steptwo";
import StepThree from "./steps/stepthree";
import { useState } from 'react';

function Information() {
    const [checkstep, setCheckStep] = useState("check1");

    return (
        <>
            <div className="w-full flex flex-col ">
                <div className="flex justify-between w-full flex-col py-[1rem]">
                    <div className="">
                        <h1 className="font-garamond text-[30px] text-[#222222] font-normal">KÖTTFABRIKEN</h1>
                    </div>

                    <div className="flex self-end">
                        <a className="">
                            <span className="text-[#747474] font-light font-rival text-[14px]">FORTSÄTT HANDLA</span>
                        </a>
                    </div>
                </div>

                {/* 
                className "done" means that the information is fully filled in & 
                need means the information is still needed and note done.
                */}

                <div className="flex w-full flex-col">
                    <div className={`w-full open py-[2rem] ${checkstep !== "check1" ? "bg-[#FBFAF4]" : "bg-white"}`}>
                        <div className="w-full">
                            <StepOne checkstep={checkstep} setCheckStep={setCheckStep} />
                        </div>
                    </div>

                    <div className={`w-full open pt-[2rem] ${checkstep !== "check2" ? "bg-[#FBFAF4]" : "bg-white"}`}>
                        <div className="w-full">
                            <StepTwo checkstep={checkstep} setCheckStep={setCheckStep} />
                        </div>
                    </div>

                    <div className={`w-full open pt-[2rem] ${checkstep !== "check3" ? "bg-[#FBFAF4]" : "bg-white"}`}>
                        <div className="w-full">
                            <StepThree checkstep={checkstep} setCheckStep={setCheckStep} />
                        </div>
                    </div>
                </div>

                <div className="w-full flex flex-start py-[2rem]">
                    <a className="">
                        <span className="uppercase cursor-pointer text-[14px] text-[#222222] font-rival" onClick={()=>{setCheckStep("check1")}}>Retur information</span>
                    </a>
                </div>
            </div>
        </>
    );
}

export default Information;