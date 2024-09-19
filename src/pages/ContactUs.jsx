import { motion, AnimatePresence } from "framer-motion";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import bg from "src/img/table.jpg";
import Filled_Warning from "src/assets/icon/Icon_Filled_Error.svg?react";

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "This field cannot be empty";
  } else if (values.name.length < 3) {
    errors.name = "Must be 3 characters or more";
  }

  if (!values.email) {
    errors.email = "This field cannot be empty";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.message) {
    errors.message = "This field cannot be empty";
  } else if (values.message.length > 200) {
    errors.message = "Must be 200 characters or less";
  }

  return errors;
};

export default function ContactUs() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validate,
    onSubmit: (values) => {
      toast.success("Thanks for your message!");
      console.log(values);

      formik.resetForm({
        name: "",
        email: "",
        message: "",
      });
    },
  });
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        key={4}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bg})`,
          width: "100%",
          height: "100vh",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="flex h-screen w-full items-center justify-center text-center text-white"
      >
        <motion.form
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          onSubmit={formik.handleSubmit}
          className="flex w-full max-w-[400px] flex-col items-center gap-5 rounded-xl bg-white/20 px-4 py-5 shadow-xl backdrop-blur-sm"
        >
          <p className="text-xl">Contact Us</p>

          <div className="w-full">
            <label htmlFor="name">
              Name<span className="text-red-600">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.name}
              autoComplete="off"
              className={`w-full rounded-lg p-4 text-black outline-orange-400 ${formik.touched.name && formik.errors.name ? "border-[2px] border-red-600" : ""} `}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="flex items-center gap-1 text-xs text-red-600">
                <Filled_Warning />
                {formik.errors.name}
              </div>
            ) : null}
          </div>

          <div className="w-full">
            <label htmlFor="email">
              Email Address<span className="text-red-600">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.email}
              // autoComplete="off"
              className={`w-full rounded-lg p-4 text-black outline-orange-400 ${formik.touched.email && formik.errors.email ? "border-[2px] border-red-600" : ""} `}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="flex items-center gap-1 text-xs text-red-600">
                <Filled_Warning />
                {formik.errors.email}
              </div>
            ) : null}
          </div>

          <div className="w-full">
            <label htmlFor="message">
              Message<span className="text-red-600">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              type="textarea"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.message}
              autoComplete="off"
              rows="5"
              className={`w-full rounded-lg p-4 text-black outline-orange-400 ${formik.touched.message && formik.errors.message ? "border-[2px] border-red-600" : ""} `}
            />
            {formik.touched.message && formik.errors.message ? (
              <div className="flex items-center gap-1 text-xs text-red-600">
                <Filled_Warning />
                {formik.errors.message}
              </div>
            ) : null}
          </div>

          <div>
            <span className="text-red-600">*</span> Required fields
          </div>
          <button
            type="submit"
            className="inline-block w-full max-w-28 cursor-pointer rounded border py-2 transition-colors duration-300 hover:bg-orange-400"
          >
            Send
          </button>
        </motion.form>
      </motion.div>
    </AnimatePresence>
  );
}
