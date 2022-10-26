import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import phone from "phone";
import cn from "classnames";
import HLoader from "../components/HLoader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import { useState, useEffect, createRef } from "react";
import CustomSelect from "./CustomSelect";
import ReCAPTCHA from "react-google-recaptcha";
import { sendRPC } from "../lib/rpc";
import { useRouter } from "next/router";

const merchandiseTypes = [
  {
    name: "Supermarket",
    value: "supermarket",
  },
  {
    name: "Health & Beauty",
    value: "health_and_beauty",
  },
  {
    name: "Home & Office",
    value: "home_and_office",
  },
  {
    name: "Phone & Tablets",
    value: "phone_and_tablets",
  },
  {
    name: "Computing",
    value: "computing",
  },
  {
    name: "Electronics",
    value: "electronics",
  },
  {
    name: "Women's Fashion",
    value: "women's_fashion",
  },
  {
    name: "Men's Fashion",
    value: "men's_fashion",
  },
  {
    name: "Gaming",
    value: "gaming",
  },
  {
    name: "Sporting Goods",
    value: "sporting_goods",
  },
  {
    name: "Automobile",
    value: "automobile",
  },
];

const fields = [
  {
    type: "text",
    name: "name",
    placeholder: "",
    required: true,
    label: "Name",
  },

  {
    type: "email",
    name: "email",
    placeholder: "",
    required: true,
    label: "Email",
  },

  {
    type: "text",
    name: "phone",
    placeholder: "",
    required: true,
    label: "Phone number",
  },

  {
    type: "radio",
    name: "category",
    placeholder: "",
    required: true,
    label: "Which best describes you",
    radios: [
      {
        name: "Vendor",
        value: "VENDOR",
      },

      {
        name: "Driver",
        value: "DRIVER",
      },

      {
        name: "User",
        value: "CUSTOMER",
      },
    ],
    subset: [
      {
        name: "vehicleType",
        when: "DRIVER",
        label: "Which will you be driving",

        type: "radio",

        options: [
          {
            name: "Truck",
            value: "TRUCK",
          },
          {
            name: "Car",
            value: "CAR",
          },
          {
            name: "Bike",
            value: "BIKE",
          },
        ],
      },

      {
        name: "merchandiseType",
        when: "VENDOR",
        label: "Which will you be selling",

        type: "select",

        options: [
          {
            name: "Groceries",
            value: "groceries",
          },
          {
            name: "Accessories",
            value: "accessories",
          },
          {
            name: "Clothes",
            value: "clothes",
          },
        ],
      },
    ],
  },

  {
    type: "text",
    as: "textarea",
    name: "more",
    placeholder: "",
    required: false,
    label: "Tell us more",
  },
];

const baseValidationSchema = {
  name: Yup.string()
    .trim()
    .min(3, "Too short!")
    .max(64, "Too long!")
    .label("Name")
    .required("Name cannot be blank!"),
  email: Yup.string()
    .trim()
    .email("Your email is invalid!")
    .label("Email")
    .required("Email cannot be blank!"),
  phone: Yup.string()
    .trim()
    .test("is-valid-phone-number", "Not a invalid phone number!", (v) => {
      return phone(v, { country: "NG" }).isValid;
    })
    .label("Phone Number")
    .required("Phone number cannot be blank!"),
  category: Yup.string()
    .trim()
    .oneOf(["VENDOR", "DRIVER", "CUSTOMER"], "Your selection is invalid!")
    .label("Category")
    .required("Choose one that describes you best!"),

  more: Yup.string()
    .trim()
    .test("is-enough-words", "At least 10 words!", (v) => {
      if (v === undefined) return true;
      if (v.length === 0) return true;
      return v.split(" ").length >= 10;
    })
    .min(40, "Too short!")
    .label("More"),
};

const driverAddonSchema = {
  vehicleType: Yup.string()
    .trim()
    .oneOf(["TRUCK", "CAR", "BIKE"], "Your selection is invalid!")
    .label("Vehicle Type")
    .required("Choose one that describes you best!"),
};

