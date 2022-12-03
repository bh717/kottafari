/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import Apple from "../../assets/icons/apple.png";
import Google from "../../assets/icons/google.png";
import Facebook from "../../assets/icons/facebook.png";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import axios from 'axios';

function Login({ open, setOpen }) {
  const close = () => setOpen(false);
  const [successful, setSuccessful] = useState(false);
  let navigate = useNavigate();

  useEffect(() => { }, []);

  const initialValue = {
    email: "",
    password: "",
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
  });

  function handlelogin(formvalue) {
    const { email, password } = formvalue;
    console.log(email, password);

    const data = {
      username: email,
      password: password,
    };

    axios.post(`https://kottfabriken.wargmedia.nu/wp-json/jwt-auth/v1/token`, data)
      .then((res) => {
        console.log(res);
        const { token, user_nicename, user_email } = res.data;
        sessionStorage.setItem('token', token);
        sessionStorage.setItem('userName', user_nicename);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-200"
              enterFrom="opacity-0 scale-[0.25]"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-[0.25]"
            >
              <Dialog.Panel className="relative overflow-hidden bg-porche text-left shadow-xl transition-all w-96">
                <div className="flex flex-col items-center p-8 w-full">
                  <h3 className="text-2xl mb-5 uppercase tracking-wide">
                    Logga in
                  </h3>

                  <Formik
                    initialValues={initialValue}
                    validationSchema={validationSchema}
                    onSubmit={handlelogin}
                    className="flex flex-col gap-3 w-full"
                  >
                    <Form className="flex flex-col gap-3 w-full">
                      {!successful && (
                        <div className="flex flex-col gap-3 w-full">
                          <div className="form-group">
                            <Field
                              name="email"
                              type="email"
                              className="form-control input w-full"
                              placeholder="E-postaddress"
                            />
                            <ErrorMessage
                              name="email"
                              component="div"
                              className="alert alert-danger"
                            />
                          </div>
                          <div className="form-group">
                            <Field
                              name="password"
                              type="password"
                              className="form-control input w-full"
                              placeholder="Lösenord"
                            />
                            <ErrorMessage
                              name="password"
                              component="div"
                              className="alert alert-danger"
                            />
                          </div>
                          <div className="flex justify-end">
                            <a
                              href=""
                              className="text-xs text-black/90 hover:text-black transition"
                            >
                              Glömt lösenordet?
                            </a>
                          </div>

                          <button
                            className="btn bg-metal text-white py-3 uppercase"
                            type="submit"
                          >
                            Logga in
                          </button>
                          <div className="relative mt-4">
                            <div className="relative flex justify-center">
                              <div className="px-6 flex gap-4">
                                <img
                                  src={Apple}
                                  alt=""
                                  className="w-[35px] h-[35px] cursor-pointer"
                                />
                                <img
                                  src={Google}
                                  alt=""
                                  className="w-[35px] h-[35px] cursor-pointer"
                                // onClick={() => {
                                />
                                <img
                                  src={Facebook}
                                  alt=""
                                  className="w-[35px] h-[35px] cursor-pointer"
                                // onClick={() => {
                                //   onFaceBookRegister();
                                // }}
                                />
                              </div>
                            </div>
                          </div>
                          <p className="text-center text-sm border-t border-black/10 py-3 mt-3">
                            Har du inget konto?{" "}
                            <Link
                              to="/register"
                              className="text-fake"
                              onClick={close}
                            >
                              Skapa ett här.
                            </Link>
                          </p>
                        </div>
                      )}
                    </Form>
                  </Formik>
                </div>
                <div className="absolute right-0 top-0 p-2">
                  <button
                    className="p-2 rounded-full group hover:bg-black/10 transition"
                    onClick={close}
                  >
                    <XMarkIcon className="w-6 h-6 text-black/60 group-hover:text-black transition" />
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default Login;
