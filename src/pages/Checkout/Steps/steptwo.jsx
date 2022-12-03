import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import postCard from '../../../assets/images/checkout/step2/Postnord logo.png'
import postCard1 from '../../../assets/images/checkout/step2/Postnord logo1.png'
import postCard2 from '../../../assets/images/checkout/step2/Postnord logo2.png'
import { useState } from 'react';

function StepTwo({ checkstep, setCheckStep }) {

    const [selectValue, setSelectValue] = useState('option1');

    function onCheck2() {
        setCheckStep(checkstep => "check3");
    }

    function onValueChange(e) {
        setSelectValue(e.target.value);
    }

    const isButtonSelected = (value) => {
        if (selectValue === value) {
            return true;
        }
    };

    return (
        <>
            <div className="w-full" id="unfilled" >

                <div className={`w-full flex  py-[1rem] ${checkstep !== "check3" ? "bg-transparent" : "bg-[#76351A]"}`} >
                    <h1 className={`stepTitle px-[0.5rem] ${checkstep !== "check3" ? "text-black" : "text-white"}`}>2. Välj leveransalternativ</h1>
                </div>

                {checkstep === "check2" ? (
                    <div className='w-full'>

                        <div className="flex w-full items-center">
                            <div className="flex flex-col w-full">
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    Value={selectValue}
                                    className='w-full'
                                    name="radio-buttons-group"
                                    onChange={onValueChange}
                                >
                                    <div className="flex py-[0.5rem] flex-row w-full border-b-[1px] border-[#D2D2D2] pr-[2rem]" >
                                        <Radio id="option1" value="option1" checkedIcon={<CheckCircleRoundedIcon className='text-[#76351A]' />} checked={isButtonSelected('option1')}/>
                                        <div className={`flex flex-col w-full cursor-pointer ${selectValue === 'option1' ? "opacity-100" : "opacity-50"}`} onClick={() => { setSelectValue('option1') }}>
                                            <p className="text-[#222222] text-[16px] pl-[10px] font-normal font-rival">Utlämningställe med Postnord</p>
                                            <p className='w-full text-right font-rival text-[12px]'>Gratis</p>
                                            <div className='flex w-full justify-between flex-row pt-[10px]'>
                                                <p className="text-[#222222] text-[12px] pl-[10px]">-Paketet skickas till ditt närmsta utlämningsställe</p>
                                                <img className="w-[61px] h-[11px]" src={postCard} />
                                            </div>
                                            <p className="text-[#222222] text-[12px] pl-[10px]">-Passar dig som vill hämta ut paketet på egen hand</p>
                                            <p className="text-[#222222] text-[12px] pl-[10px]">-leveranstid 3-5 dagar (Gäller inte anpassade produkter)</p>
                                        </div>
                                    </div> {/* Option 1 */}

                                    <div className="flex py-[0.5rem] flex-row w-full border-b-[1px] border-[#D2D2D2] pr-[2rem]" >
                                        <Radio id="option2" value="option2" checkedIcon={<CheckCircleRoundedIcon className='text-[#76351A]' />} checked={isButtonSelected('option2')}/>
                                        <div className={`flex flex-col w-full cursor-pointer ${selectValue === 'option2' ? "opacity-100" : "opacity-50"}`} onClick={() => { setSelectValue('option2') }}>
                                            <p className="text-[#222222] text-[16px] pl-[10px] font-normal font-rival">Hemkörning med Gordon delivery</p>
                                            <p className='w-full text-right font-rival text-[12px]'>250 kr</p>
                                            <div className='flex w-full justify-between flex-row pt-[10px]'>
                                                <p className="text-[#222222] text-[12px] pl-[10px]">-Paketet körs hem och lämnas utanför din dörr</p>
                                                <img className="w-[61px] h-[17px]" src={postCard1} />
                                            </div>
                                            <p className="text-[#222222] text-[12px] pl-[10px]">-Passar dig som inte vill ta dig till ett ombud</p>
                                            <p className="text-[#222222] text-[12px] pl-[10px]">-leveranstid 3-5 dagar (Gäller inte anpassade produkter)</p>
                                        </div>
                                    </div> {/* Option 2 */}

                                    <div className="flex py-[0.5rem] flex-row w-full border-b-[1px] border-[#D2D2D2] pr-[2rem]" >
                                        <Radio id="option3" value="option3" checkedIcon={<CheckCircleRoundedIcon className='text-[#76351A]' />} checked={isButtonSelected('option3')}/>
                                        <div className={`flex flex-col w-full cursor-pointer ${selectValue === 'option3' ? "opacity-100" : "opacity-50"}`} onClick={() => { setSelectValue('option3') }}>
                                            <p className="text-[#222222] text-[16px] pl-[10px] font-normal font-rival">Hämta ut ditt paket med Budbee</p>
                                            <p className='w-full text-right font-rival text-[12px]'>150 kr</p>
                                            <div className='flex w-full justify-between flex-row pt-[10px]'>
                                                <p className="text-[#222222] text-[12px] pl-[10px]">-Paketet körs till närmsta låda</p>
                                                <img className="w-[61px] h-[21px]" src={postCard2} />
                                            </div>
                                            <p className="text-[#222222] text-[12px] pl-[10px]">-Passar dig som vill skippa köer och snabbt hämta ut ditt paket</p>
                                            <p className="text-[#222222] text-[12px] pl-[10px]">-leveranstid 1-3 dagar (Gäller inte anpassade produkter)</p>
                                        </div>
                                    </div> {/* Option 3 */}

                                </RadioGroup>
                            </div>
                        </div>
                        <div className="flex w-full justify-end py-[1rem]">
                            <button onClick={() => onCheck2()} className="bg-[#76351A] w-[180px] h-[45px] text-[white] text-[11px]">VÄLJ LEVERANSALTERNATIV</button> {/* Next step */}
                        </div>
                    </div>
                ) : (
                    <>
                        {checkstep === "check3" && (
                            <div className='w-full py-[1rem]'>
                                {selectValue === "option1" && (
                                    <div className={`flex flex-col w-full`}>
                                        <p className="text-[#222222] text-[16px] pl-[10px] font-normal font-rival">Utlämningställe med Postnord</p>
                                        <p className='w-full text-right font-rival text-[12px]'>Gratis</p>
                                        <div className='flex w-full justify-between flex-row pt-[10px]'>
                                            <p className="text-[#222222] text-[12px] pl-[10px]">-Paketet skickas till ditt närmsta utlämningsställe</p>
                                            <img className="w-[61px] h-[11px]" src={postCard} />
                                        </div>
                                        <p className="text-[#222222] text-[12px] pl-[10px]">-Passar dig som vill hämta ut paketet på egen hand</p>
                                        <p className="text-[#222222] text-[12px] pl-[10px]">-leveranstid 3-5 dagar (Gäller inte anpassade produkter)</p>
                                    </div>
                                )}
                                {selectValue === "option2" && (
                                    <div className={`flex flex-col w-full cursor-pointer ${selectValue === 'option2' ? "opacity-100" : "opacity-50"}`}>
                                        <p className="text-[#222222] text-[16px] pl-[10px] font-normal font-rival">Hemkörning med Gordon delivery</p>
                                        <p className='w-full text-right font-rival text-[12px]'>250 kr</p>
                                        <div className='flex w-full justify-between flex-row pt-[10px]'>
                                            <p className="text-[#222222] text-[12px] pl-[10px]">-Paketet körs hem och lämnas utanför din dörr</p>
                                            <img className="w-[61px] h-[17px]" src={postCard1} />
                                        </div>
                                        <p className="text-[#222222] text-[12px] pl-[10px]">-Passar dig som inte vill ta dig till ett ombud</p>
                                        <p className="text-[#222222] text-[12px] pl-[10px]">-leveranstid 3-5 dagar (Gäller inte anpassade produkter)</p>
                                    </div>
                                )}
                                {selectValue === "option3" && (
                                    <div className={`flex flex-col w-full cursor-pointer ${selectValue === 'option3' ? "opacity-100" : "opacity-50"}`}>
                                        <p className="text-[#222222] text-[16px] pl-[10px] font-normal font-rival">Hämta ut ditt paket med Budbee</p>
                                        <p className='w-full text-right font-rival text-[12px]'>150 kr</p>
                                        <div className='flex w-full justify-between flex-row pt-[10px]'>
                                            <p className="text-[#222222] text-[12px] pl-[10px]">-Paketet körs till närmsta låda</p>
                                            <img className="w-[61px] h-[21px]" src={postCard2} />
                                        </div>
                                        <p className="text-[#222222] text-[12px] pl-[10px]">-Passar dig som vill skippa köer och snabbt hämta ut ditt paket</p>
                                        <p className="text-[#222222] text-[12px] pl-[10px]">-leveranstid 1-3 dagar (Gäller inte anpassade produkter)</p>
                                    </div>
                                )}
                            </div>
                        )}
                    </>
                )}

            </div>


            <div className="" id="filled"></div>
        </>
    );
}

export default StepTwo;