import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import Navbar from '../Components/Navbar';
import axios from 'axios';

function Login() {

  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(false);
  const [message, setMessage] = useState("");
  const [value, setValue] = useState({
    email: "",
    password: "",
  });

  const generateError = (err) => {
    setErrorMessage(true);
    setMessage(err);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:5000/login",
        { ...value },
        {
          withCredentials: true,
        }
      );
      console.log(data);
      if (data) {
        if (data.errors) {
          const { email, password } = data.errors;

          if (email) generateError(email);
          else if (password) generateError(password);
        } else {
          navigate("/");
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Navbar />
      <div class="bg-gray-50">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div class="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0  ">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Login to your account
              </h1>
              {errorMessage ? (
                <div className="border-2 rounded h-10 border-rose-400 p-1 text-center text-rose-700">
                  {message}
                </div>
              ) : null}
              <form
                onSubmit={(e) => handleSubmit(e)}
                class="space-y-4 md:space-y-6"
              >
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    onChange={(e) =>
                      setValue({ ...value, [e.target.name]: e.target.value })
                    }
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    onChange={(e) =>
                      setValue({ ...value, [e.target.name]: e.target.value })
                    }
                    id="password"
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    required=""
                  />
                </div>

                <div class="flex items-start"></div>
                <button
                  type="submit"
                  class="w-full text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                >
                  Create an account
                </button>
                <p class="text-sm font-light text-gray-500">
                  Create a new account?{" "}
                  <span class="font-medium text-red-600 hover:underline ">
                    <Link to="/register">Register</Link>
                  </span>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login