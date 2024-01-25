import { useState } from "react";
import { signUp } from "../utilities/users-service";

export default function SignUpForm({ setIsNewAccount, user, setUser }) {
  const handleClick = () => {
    setIsNewAccount(false);
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
    error: "",
  });

  const handleChange = (evt) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
      error: "",
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Destructuring the state
    const { ...dataToSend } = formData;

    // window.alert(JSON.stringify(formData));
    window.alert("Account Created");

    console.log("Data to send:", dataToSend);

    // try {
    //   const token = await signUp(dataToSend);

    //   if (token.error) {
    //     setFormData({ ...formData, error: token.error });
    //     console.log(token.error);
    //   } else {
    //     localStorage.setItem("token", token.token);
    //     console.log(token.token);
    //   }
    // } catch {
    //   setFormData({ ...formData, error: "Something failed" });
    //   console.log();
    // }

    try {
      const token = await signUp(dataToSend);

      if (token && token.token) {
        localStorage.setItem("token", token.token);
      } else {
        console.error("Invalid token format");
      }
    } catch (error) {
      console.error("Error during token retrieval:", error);
    }

    const response = await fetch("/api/users/signup", {
      method: "POST",
      body: JSON.stringify(dataToSend),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();
    console.log(json);
  };

  const disable = formData.password !== formData.confirm;

  return (
    <div>
      <section>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow border border-jade-700 md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1>Create an account</h1>
              <form
                className="space-y-4 md:space-y-6"
                action="#"
                autoComplete="off"
                onSubmit={handleSubmit}
              >
                <div>
                  <label
                    htmlFor="user-name"
                    className="block mb-2 text-sm font-medium"
                  >
                    Your username
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-zinc-50 border border-zinc-300 text-zinc-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="username"
                    value={formData.name}
                    onChange={handleChange}
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="user-email"
                    className="block mb-2 text-sm font-medium"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-zinc-50 border border-zinc-300 text-zinc-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-zinc-50 border border-zinc-300 text-zinc-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    value={formData.password}
                    onChange={handleChange}
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="confirm-password"
                    className="block mb-2 text-sm font-medium"
                  >
                    Confirm password
                  </label>
                  <input
                    type="password"
                    name="confirm"
                    id="confirm"
                    placeholder="••••••••"
                    className="bg-zinc-50 border border-zinc-300 text-zinc-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    value={formData.confirm}
                    onChange={handleChange}
                    required=""
                  />
                </div>
                <div className="flex items-start">
                  {/* <div className="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      className="w-4 h-4 border border-zinc-300 rounded bg-zinc-50 focus:ring-3 focus:ring-primary-300 dark:bg-zinc-700 dark:border-zinc-600 dark:focus:ring-primary-600 dark:ring-offset-zinc-800"
                      required=""
                    />
                  </div> */}
                  {/* <div className="ml-3 text-sm">
                    <label htmlFor="terms" className="font-light text-jade-500">
                      I accept the{" "}
                      <a
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                        href="#"
                      >
                        Terms and Conditions
                      </a>
                    </label>
                  </div> */}
                </div>
                <button
                  type="submit"
                  disabled={disable}
                  className="w-full bg-jade-500"
                >
                  Create an account
                </button>
                <p className="text-sm font-light">
                  Already have an account?{" "}
                  <span
                    className="font-medium text-jade-500 cursor-pointer"
                    onClick={handleClick}
                  >
                    Login here
                  </span>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <p className="error-message">&nbsp;{formData.error}</p>
    </div>
  );
}
