/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { Link } from "react-router-dom";
import Banner from "../../assets/images/banners/register.png";
import Apple from "../../assets/icons/apple.png";
import Google from "../../assets/icons/google.png";
import Facebook from "../../assets/icons/facebook.png";
import Login from "../../components/Login/Login";
import api from "../../components/api/woocommerce";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import poster from "../../components/api/register";
import axios from 'axios';

const Register = () => {
  const [message, setMessage] = useState("");
  const [updates, setUpdates] = useState(false);
  const [login, setLogin] = useState(false);
  const [successful, setSuccessful] = useState(false);
  const [showFlag, setFlag] = useState(false);
  let navigate = useNavigate();

  function customerRegister(formvalue) {
    const { firstname, lastname, email, password, confirm } = formvalue;
    console.log(firstname, lastname, email, password, confirm);
    const data = {
      email: email,
      first_name: firstname,
      last_name: lastname,
      username: email,
      password: password,
      passwordRepeat: confirm,
    };

    api
      .post(
        "customers",
        {
          "Content-Type": "application/json",
          Authorization: "JWT fefege...",
        },
        data
      )
      .then((response) => {
        console.log(response.data);
        return navigate("/");
      })
      .catch((error) => {
        console.log(error.response.header);
        console.log(error.response.data);
        setMessage(error.response.message);
        alert(error.response.message);
      });
   
  }

  const handleuser = async (data) => {
    try {
      const wooReq = await poster("/wp-json/wc/v3/customers", data, "POST");
      const wooRes = await wooReq.json();

      if (wooRes.code === "registration-error-email-exists") {
        alert("An account is already registered with this email address.");
      } else if (wooRes.code === "registration-error-username-exists") {
        alert(
          "An account is already registered with this username. Please choose another."
        );
      } else {
        console.log(wooReq, wooRes);
        alert(`Success`);
      }
    } catch (error) {
      alert("Server error");
    }
  };

  const initialValue = {
    firstname: "",
    lastname: "",
    invitecode: "",
    email: "",
    password: "",
    confirm: "",
  };

  const onGoogleRegister = () => {
    alert("google");
    const res = fetch(
      "https://kottfabriken.wargmedia.nu/wp-json/nextend-social-login/v1/123/get_user"
    );
    let response;
    if (res.status === 200) {
      response = res.json();
      console.log(response);
    }
    console.log("Getting login info error");
  };

  const onFaceBookRegister = () => {
    const data = {
      username: "firstname",
      first_name: "firstname",
      last_name: "lastname",
      email: "sdfsdf.sdfsdf@gmail.com",
      password: "password"
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "Access-Control-Allow-Origin" },
      body: JSON.stringify(data),
      mode:"no-cors"
    };
    fetch("https://kottfabriken.wargmedia.nu/wp/v2/users", requestOptions)
      .then((response) => response.json())
      .then((data) => this.setState({ postId: data.id }));
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .test(
        "len",
        "The username must be between 3 and 20 characters.",
        (val) =>
          val && val.toString().length >= 3 && val.toString().length <= 30
      )
      .required("This field is required!"),
    password: Yup.string()
      .required("Password is mendatory")
      .min(3, "Password must be at 3 char long"),
    confirm: Yup.string()
      .required("Password is mendatory")
      .oneOf([Yup.ref("password")], "Passwords does not match"),
  });

  return (
    <>
      <div>
        <div className="relative">
          <img
            src={Banner}
            alt=""
            className="h-[478px] md:h-[239px] object-cover object-center"
          />

          <div className="absolute top-0 left-0 w-full h-full bg-black/30" />

          <div className="absolute w-full h-full inset-0 flex flex-col justify-center items-center text-white gap-4">
            <h3 className="text-6xl md:text-4xl">SKAPA NY KUNDPROFIL</h3>
            <p className="text-center text-lg text-white/90 md:text-xs md:w-10/12">
              För att kunna göra en beställning måste du skapa en kundprofil.
              <br />
              Att skapa en kundprofil är gratis, och du förbinder dig inte att
              köpa någonting.
            </p>
          </div>
        </div>

        <div className="bg-[#E0E0E0] py-20 px-40 lg:px-20 md:px-10 md:py-10 sm:px-2">
          <div className="bg-white">
            <div className="border-b border-[#D7D7D7] py-8 flex justify-center items-center">
              <h2 className="text-lg">
                Ange dina uppgifter för att skapa ett konto.
              </h2>
            </div>
            <div className="border-b border-[#D7D7D7]">
              <div className="flex flex-col mx-auto w-[28rem] gap-5 py-16"></div>

              <Formik
                initialValues={initialValue}
                validationSchema={validationSchema}
                onSubmit={customerRegister}
              >
                <Form>
                  {!successful && (
                    <>
                      <div className="form-group flex flex-col mx-auto w-[28rem] gap-5 py-16">
                        <p className="text-sm text-fake text-end">
                          * Obligatoriska fält
                        </p>
                        <div className="flex gap-5 flex-col">
                          <div className="flex justify-between w-full">
                            <div>
                              <Field
                                name="firstname"
                                type="text"
                                className=" form-control input flex-1"
                                placeholder="Förnamn"
                              />
                            </div>
                            <div>
                              <Field
                                name="lastname"
                                type="text"
                                className=" form-control input flex-1"
                                placeholder="Efternamn"
                              />
                            </div>
                          </div>
                          <div className="flex w-full flex-col">
                            <Field
                              type="email"
                              className=" form-control input w-full"
                              placeholder="E-postaddress"
                              name="email"
                            />
                            <ErrorMessage
                              name="email"
                              component="div"
                              className="alert alert-danger"
                            />
                          </div>
                          <div className="flex w-full flex-col">
                            <Field
                              type="password"
                              placeholder="Lösenord"
                              className="form-control input"
                              name="password"
                            />
                            <ErrorMessage
                              name="password"
                              component="div"
                              className="alert alert-danger"
                            />
                          </div>
                          <div className="flex w-full flex-col">
                            <Field
                              name="confirm"
                              type="password"
                              className=" form-control input"
                              placeholder="Bekräfta lösenord"
                            />
                            <ErrorMessage
                              name="confirm"
                              component="div"
                              className="alert alert-danger"
                            />
                          </div>
                        </div>
                        <div className="flex gap-4">
                          <input
                            type="checkbox"
                            className="w-5 h-5 mt-1 text-fake border border-black/60 focus:ring-fake focus:ring-offset-0 focus:outline-0 focus:outline-offset-0 hover:border-black transition cursor-pointer"
                            id="updates"
                          />
                          <label htmlFor="updates">
                            Jag vill få uppdateringar om Köttfabrikens exklusiva
                            produkter, tjänster och aktiviteter, genom
                            traditionella och digitala kommunikationsmetoder
                          </label>
                        </div>

                        <p>
                          Köttfabriken kommer att behandla dina personuppgifter
                          i enlighet med integritetsmeddelandet och du kan när
                          som helst återkalla samtycket som anges ovan.
                        </p>

                        <div className="flex justify-between text-sm mt-8 text-[#323232]">
                          <p
                            className="cursor-pointer font-normal hover:text-black transition"
                            onClick={() => setLogin(true)}
                          >
                            LOGGA IN
                          </p>
                          <a
                            href=""
                            className="font-normal hover:text-black transition"
                          >
                            GLÖMT LÖSENORD
                          </a>
                        </div>

                        <button
                          className="btn text-center py-3 cursor-pointer"
                          type="submit"
                        >
                          SKAPA KONTO
                        </button>

                        <div className="relative mt-4">
                          <div
                            className="absolute inset-0 flex items-center"
                            aria-hidden="true"
                          >
                            <div className="w-full border-t border-[#D9D9D9]" />
                          </div>
                          <div className="relative flex justify-center">
                            <div className="bg-white px-6 flex gap-4">
                              {/* <a href=""> */}
                              <img
                                src={Apple}
                                alt=""
                                className="w-[35px] h-[35px] cursor-pointer"
                              />
                              {/* </a> */}
                              {/* <a href=""> */}
                              <img
                                src={Google}
                                alt=""
                                className="w-[35px] h-[35px] cursor-pointer"
                                onClick={() => {
                                  onGoogleRegister();
                                }}
                              />
                              {/* </a> */}
                              {/* <a href=""> */}
                              <img
                                src={Facebook}
                                alt=""
                                className="w-[35px] h-[35px] cursor-pointer"
                                onClick={() => {
                                  onFaceBookRegister();
                                }}
                              />
                              {/* </a> */}
                            </div>
                          </div>
                        </div>
                        <h3 className="text-lg text-center tracking-[0.2em] text-[#323232]">
                          ELLER LOGGA IN MED
                        </h3>
                      </div>
                      {message && (
                        <div className="form-group">
                          <div className="alert alert-danger" role="alert">
                            {message}
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </Form>
              </Formik>
            </div>
            <div className="flex justify-between items-center py-10 px-16 1.5xl:flex-col 1.5xl:items-start 1.5xl:gap-5 sm:px-4">
              <div>
                <h3 className="text-4xl md:text-3xl">Har du en fråga?</h3>
                <p className="md:text-sm">
                  Du kan hitta svaren på våra vanligaste frågor och hur du ska
                  kontakta oss på våra kundservice sidor.
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
