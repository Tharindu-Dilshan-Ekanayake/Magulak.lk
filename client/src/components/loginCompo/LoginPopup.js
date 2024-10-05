import React from 'react';

export default function LoginPopup() {
  return (
    <div className="flex items-center justify-center h-screen border">
      <form className="w-[400px] p-6 bg-white rounded-lg shadow-lg">
        <div className="mb-4">
          <label htmlFor="emailOrMobile" className="block text-sm font-medium text-gray-700 text-start">
            Email or Mobile Number
          </label>
          <input
            id="emailOrMobile"
            className="w-full h-12 px-5 mt-2 border-2 rounded-lg focus:outline-none focus:border-yellow-500"
            placeholder="Email or Mobile Number"
            type="text"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 text-start">
            Password
          </label>
          <input
            id="password"
            className="w-full h-12 px-5 mt-2 border-2 rounded-lg focus:outline-none focus:border-yellow-500"
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="flex justify-end mb-4">
          <button type="button" className="text-yellow-500 hover:underline">
            Forget password?
          </button>
        </div>
        <div>
          <button type="submit" className="w-full h-12 font-medium text-white bg-yellow-500 rounded-lg hover:bg-yellow-600">
            LOGIN
          </button>
        </div>
      </form>
    </div>
  );
}
