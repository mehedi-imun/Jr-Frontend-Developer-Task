import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import PasswordStrengthBar from "react-password-strength-bar";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import lock from "../../assets/lock-rounded.png";
import name from "../../assets/name-ounded.png";
import SocialLogin from "../shared/SocialLogin";
import { signUpReducer } from "../../redux/authSlice";

const SignUp = () => {
  const [isVisible, setVisible] = useState(false);
  const [password, setPassword] = useState("");
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.user);
  const handleRegister = async (data) => {
    const { checkBox: pwd, ...userInputData } = data;
    await dispatch(signUpReducer(userInputData));
    toast.success("successfully created account please login");
    reset();
  };

  if (error) {
    toast.error(error);
  }
  return (
    <div className="lg:w-[540px] w-[95%] mx-auto">
      <div className=" text-center mt-2 capitalize">
        <h2 className="text-[#323B4B] font-bold text-[26px]">
          Getting Started
        </h2>
        <p className="text-[#8A94A6] mt-4 mb-6 text-[18px]">
          Create an account to continue!
        </p>
      </div>
      <SocialLogin></SocialLogin>
      <form onSubmit={handleSubmit(handleRegister)}>
        <input
          className={`${
            errors.email
              ? "border border-[#FF5630] w-full py-4 px-3 rounded-lg font-medium text-[16px] mb-[25px] focus:outline-none"
              : "border border-[#F3F3F3] w-full py-4 px-3 rounded-lg font-medium text-[16px] mb-[25px] focus:outline-none"
          }`}
          type="email"
          placeholder="@ Your Email "
          {...register("email", {
            required: {
              value: true,
              message: "Email is Required",
            },
            pattern: {
              value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
              message: "Please enter a valid email address.",
            },
          })}
        />
        {/* email error handle  */}
        {errors.email && (
          <p className=" text-[#FF5630] mb-[16px] ">{errors.email.message}</p>
        )}
        <div
          className={`${
            errors.name
              ? "relative flex justify-end items-center border border-[#FF5630] w-full rounded-lg font-medium mb-[30px]"
              : "relative flex justify-end items-center border border-[#F3F3F3] w-full rounded-lg font-medium mb-[30px]"
          }`}
        >
          <i className="pl-[1rem] cursor-pointer">
            <img src={name} alt="" />
          </i>
          <input
            id="name"
            type="text"
            name="name"
            className="h-14 w-full   focus:outline-none focus:border-primary ml-2"
            placeholder="Your Name"
            {...register("name", {
              required: {
                value: true,
                message: "name is Required",
              },
            })}
          />
        </div>
        {/* name error handle  */}
        {errors.name && (
          <p className=" text-[#FF5630] mb-[16px] ">{errors.name.message}</p>
        )}
        {/* password input area  */}
        <div
          className={`${
            errors.password
              ? "relative flex justify-end items-center border border-[#FF5630] w-full rounded-lg font-medium"
              : "relative flex justify-end items-center border border-[#F3F3F3] w-full rounded-lg font-medium"
          }`}
        >
          <i className="pl-[1rem] cursor-pointer">
            <img src={lock} alt="" />
          </i>
          <input
            id="password"
            onKeyUp={(e) => setPassword(e.target.value)}
            type={!isVisible ? "password" : "text"}
            name="password"
            className="h-14 w-full  focus:outline-none focus:border-primary ml-2"
            placeholder="Create Password"
            {...register("password", {
              required: {
                value: true,
                message: "Password is Required",
              },
              minLength: {
                value: 6,
                message: "Must be 6 characters or longer",
              },
            })}
          />
          <i
            className="pr-[1rem] cursor-pointer"
            onClick={() => setVisible(!isVisible)}
          >
            {isVisible ? (
              <BsEyeFill className="text-[#DCDFE5] text-2xl" />
            ) : (
              <BsEyeSlashFill className="text-[#DCDFE5] text-2xl" />
            )}
          </i>
        </div>
        {/* password error  */}
        {errors.password && (
          <p className=" text-[#FF5630] my-[16px] ">
            {errors.password.message}
          </p>
        )}
        <PasswordStrengthBar className="mt-[25px]" password={password} />

        <div className="flex items-center mb-[35px] text-[#B0B7C3] ">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            className="lg:w-[28px] lg:h-[28px] rounded-lg bg-[#EDEFF1] "
            {...register("checkBox", {
              required: {
                value: true,
                message: "you need agree to the Terms & Conditions",
              },
            })}
          />
          <label
            for="default-checkbox"
            className="ml-2 text-[16px] font-medium "
          >
            I agree to the Terms & Conditions
          </label>
        </div>
        {errors.checkBox && (
          <p className=" text-[#FF5630] my-[16px] ">
            {errors.checkBox.message}
          </p>
        )}
        <input
          className="bg-[#377DFF] p-3 w-full text-[#FFFFFF] font-medium rounded-lg cursor-pointer "
          type="submit"
          value={`${loading ? "loading" : "Sign Up"}`}
        />
      </form>
      <p className="text-center mt-[30px] text-[#B0B7C3] font-medium text-[16px]">
        Already have an account?{" "}
        <Link className="text-[#377DFF]" to="/login">
          Sign In
        </Link>
      </p>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default SignUp;
