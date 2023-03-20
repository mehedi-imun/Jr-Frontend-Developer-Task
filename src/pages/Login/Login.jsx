import React, { useState } from "react";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import lock from "../../assets/lock-rounded.png";
import { Link } from "react-router-dom";
import SocialLogin from "../shared/SocialLogin";

const Login = () => {
  const [isVisible, setVisible] = useState(false);
  const toggle = () => {
    setVisible(!isVisible);
  };
  return (
    <div className="lg:w-[540px] w-[95%] mx-auto">
      <div className=" text-center mt-2 capitalize">
        <h2 className="text-[#323B4B] font-bold text-[26px]">Sign In</h2>
        <p className="text-[#8A94A6] mt-4 mb-6 text-[18px]">
          Welcome back, you’ve been missed!
        </p>
      </div>
      <SocialLogin></SocialLogin>
      <form>
        <input
          className="border border-[#F3F3F3] w-full py-4 px-3 rounded-lg font-medium text-[16px] mb-[25px] focus:outline-none"
          type="email"
          placeholder="@ Your Email "
        />
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
        <div className="flex items-center my-[35px] text-[#B0B7C3] ">
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
            Remember Me
          </label>
        </div>
        <input
          className="bg-[#377DFF] p-3 w-full text-[#FFFFFF] font-medium rounded-lg "
          type="submit"
          value="Sign In"
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
