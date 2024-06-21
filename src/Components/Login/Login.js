import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import "../Login/Login.css";

export const Login = () => {
  const [phone, setPhone] = useState("");
  const [parol, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://autoapi.dezinfeksiyatashkent.uz/api/auth/signin",
        {
          method: "POST",
          body: JSON.stringify({
            phone_number: phone,
            password: parol,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      console.log("data", data);
      localStorage.setItem('accessToken',data?.data?.tokens?.accessToken?.token)
	    console.log(localStorage.getItem('accessToken',))

      navigate("/panel");
    } catch (error) {
      console.error("Error logging in:", error);
      setError("Login failed. Please check your credentials and try again.");
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://autozoomrental.com/static/media/logo1.cd0ee2ea64bdb4e351d6eb2c72171d12.svg"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Login
            </label>
			
            <div className="mt-2">
              <input
                id="phone"
				value={phone}
				onChange={(e) => setPhone(e?.target?.value)}
                name="email"
                type="phone"
                autoComplete="phone"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                 type="parol"
				id="parol"
			    value={parol}
	            onChange={(e) => setPassword(e?.target?.value)}
				name="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?{" "}
          <a
            href="#"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Do not share your password with anyone
          </a>
        </p>
      </div>
    </div>

    // <div className="login-container">
    //   <form className="login-form" onSubmit={handleSubmit}>
    //     <h2>Login</h2>
    //     {error && <p className="error">{error}</p>}
    //     <div className="form-group">
    //       <label htmlFor="phone">Login</label>
    //       <input
    //         type="text"
    //         id="phone"
    //         value={phone}
    //         onChange={(e) => setPhone(e?.target?.value)}
    //         required
    //       />
    //     </div>
    //     <div className="form-group">
    //       <label htmlFor="parol">Password</label>
    //       <input
    //         type="parol"
    //         id="parol"
    //         value={parol}
    //         onChange={(e) => setPassword(e?.target?.value)}
    //         required
    //       />
    //     </div>
    //     <button type="submit" className="login-button">
    //       Submit
    //     </button>
    //   </form>
    // </div>
  );
};
