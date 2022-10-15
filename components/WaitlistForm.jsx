import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import phone from "phone";
import cn from "classnames";
import Image from "next/image";

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
    label: "What best describes you",
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

export default function WaitlistForm() {
  return (
    <div
      style={{ fontFamily: "Work Sans" }}
      className={
        "bg-black/80  z-10 fixed  w-[100%] right-0 top-[5%] lg:top-0 min-h-screen "
      }
    >
      <div className="min-h-[500px] max-h-[750px] z-10  rounded px-6  pb-12  max-w-md w-[90%] lg:w-full bg-[#FFFFFF] dak:bg-[#111315] mx-auto mt-8  hover:overflow-y-auto hide-scroll-bar">
        <h1 className="text-3xl bg-white sticky py-4 top-0 left-4 right-0 font-bold lg:text-4xl text-[#2A2A2A]">
          {" "}
          Join the queue.
        </h1>

        <Formik
          initialValues={{
            name: "",
            email: "",
            phone: "",
            category: "",
            more: "",
          }}
        >
          {({ isValid }) => (
            <Form about="Waitlist Form" className="mt-4 space-y-4">
              {fields.map((f, i) => (
                <div className="w-full py-2 flex flex-col  justify-center items-start">
                  <label
                    htmlFor={f.name}
                    className="block text-[#797979] text-sm lg:text-base capitalize"
                  >
                    {" "}
                    {f.label}
                    {f.required && <span className="text-red-500">*</span>}
                  </label>

                  {f.type === "radio" && (
                    <div className="flex flex-row justify-start w-full space-x-6">
                      {f.radios.map((r, i) => (
                        <div className="flex flex-row space-x-2">
                          <Field
                            id={f.name + r.name}
                            value={r.value}
                            type={f.type}
                            className=" w-[20px]  mt-2 cursor-pointer   border-[#797979] "
                            title={"Choose " + r.name}
                            name={f.name}
                            placeholder={f.placeholder}
                          />
                          <label
                            className="text-[#797979] mt-2 text-sm lg:text-base capitalize"
                            htmlFor={f.name + r.name}
                          >
                            {" "}
                            {r.name}{" "}
                          </label>
                        </div>
                      ))}
                    </div>
                  )}

                  {f.type !== "radio" && (
                    <Field
                      id={f.name}
                      type={f.type}
                      name={f.name}
                      as={f.as || "input"}
                      className={
                        "outline-none w-full block border-b border-[#797979] py-2 pl-1 pr-4 " +
                        cn([
                          {
                            " h-[60px]  resize-none ": f.as === "textarea",
                            " h-[30px] lg:h-[40px]": !f.as,
                          },
                        ])
                      }
                      placeholder={f.placeholder}
                    />
                  )}
                </div>
              ))}
              <div className="mt-4 ">
                <Image
                  src="/assets/recaptcha.png"
                  height="66"
                  width="90"
                  priority
                  layout="intrinsic"
                  alt="Recaptcha"
                />
              </div>
              <div className="mt-12 w-full flex flex-row justify-center  items-center     ">
                <button className="block w-full  hover:text-[#EE3A46] dark:hover:text-white  text-lg px-12 py-2 lg:py-3 hover:bg-[#EE3A46]/90 hover:ring-1 hover:ring-[#EE3A46] transition-colors text-white transform duration-300 font-normal   bg-[#EE3A46]  rounded-xl outline-none text-center ">
                  Join Waitlist
                </button>
              </div>
              <div className="mt-6 w-full flex flex-row justify-center  items-center     ">
                <button className="block w-full hover:ring-2 hover:font-semibold  text-lg px-12 py-2 lg:py-3  ring-1 ring-black/90 transition-colors text-black/90 transform duration-300 font-normal     rounded-xl outline-none text-center ">
                  Close
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
