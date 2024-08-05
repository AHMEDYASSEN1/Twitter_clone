import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";


const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const [formInputsValidity, setFormInputsValidity] = useState({
    emailIsValid: false,
    passwordIsValid: false,
  });
  const emailValidity = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const passwordValidity = (value: string) => {
    return value.trim().length >= 6;
  };

  const signInHandler = async (event: React.FormEvent) => {
    event.preventDefault();

    const enterdEmailIsValid = emailValidity(email);
    const enterdPasswordIsValid = passwordValidity(password);

    setFormInputsValidity({
      emailIsValid: enterdEmailIsValid,
      passwordIsValid: enterdPasswordIsValid,
    });

    const formIsValid: boolean =
      formInputsValidity.emailIsValid && formInputsValidity.passwordIsValid;

    if (formIsValid && typeof window !== "undefined") {
      try {
        await signInWithEmailAndPassword(auth, email, password);
      } catch (error) {
        console.log(error);
      }
      setEmail("");
      setPassword("");
      navigate("/");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <form className="rounded-xl w-[28%] min-w-[350px] px-8 pt-6 pb-8 mb-4 border-[1px] border-gray-600">
        <h2 className="text-2xl font-bold text-center mb-4">Sign in to X</h2>
        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-gray-600"></div>
          <span className="flex-shrink mx-4 text-gray-600">or</span>
          <div className="flex-grow h-px bg-gray-600"></div>
        </div>
        <input
          placeholder="Email"
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded w-full py-2 px-3 border-[1px] border-gray-600 focus:outline-none"
          required
        />
        <input
          placeholder="Password"
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="rounded w-full py-2 px-3 my-4 border-[1px] border-gray-600 focus:outline-none"
          required
        />
        <button
          className="bg-blue-500 hover:bg-blue-400 py-2 px-8 w-full rounded-full font-semibold mb-2"
          onClick={signInHandler}
        >
          Login
        </button>
        <a href="#" className="text-sm text-gray-500 hover:text-blue-500">
          Forgot Password?
        </a>
      </form>
      <p className="text-center">
        Don't have an account?
        <Link to="/signup" className="text-blue-500 hover:text-blue-700">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default SignIn;