const vendorAddonSchema = {
  merchandiseType: Yup.string()
    .trim()
    .oneOf(
      merchandiseTypes.map((m) => m.value),
      "Your selection is invalid!"
    )
    .label("Merchandise Type")
    .required("Choose one that describes you best!"),
};

export default function WaitlistForm({ toggle, showForm, pref = null }) {
  const [schemaAddon, setSchemaAddon] = useState(0);
  const recaptchaRef = createRef();
  const formikRef = createRef();
  const [valuesI, setValuesI] = useState(null);
  const [fetching, setFetching] = useState(false);
  const [rpcError, setRpcError] = useState(null);
  const [info, setInfo] = useState(null);
  const router = useRouter();
  const [reset, setReset] = useState(false);

  const theme = localStorage.getItem("slik_theme");

  const validationSchema = Yup.object().shape(
    schemaAddon === 0
      ? baseValidationSchema
      : schemaAddon === 1
      ? { ...baseValidationSchema, ...driverAddonSchema }
      : schemaAddon === 2
      ? { ...baseValidationSchema, ...vendorAddonSchema }
      : {}
  );

  useEffect(() => {
    AOS.init({
      offset: 40,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  async function handleSubmit(values) {
    setRpcError(null);
    setInfo(null);

    setFetching(true);

    setValuesI(values);
    recaptchaRef.current.execute();
  }

  async function onRecaptchaChange(token) {
    if (!token) {
      console.log("No Recaptcha token : Resetting...");
      recaptchaRef.current.reset();
      setFetching(false);
      setRpcError("Recaptcha challenge expired. Please try again.");
      return;
    }

    const data = {
      ...valuesI,
      recaptcha: token,
      vehicleType: valuesI.vehicleType || null,
      merchandiseType: valuesI.merchandiseType || null,
      phone: phone(valuesI.phone, { country: "NG" }).phoneNumber,
    };

    // console.log("Sending RPC...", data);
    const res = await sendRPC("waitlist.add_applicant", {
      applicant_data: data,
    });

    if (!res.success) {
      console.log(res.error);
      setRpcError(res.errorMessage);
    } else {
      if (res.data.error) {
        const errors = JSON.parse(res.data.error.data);
        setRpcError(errors.map((e) => <p> {e.msg} </p>));

        console.log(res.data.error.message, res.data.error.data);
      } else {
        if (res.data.result.ok) {
          // console.log("Applicant Registered");

          setInfo(
            "Your application has been registered. You will be notified once we launch, thanks for believing in us!"
          );

          formikRef.current.resetForm();
        }
      }
    }

    recaptchaRef.current.reset();

    setFetching(false);
  }

  function onRecaptchaError(error) {
    setFetching(false);
  }

  return (
    <div
      className={
        "bg-black/60 dark:bg-black/40  z-30 fixed  w-[100%] right-0 top-0 lg:top-0 min-h-screen "
      }
    >
      {fetching && <HLoader />}
      <div
        data-aos="zoom-in"
        style={{ fontFamily: "Work Sans" }}
        className="min-h-[500px] dark:border-white/40 dark:border relative max-h-[750px] z-10  rounded px-6  pb-12  max-w-md w-[90%] lg:w-full bg-[#FFFFFF] dark:bg-[#111315] mx-auto mt-8  overflow-y-auto hide-scroll-bar  scale-[0.95] lg:scale-[0.8]"
      >
        <div onClick={toggle} className="absolute top-2 lg:hidden right-3 z-10">
          <FontAwesomeIcon
            icon={faX}
            className="text-base lg:text-lg text-black/90 dark:text-white"
          />
        </div>

        <h1 className="text-3xl bg-white dark:bg-[#111315] sticky py-4 top-0 left-4 right-0 font-bold lg:text-4xl text-[#2A2A2A] dark:text-white">
          {" "}
          Join the queue
        </h1>

        {rpcError && (
          <p className="mt-2 pb-6 sticky bg-white dark:bg-[#111315] top-16 left-4 text-sm lg:text-base block text-red-500">
            {rpcError}
          </p>
        )}

        {info && (
          <p className="mt-2 pb-6 sticky bg-white dark:bg-[#111315] top-16 left-4 text-sm lg:text-base block text-green-500">
            {info}
          </p>
        )}

        <Formik
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          validateOnChange
          initialValues={{
            name: "",
            email: "",
            phone: "",
            category: (pref && pref.toUpperCase()) || "",
            more: "",
            vehicleType: "",
            merchandiseType: "",
          }}
          innerRef={formikRef}
        >
          {({ isValid, isSubmitting, values, setFieldValue, resetForm }) => {
            if (values.category === "driver") {
              if (schemaAddon !== 1) {
                setSchemaAddon(1);
              }
            }

            if (values.category === "vendor") {
              if (schemaAddon !== 2) {
                setSchemaAddon(2);
              }
            }

            if (values.category === "user") {
              if (schemaAddon !== 0) {
                setSchemaAddon(0);
              }
            }

            return (
              <Form
                about="Waitlist Form"
                className={
                  " mt-4 space-y-4 pb-12 " +
                  cn({
                    // " blur-sm cursor-not-allowed": fetching,
                  })
                }
              >
                {fields.map((f, i) => (
                  <div
                    key={i + f.name}
                    className="w-full py-2 flex flex-col  justify-center items-start"
                  >
                    <label
                      htmlFor={f.name}
                      className="block text-[#797979] dark:text-white text-sm lg:text-base capitalize"
                    >
                      {" "}
                      {f.label}
                      {f.required && <span className="text-red-500">*</span>}
                    </label>

                    {/* Radio types  */}

                    {f.type === "radio" && (
                      <div className="flex mb-2 flex-row justify-start w-full space-x-6">
                        {f.radios.map((r, i) => (
                          <div key={i} className="flex flex-row space-x-2">
                            <Field
                              id={f.name + r.name}
                              value={r.value}
                              type={f.type}
                              autoFocus={false}
                              className=" w-[20px]  mt-2 cursor-pointer   border-[#797979] dark:border-white"
                              title={"Choose " + r.name}
                              name={f.name}
                              placeholder={f.placeholder}
                            />
                            <label
                              className="text-[#797979] dark:text-white mt-2 text-sm lg:text-base capitalize"
                              htmlFor={f.name + r.name}
                            >
                              {" "}
                              {r.name}{" "}
                            </label>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Subsets  */}

                    {f.subset &&
                      f.subset.map((s, i) => {
                        return (
                          <>
                            {s.when === values[f.name] && s.type === "radio" && (
                              <>
                                <label
                                  key={i}
                                  htmlFor={f.name}
                                  className="block text-[#797979] dark:text-white mt-4 text-sm lg:text-base capitalize"
                                >
                                  {" "}
                                  {s.label}
                                  {f.required && (
                                    <span className="text-red-500">*</span>
                                  )}
                                </label>
                                <div
                                  key={i + 1}
                                  className="flex mb-2 flex-row justify-start w-full space-x-6"
                                >
                                  {s.options.map((r, i) => (
                                    <div
                                      key={i}
                                      className="flex flex-row space-x-2"
                                    >
                                      <Field
                                        id={f.name + r.name}
                                        value={r.value}
                                        type={s.type}
                                        autoFocus={false}
                                        className=" w-[20px]  mt-2 cursor-pointer   border-[#797979] dark:border-white"
                                        title={"Choose " + r.name}
                                        name={s.name}
                                        placeholder={f.placeholder}
                                      />
                                      <label
                                        className="text-[#797979] dark:text-white mt-2 text-sm lg:text-base capitalize"
                                        htmlFor={f.name + r.name}
                                      >
                                        {r.name}
                                      </label>
                                    </div>
                                  ))}
                                </div>

                                <span
                                  key={i + 2}
                                  className="mt-1 text-xs lg:text-sm block text-red-500"
                                >
                                  <ErrorMessage name={s.name} />
                                </span>
                              </>
                            )}

                            {s.when === values[f.name] && s.type === "select" && (
                              <>
                                <label
                                  key={i + 3}
                                  htmlFor={f.name}
                                  className="block text-[#797979] dark:text-white mt-4 text-sm lg:text-base capitalize"
                                >
                                  {s.label}
                                  {f.required && (
                                    <span className="text-red-500">*</span>
                                  )}
                                </label>
                                <div
                                  key={i + 4}
                                  className="flex mb-2 flex-row justify-start w-full space-x-6"
                                >
                                  {/* Custom Select Component */}

                                  <CustomSelect
                                    name="merchandiseType"
                                    options={merchandiseTypes}
                                    currentValue={values.merchandiseType}
                                    setValue={(v) => {
                                      setFieldValue("merchandiseType", v);
                                    }}
                                  />

                                  {/* End - Custom Select Component */}
                                </div>

                                <span
                                  key={i + 5}
                                  className="mt-1 text-xs lg:text-sm block text-red-500"
                                >
                                  <ErrorMessage name={s.name} />
                                </span>
                              </>
                            )}
                          </>
                        );
                      })}

                    {/* Other input types  */}

                    {f.type !== "radio" && (
                      <Field
                        key={i + 5}
                        id={f.name}
                        type={f.type}
                        name={f.name}
                        autoFocus={false}
                        as={f.as || "input"}
                        className={
                          "outline-none w-full dark:text-white text-black  block border-b dark:bg-[#111315] bg-white border-[#797979] dark:border-white py-2 pl-1 pr-4 " +
                          cn([
                            {
                              " h-[50px]  resize-none ": f.as === "textarea",
                              " h-[30px] lg:h-[40px]": !f.as,
                            },
                          ])
                        }
                        placeholder={f.placeholder}
                      />
                    )}

                    <span
                      key={i + 6}
                      className="mt-1 text-xs lg:text-sm block text-red-500"
                    >
                      <ErrorMessage name={f.name} />
                    </span>
                  </div>
                ))}

                <div className="mt-4 mb-8 ">
                  {/* Recaptcha  */}

                  <ReCAPTCHA
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                    onChange={onRecaptchaChange}
                    onError={onRecaptchaError}
                    size="invisible"
                    ref={recaptchaRef}
                    badge="inline"
                    theme={theme ? theme : "light"}
                  />

                  {/* End of Recaptcha  */}
                </div>

                {!isValid && (
                  <p className="mt-1 text-sm block text-red-500">
                    Please complete the form and correct errors to continue.
                  </p>
                )}

                <div className="mt-12 w-full flex flex-row justify-center  items-center     ">
                  <button
                    type="submit"
                    disabled={!isValid || isSubmitting || fetching}
                    className={
                      "block w-full    text-lg px-12 py-2 lg:py-3   transition-colors text-white  transform duration-300 font-normal   bg-[#EE3A46]  rounded-xl outline-none text-center " +
                      cn({
                        " opacity-20 ": !isValid || isSubmitting || fetching,
                        " hover:ring-[#EE3A46] hover:text-[white] dark:hover:text-white  hover:bg-[#EE3A46]/90 hover:ring-1":
                          isValid && !isSubmitting && !fetching,
                      })
                    }
                  >
                    Join Waitlist
                  </button>
                </div>
                <div className="mt-6 w-full flex flex-row justify-center  items-center     ">
                  <button
                    onClick={toggle}
                    type="button"
                    disabled={isSubmitting || fetching}
                    className={
                      "block w-full  text-lg px-12 py-2 lg:py-3  ring-1 ring-black/90 dark:ring-white transition-colors text-black/90 dark:text-white transform duration-300 font-normal     rounded-xl outline-none text-center " +
                      cn({
                        " hover:ring-2 hover:font-semibold ":
                          !isSubmitting && !fetching,
                        " opacity-20 ": isSubmitting || fetching,
                      })
                    }
                  >
                    Close
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}
