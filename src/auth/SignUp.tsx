import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { auth, googleProvider } from "../config/firebase.ts";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

interface SignUpProps {
  setIsSigned: React.Dispatch<React.SetStateAction<boolean>>;
}
const SignUp: React.FC<SignUpProps> = ({ setIsSigned }) => {
  const [createAccount, setCreateAccount] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const user = auth.currentUser;

  const [formInputsValidity, setFormInputsValidity] = useState({
    emailIsValid: true,
    passwordIsValid: true,
  });
  const navigate = useNavigate();

  const emailValidity = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const passwordValidity = (value: string) => {
    return value.trim().length >= 6;
  };

  const signUpHandler = async (event: React.FormEvent) => {
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
        await createUserWithEmailAndPassword(auth, email, password);
        // router.push("/");
      } catch (error) {
        console.log(error);
      }
      setEmail("");
      setPassword("");
      setIsSigned(true);
      navigate("/");
    }
  };

  const SignUpWithGoogleHandler = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.log(err);
    }
    setEmail("");
    setPassword("");
    setIsSigned(true);
  };

  return (
    <form className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-[70px] font-bold max-md:text-[50px] max-sm:text-[40px]">
        Happening now
      </h1>
      <h3 className="text-3xl font-bold my-8 max-sm:text-2xl">Joun today.</h3>
      <div className="w-[23%] min-w-[350px]">
        <div>
          <button
            onClick={SignUpWithGoogleHandler}
            className="bg-white py-2 px-8 w-full rounded-full text-black font-semibold flex items-center justify-center gap-2"
          >
            <FaGoogle />
            join with google
          </button>
          <div className="flex items-center my-4">
            <div className="flex-grow h-px bg-gray-600"></div>
            <span className="flex-shrink mx-4 text-gray-600">or</span>
            <div className="flex-grow h-px bg-gray-600"></div>
          </div>
          {!createAccount && (
            <button
              className="bg-blue-500 hover:bg-blue-400 py-2 px-8 w-full rounded-full font-semibold"
              onClick={() => {
                setCreateAccount(true);
              }}
            >
              Create an account
            </button>
          )}
        </div>
        {createAccount && (
          <div>
            <input
              placeholder="Email"
              id="email"
              type="email"
              className="rounded w-full py-2 px-3 my-4 border-[1px] border-gray-600 focus:outline-none"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              placeholder="Password"
              id="password"
              type="password"
              className="rounded w-full py-2 px-3 mb-4 border-[1px] border-gray-600 focus:outline-none"
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button
              className="bg-blue-500 hover:bg-blue-400 py-2 px-8 w-full rounded-full font-semibold mb-2"
              onClick={signUpHandler}
            >
              Sign up
            </button>
          </div>
        )}
        <p className="my-4 font-semibold text-md">Already have an account?</p>
        <Link to="/signin">
          <button className="text-blue-500 py-2 px-8 w-full rounded-full font-semibold border-[1px] border-gray-600 hover:bg-slate-400 hover:bg-opacity-10">
            Sign in
          </button>
        </Link>
      </div>
    </form>
  );
};

export default SignUp;
