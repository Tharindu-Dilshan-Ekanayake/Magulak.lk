import React from 'react';
import BG from '../../images/BG.jpg';

export default function LoginPopup() {
  return (
    <div
      className="relative flex items-center justify-center h-screen"
      style={{
        backgroundImage: `url(${BG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Form container */}
      <form className="relative w-[400px] p-8 bg-black rounded-lg shadow-lg bg-opacity-60">
        <div className="mb-6">
          <label
            htmlFor="emailOrMobile"
            className="block text-sm font-semibold text-yellow-400 text-start"
          >
            Email or Mobile Number
          </label>
          <input
            id="emailOrMobile"
            className="w-full h-12 px-5 mt-2 text-gray-100 bg-gray-100 border-2 border-gray-600 rounded-lg focus:outline-none focus:border-yellow-400 bg-opacity-20"
            placeholder="Enter your email or mobile"
            type="text"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-semibold text-yellow-400 text-start"
          >
            Password
          </label>
          <input
            id="password"
            className="w-full h-12 px-5 mt-2 text-gray-100 bg-gray-100 border-2 border-gray-600 rounded-lg focus:outline-none focus:border-yellow-400 bg-opacity-20"
            type="password"
            placeholder="Enter your password"
          />
        </div>
        <div className="flex justify-end mb-4">
          <button type="button" className="text-yellow-400 hover:underline">
            Forgot password?
          </button>
        </div>
        <div>
          <button
            type="submit"
            className="w-full h-12 font-semibold text-white bg-yellow-500 rounded-lg hover:bg-yellow-600"
          >
            LOGIN
          </button>
        </div>
        <div className="pt-6 opacity-40">
          <hr />
        </div>
        <div className="pt-4 text-left">
          <p className="text-sm text-gray-300">
            Don't have an account? 
            <span className="ml-1 text-yellow-400">Register below</span>
          </p>
        </div>
        <div className="pt-6">
          <button className="w-full h-12 font-semibold text-white border-2 border-yellow-500 rounded-lg hover:bg-yellow-600 hover:border-none">
            REGISTER
          </button>
        </div>
      </form>
    </div>
  );
}
