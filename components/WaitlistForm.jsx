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

const baseValidationSchema = {
  name: Yup.string()
    .min(3, "Too short!")
    .max(64, "Too long!")
    .label("Name")
    .required("Name cannot be blank!"),
  email: Yup.string()
    .email("Your email is invalid!")
    .label("Email")
    .required("Email cannot be blank!"),
  phone: Yup.string()
    .min(10, "Too short!")
    .max(12, "Too long!")
    .label("Phone Number")
    .required("Phone number cannot be blank!"),
  category: Yup.string()
    .oneOf(["vendor", "driver", "user"], "Your description is invalid!")
    .label("Category")
    .required("Choose one that describes you best!"),

  more: Yup.string()
    .min(40, "Too short!")
    .test("is-enough-words", "At least 10 words!", (v) => {
      if (v === undefined) return true;
      if (v.length === 0) return true;
      return v.split(" ").length >= 10;
    })
    .label("More"),
};

export default function WaitlistForm() {
  const validationSchema = Yup.object().shape(baseValidationSchema);

  async function handleSubmit(values) {
    console.log(values);
  }

  return (
    <div
      style={{ fontFamily: "Work Sans" }}
      className={
        "bg-black/80  z-10 fixed  w-[100%] right-0 top-[5%] lg:top-0 min-h-screen "
      }
    >
      <div className="min-h-[500px] max-h-[750px] z-10  rounded px-6  pb-12  max-w-md w-[90%] lg:w-full bg-[#FFFFFF] dak:bg-[#111315] mx-auto mt-8  overflow-y-auto hide-scroll-bar">
        <h1 className="text-3xl bg-white sticky py-4 top-0 left-4 right-0 font-bold lg:text-4xl text-[#2A2A2A]">
          {" "}
          Join the queue.
        </h1>

        <Formik
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          initialValues={{
            name: "",
            email: "",
            phone: "",
            category: "",
            more: "",
          }}
        >
          {({ isValid, isSubmitting }) => (
            <Form about="Waitlist Form" className="mt-4 space-y-4 pb-12">
              {fields.map((f, i) => (
                <div
                  key={i + f.name}
                  className="w-full py-2 flex flex-col  justify-center items-start"
                >
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
                            autoFocus={false}
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
                      autoFocus={false}
                      as={f.as || "input"}
                      className={
                        "outline-none w-full  block border-b border-[#797979] py-2 pl-1 pr-4 " +
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

                  <span className="mt-1 text-sm block text-red-500">
                    <ErrorMessage name={f.name} />
                  </span>
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
                    "block w-full    text-lg px-12 py-2 lg:py-3   transition-colors text-white transform duration-300 font-normal   bg-[#EE3A46]  rounded-xl outline-none text-center " +
                    cn({
                      " opacity-20 ": !isValid || isSubmitting,
                      " hover:ring-[#EE3A46] hover:text-[#EE3A46] dark:hover:text-white  hover:bg-[#EE3A46]/90 hover:ring-1":
                        isValid && !isSubmitting,
                    })
                  }
                >
                  Join Waitlist
                </button>
              </div>
              <div className="mt-6 w-full flex flex-row justify-center  items-center     ">
                <button
                  type="button"
                  disabled={isSubmitting}
                  className={
                    "block w-full  text-lg px-12 py-2 lg:py-3  ring-1 ring-black/90 transition-colors text-black/90 transform duration-300 font-normal     rounded-xl outline-none text-center " +
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
          )}
        </Formik>
      </div>
    </div>
  );
}
