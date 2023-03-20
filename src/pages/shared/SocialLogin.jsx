import React from "react";
import googleLogo from "../../assets/google-logo.png";
import appleLogo from "../../assets/apple-logo.png";
import or from '../../assets/or.png';
const SocialLogin = () => {
  return (
    <div className="">
        
      <div className="flex lg:flex-row flex-col  justify-between lg:gap-0 gap-3">
        <button className="bg-[#F0F5FA] py-3 px-6  rounded-lg text-[#8A94A6] font-medium ">
          {" "}
          <img className="w-[25px] inline" src={googleLogo} alt="" /> Sign Up
          with Google
        </button>
        <button className="bg-[#F0F5FA] py-3 px-6 rounded-lg text-[#8A94A6] font-medium ">
          <img className="w-[25px] inline mr-2" src={appleLogo} alt="" />
          Sign Up with Apple ID
        </button>
      </div>
      <div className='flex items-center justify-center  my-[30px] '>
                <div  className='w-full h-[2px] bg-[#F0F5FA] '></div>
                <img className="px-3 " src={or} alt="" />
                <div className='w-full h-[2px] bg-[#F0F5FA] '></div>

            </div>
    </div>
  );
};

export default SocialLogin;
