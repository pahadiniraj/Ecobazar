import React from "react";
import { NavLink } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="bg-slate-50 w-full">
      <div className=" container mx-auto px-32 ">
        <div className=" flex justify-center items-center h-[531px]">
          <div className="shadow-md flex flex-col items-center w-2/6 gap-3 px-4  py-4 rounded-md border ">
            <h3 className="text-2xl font-semibold">Create Account</h3>
            <div className=" w-full  flex flex-col gap-4">
              <input
                type=""
                className="w-full rounded-sm border p-1 text-sm"
                placeholder="Email"
              />
              <input
                type=""
                className="w-full rounded-sm border p-1 text-sm"
                placeholder="Password"
              />
              <input
                type=""
                className="w-full rounded-sm border p-1 text-sm"
                placeholder="Confirm Password"
              />
            </div>
            <div className="flex justify-start gap-1 w-full">
              <input type="checkbox" className="" />
              <p className="text-xs">Accept all terms & Conditions</p>
            </div>
            <button className="bg-green-500 w-full rounded-2xl text-white py-1 hover:bg-green-600 ">
              Create Account
            </button>
            <p className="text-xs flex gap-1">
              Already have account
              <NavLink to="/signin" className="hover:text-green-600">
                Login
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
