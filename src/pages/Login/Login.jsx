import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import lock from "../../assets/lock-rounded.png";
import SocialLogin from "../shared/SocialLogin";
import { signInReducer } from "../../redux/authSlice";
const Login = () => {
  const navigate = useNavigate();
  // show password state
  const [isVisible, setVisible] = useState(false);
  // handle login
  const dispatch = useDispatch();
  const { loading, error, token } = useSelector((state) => state.user);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleLogin = (data) => {
    dispatch(signInReducer(data));
  };
  if (!error) {
    localStorage.setItem("token", token);
    navigate("/dashboard");
  }

  return (
    <div className="lg:w-[540px] w-[95%] mx-auto">
      <div className=" text-center mt-2 capitalize">
        <h2 className="text-[#323B4B] font-bold text-[26px]">Sign In</h2>
        <p className="text-[#8A94A6] mt-4 mb-6 text-[18px]">
          Welcome back, you’ve been missed!
        </p>
      </div>
      <SocialLogin></SocialLogin>
      <form onSubmit={handleSubmit(handleLogin)}>
        <input
          className={`${
            errors.email
              ? "border border-[#FF5630] w-full py-4 px-3 rounded-lg font-medium text-[16px] mb-[16px] outline-none"
              : "border border-[#F3F3F3] w-full py-4 px-3 rounded-lg font-medium text-[16px] mb-[25px] focus:outline-none"
          }`}
          name="email"
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
        {error && <p className=" text-[#FF5630] mb-[16px] ">{error}</p>}
        {/* password input  */}
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
        <div className="flex items-center my-[16px]  text-[#B0B7C3] ">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            className="lg:w-[23px] lg:h-[28px] rounded-lg bg-[#EDEFF1] "
          />
          <label
            for="default-checkbox"
            className="ml-2 text-[16px] font-medium "
          >
            Remember Me
          </label>
        </div>
        <input
          className="bg-[#377DFF] p-3 w-full text-[#FFFFFF] font-medium rounded-lg "
          type="submit"
          value={`${loading ? "loading" : "Sign In"}`}
        />
      </form>
      <p className="text-center mt-[30px] text-[#B0B7C3] font-medium text-[16px]">
        Don’t have an account yet?{" "}
        <Link className="text-[#377DFF]" to="/register">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default Login;
