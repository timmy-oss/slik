import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import phone from "phone";
import cn from "classnames";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import { useState, useEffect } from "react";
import CustomSelect from "./CustomSelect";

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
        value: "vendor",
      },

      {
        name: "Driver",
        value: "driver",
      },

      {
        name: "User",
        value: "user",
      },
    ],
    subset: [
      {
        name: "vehicleType",
        when: "driver",
        label: "Which will you be driving",

        type: "radio",

        options: [
          {
            name: "Truck",
            value: "truck",
          },
          {
            name: "Car",
            value: "car",
          },
          {
            name: "Bike",
            value: "bike",
          },
        ],
      },

      {
        name: "merchandiseType",
        when: "vendor",
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
    .oneOf(["vendor", "driver", "user"], "Your selection is invalid!")
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
    .oneOf(["truck", "car", "bike"], "Your selection is invalid!")
    .label("Vehicle Type")
    .required("Choose one that describes you best!"),
};

const vendorAddonSchema = {
  merchandiseType: Yup.string()
    .trim()
    .oneOf(["truck", "car", "bike"], "Your selection is invalid!")
    .label("Merchandise Type")
    .required("Choose one that describes you best!"),
};

export default function WaitlistForm({ toggle, showForm, pref = null }) {
  const [schemaAddon, setSchemaAddon] = useState(0);

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
    console.log(values);
  }

  console.log("pref is : ", pref);

  return (
    <div
      className={
        "bg-black/60 dark:bg-black/40  z-30 fixed  w-[100%] right-0 top-0 lg:top-0 min-h-screen "
      }
    >
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

        <Formik
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          validateOnChange
          validateOnBlur
          initialValues={{
            name: "",
            email: "",
            phone: "",
            category: pref ? pref : "",
            more: "",
            vehicleType: "",
          }}
        >
          {({ isValid, isSubmitting, values }) => {
            console.log(values.category);

            if (values.category === "driver") {
              if (schemaAddon !== 1) {
                setSchemaAddon(1);
              }
            }

            if (values.category === "vendor") {
              if (schemaAddon !== 2) {
                setSchemaAddon(1);
              }
            }

            if (values.category === "user") {
              if (schemaAddon !== 0) {
                setSchemaAddon(0);
              }
            }

            return (
              <Form about="Waitlist Form" className="mt-4 space-y-4 pb-12">
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

                                  <CustomSelect />

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

                <div className="mt-4 ">
                  <Image
                    src="/assets/recaptcha-new.png"
                    height="66"
                    width="90"
                    priority
                    layout="intrinsic"
                    alt="Recaptcha"
                  />
                </div>

                {!isValid && (
                  <p className="mt-1 text-sm block text-red-500">
                    Please correct the errors in the form to continue.
                  </p>
                )}

                <div className="mt-12 w-full flex flex-row justify-center  items-center     ">
                  <button
                    type="submit"
                    disabled={!isValid || isSubmitting}
                    className={
                      "block w-full    text-lg px-12 py-2 lg:py-3   transition-colors text-white  transform duration-300 font-normal   bg-[#EE3A46]  rounded-xl outline-none text-center " +
                      cn({
                        " opacity-20 ": !isValid || isSubmitting,
                        " hover:ring-[#EE3A46] hover:text-[white] dark:hover:text-white  hover:bg-[#EE3A46]/90 hover:ring-1":
                          isValid && !isSubmitting,
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
                    disabled={isSubmitting}
                    className={
                      "block w-full  text-lg px-12 py-2 lg:py-3  ring-1 ring-black/90 dark:ring-white transition-colors text-black/90 dark:text-white transform duration-300 font-normal     rounded-xl outline-none text-center " +
                      cn({
                        " hover:ring-2 hover:font-semibold ": !isSubmitting,
                        " opacity-20 ": isSubmitting,
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
