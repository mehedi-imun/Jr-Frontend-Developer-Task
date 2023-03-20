import React, { useState } from "react";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import lock from "../../assets/lock-rounded.png";
import name from "../../assets/name-ounded.png";
import PasswordStrengthBar from "react-password-strength-bar";
import { Link } from "react-router-dom";
import SocialLogin from "../shared/SocialLogin";
const SignUp = () => {
  const [isVisible, setVisible] = useState(false);
  const toggle = () => {
    setVisible(!isVisible);
  };
  const password = "24654687454687";
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
      <form>
        <input
          className="border border-[#F3F3F3] w-full py-4 px-3 rounded-lg font-medium text-[16px] mb-[25px] focus:outline-none"
          type="email"
          placeholder="@ Your Email "
        />
        <div class="relative flex justify-end items-center border border-[#F3F3F3] w-full rounded-lg font-medium mb-[30px]">
          <i className="pl-[1rem] cursor-pointer">
            <img src={name} alt="" />
          </i>
          <input
            id="name"
            type="text"
            name="name"
            class="h-14 w-full   focus:outline-none focus:border-primary ml-2"
            placeholder="Your Name"
          />
        </div>
        <div class="relative flex justify-end items-center border border-[#F3F3F3] w-full rounded-lg font-medium">
          <i className="pl-[1rem] cursor-pointer">
            <img src={lock} alt="" />
          </i>
          <input
            id="password"
            type={!isVisible ? "password" : "text"}
            name="password"
            class="h-14 w-full  focus:outline-none focus:border-primary ml-2"
            placeholder="Create Password"
          />
          <i className="pr-[1rem] cursor-pointer" onClick={toggle}>
            {isVisible ? (
              <BsEyeFill className="text-[#DCDFE5] text-2xl" />
            ) : (
              <BsEyeSlashFill className="text-[#DCDFE5] text-2xl" />
            )}
          </i>
        </div>
        <PasswordStrengthBar className="mt-[25px]" password={password} />

        <div className="flex items-center mb-[35px] text-[#B0B7C3] ">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            className="lg:w-[28px] lg:h-[28px] rounded-lg bg-[#EDEFF1] "
            required
          />
          <label
            for="default-checkbox"
            className="ml-2 text-[16px] font-medium "
          >
            I agree to the Terms & Conditions
          </label>
        </div>
        <input
          className="bg-[#377DFF] p-3 w-full text-[#FFFFFF] font-medium rounded-lg "
          type="submit"
          value="Sign Up"
        />
      </form>
      <p className="text-center mt-[30px] text-[#B0B7C3] font-medium text-[16px]">
        Already have an account?{" "}
        <Link className="text-[#377DFF]" to="/login">
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
