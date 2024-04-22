import React from "react";
import { useState } from "react";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      email: "",
      password: "",
      remember: false,
    });
  };

  const handleChecktChange = (e) => {
    let name = e.target.name;
    let checked = e.target.checked;
    setFormData({ ...formData, [name]: checked });
  };
  return (
    <div className="w-full bg-slate-50">
      <div className="container mx-auto px-28 flex justify-center items-center py-20">
        <div className="w-2/5 shadow-lg bg-white rounded-md flex flex-col gap-3 justify-center items-center p-3">
          <h3 className="text-2xl font-semibold">Sign in </h3>
          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col gap-2 items-center p-5"
          >
            <label htmlFor="email"></label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="w-full p-2 rounded-md text-sm border"
            />

            <label htmlFor="password"></label>
            <input
              placeholder="Password"
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full p-2 rounded-md text-sm border"
            />
            <div className="flex  w-full justify-between">
              <div className="flex gap-1 text-sm p-2">
                <input
                  type="checkbox"
                  id="remember"
                  onChange={handleChecktChange}
                  name="remember"
                  checked={formData.remember}
                />
                <label htmlFor="remember">Remember me</label>
              </div>
              <div className="flex items-center">
                <p className="text-sm">Forget Password</p>
              </div>
            </div>

            <input
              type="submit"
              value="Submit"
              className="bg-green-500 p-2 rounded-lg text-white w-full hover:bg-green-600  cursor-pointer"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
