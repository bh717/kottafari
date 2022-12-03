import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useState } from 'react';
import * as Yup from "yup";

function StepOne({ checkstep, setCheckStep }) {

    const [firstnam, setfirstname] = useState("");
    const [surnam, setsurename] = useState("");
    const [add, setadd] = useState("");
    const [post, setpost] = useState("");
    const [city, setcity] = useState("");
    const [email, setemail] = useState("");
    const [phone, setphone] = useState("");

    const [selectValue, setSelectValue] = useState('option1');

    const initialValue = {
        firstname: "",
        surname: "",
        address: "",
        postnumber: "",
        city: "",
        email: "",
        phone: "",
    };

    const validationSchema = Yup.object().shape({
        firstname: Yup.string()
            .test(
                "len",
                "The username must be between 3 and 20 characters.",
                (val) =>
                    val && val.toString().length >= 3 && val.toString().length <= 30
            )
            .required("This field is required!"),
        surname: Yup.string()
            .test(
                "len",
                "The username must be between 3 and 20 characters.",
                (val) =>
                    val && val.toString().length >= 3 && val.toString().length <= 30
            )
            .required("This field is required!"),
        address: Yup.string()
            .test(
                "len",
                "The username must be between 3 and 20 characters.",
                (val) =>
                    val && val.toString().length >= 3 && val.toString().length <= 30
            )
            .required("This field is required!"),
        postnumber: Yup.string()
            .test(
                "len",
                "The username must be between 3 and 20 characters.",
                (val) =>
                    val && val.toString().length >= 3 && val.toString().length <= 30
            )
            .required("This field is required!"),
        city: Yup.string()
            .test(
                "len",
                "The username must be between 3 and 20 characters.",
                (val) =>
                    val && val.toString().length >= 3 && val.toString().length <= 30
            )
            .required("This field is required!"),
        email: Yup.string()
            .test(
                "len",
                "The username must be between 3 and 20 characters.",
                (val) =>
                    val && val.toString().length >= 3 && val.toString().length <= 30
            )
            .required("This field is required!"),
        phone: Yup.string()
            .test(
                "len",
                "The username must be between 3 and 20 characters.",
                (val) =>
                    val && val.toString().length >= 3 && val.toString().length <= 30
            )
            .required("This field is required!"),
    });

    function handlelogin(formvalue) {
        const { firstname, surname, address, postnumber, city, email, phone } = formvalue;
        setfirstname(firstname);
        setsurename(surname);
        setadd(address);
        setpost(postnumber);
        setcity(city);
        setemail(email);
        setphone(phone);

        console.log("checkstepdf:", checkstep);
        setCheckStep(checkstep => "check2");
        console.log("checkstepdf:", checkstep);
    }

    const isButtonSelected = (value) => {
        if (selectValue === value) {
            return true;
        }
    };

    

return (
    <>
        <div className="w-full" id="unfilled" >

            <div className={`w-full flex  py-[1rem] ${checkstep === "check1" ? "bg-transparent" : "bg-[#76351A]"}`} >
                <h1 className={`stepTitle px-[0.5rem] ${checkstep === "check1" ? "text-black" : "text-white"}`}>1. Faktura & leveransinformation</h1>
            </div>

            <div className='w-full'>
                {checkstep === "check1" ? (
                    <Formik
                        initialValues={initialValue}
                        validationSchema={validationSchema}
                        onSubmit={handlelogin}
                    >
                        <Form >
                            <div className="flex grid grid-rows-3 gap-5 py-[1rem]">
                                <div className="flex grid grid-cols-2 gap-5">
                                    <div className="flex w-full flex-col">
                                        <Field className="step1Input" type="text" name="firstname" placeholder="Förnamn"></Field> {/* Firstname */}
                                        <ErrorMessage
                                            name="firstname"
                                            component="div"
                                            className="alert alert-danger text-[#ff0000] text-[12px]"
                                        />
                                    </div>
                                    <div className="flex w-full flex-col">
                                        <Field className="step1Input" type="text" name="surname" placeholder="Efternamn"></Field> {/* Surname */}
                                        <ErrorMessage
                                            name="surname"
                                            component="div"
                                            className="alert alert-danger text-[#ff0000] text-[12px]"
                                        />
                                    </div>
                                </div>

                                <div className="flex grid grid-cols-2 gap-5">
                                    <div className="flex w-full flex-col">
                                        <Field type="text" className="step1Input" name="address" placeholder="Leveransadress"></Field> {/* Delivery adess */}
                                        <ErrorMessage
                                            name="address"
                                            component="div"
                                            className="alert alert-danger text-[#ff0000] text-[12px]"
                                        />
                                    </div>

                                    <div className="flex w-full grid grid-cols-2 gap-5">
                                        <div className="flex w-full flex-col">
                                            <Field type="text" className="step1Input" name="postnumber" placeholder="Postnr"></Field> {/* Postnumber */}
                                            <ErrorMessage
                                                name="postnumber"
                                                component="div"
                                                className="alert alert-danger text-[#ff0000] text-[12px]"
                                            />
                                        </div>

                                        <div className="flex w-full flex-col">
                                            <Field type="text" className="step1Input" name="city" placeholder="Ort"></Field> {/* City */}
                                            <ErrorMessage
                                                name="city"
                                                component="div"
                                                className="alert alert-danger text-[#ff0000] text-[12px]"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-[#76351A] text-[9px]">E-post</p>
                                    <div className="flex grid grid-cols-2 gap-5">
                                        <div className="flex w-full flex-col">
                                            <Field type="email" className="step1Input" name="email" placeholder="leo@wargsolution.se"></Field> {/* Email */}
                                            <ErrorMessage
                                                name="email"
                                                component="div"
                                                className="alert alert-danger text-[#ff0000] text-[12px]"
                                            />
                                        </div>
                                        <div className="flex w-full flex-col">
                                            <Field type="text" className="step1Input" name="phone" placeholder="Telefonnummer"></Field> {/* Phone */}
                                            <ErrorMessage
                                                name="phone"
                                                component="div"
                                                className="alert alert-danger text-[#ff0000] text-[12px]"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="flex justify-between items-center">
                                <div className="flex flex-col">
                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        Value={selectValue}
                                        name="radio-buttons-group"
                                    >

                                        <div className="flex py-[0.5rem] items-center" >
                                            <Radio id="option1" value="option1" checkedIcon={<CheckCircleRoundedIcon className='text-[#76351A]' />} checked={isButtonSelected('option1')} />
                                            <p className="text-[#222222] text-[14px] pl-[10px] cursor-pointer" onClick={() => { setSelectValue('option1') }}>Jag vill prenumerera på Köttfabrikens nyhetsbrev</p>
                                        </div> {/* Option 1 */}

                                        <div className="flex items-center">
                                            <Radio id="option2" value="option2" checkedIcon={<CheckCircleRoundedIcon className='text-[#76351A]' />} checked={isButtonSelected('option2')} />
                                            <p className="text-[#222222] text-[14px] pl-[10px] cursor-pointer" onClick={() => { setSelectValue('option2') }}>Jag godkänner <a className="underline cursor-pointer">köpvillkoren </a>. Jag bekräftar också att jag <br /> har läst <a className="underline cursor-pointer">Integritetspolicyn</a> </p>
                                        </div> {/* Option 2 */}

                                    </RadioGroup>
                                </div>

                                <div className="">
                                    <button type="submit" className="bg-[#76351A] w-[180px] h-[45px] text-[white] text-[11px]">VÄLJ LEVERANSALTERNATIV</button> {/* Next step */}
                                </div>
                            </div>
                        </Form>
                    </Formik>
                ) : (
                    <div className='py-[1rem] pl-[1rem]'>
                        <p className='text-[16px] font-rival'>{firstnam}</p>
                        <p className='text-[16px] font-rival'>{surnam}</p>
                        <p className='text-[16px] font-rival'>{add}</p>
                        <p className='text-[16px] font-rival'>{post}</p>
                        <p className='text-[16px] font-rival'>{city}</p>
                        <p className='text-[16px] font-rival'>{email}</p>
                        <p className='text-[16px] font-rival'>{phone}</p>
                    </div>
                )}
            </div>
        </div>

        <div className="" id="filled"></div>
    </>
);
}

export default StepOne;