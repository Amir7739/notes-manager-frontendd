import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { registerUser } from "../services/authService";

function Register() {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = async (values, { setSubmitting, setFieldError }) => {
    try {
      const data = await registerUser(values);
      localStorage.setItem("token", data.token);
      navigate("/");
    } catch (error) {
      setFieldError(
        "general",
        error.response?.data.error || "Registration failed. Please try again."
      );
    }
    setSubmitting(false);
  };

  return (
    <div className="container mx-auto p-6 max-w-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Register
      </h2>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, isSubmitting }) => (
          <Form className="bg-white p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-1"
              >
                Email
              </label>
              <Field
                type="email"
                name="email"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-700 font-medium mb-1"
              >
                Password
              </label>
              <Field
                type="password"
                name="password"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            {errors.general && (
              <div className="text-red-500 text-sm mb-4 text-center">
                {errors.general}
              </div>
            )}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition disabled:bg-blue-400"
            >
              {isSubmitting ? "Registering..." : "Register"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Register;
