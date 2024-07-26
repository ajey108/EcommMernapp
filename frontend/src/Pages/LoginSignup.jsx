import React, { useState } from 'react';

const LoginSignup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [state, setState] = useState("SignUp");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted', formData);
  };

  const toggleForm = () => {
    setState(state === "SignUp" ? "Login" : "SignUp");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">{state === "SignUp" ? "Sign Up" : "Login"}</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {state === "SignUp" && (
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
          )}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {state === "SignUp" ? "Sign Up" : "Login"}
          </button>
        </form>
        <div className="mt-6 text-center">
          {state === "SignUp" ? (
            <>
              <h3 className="text-gray-600">Existing User?</h3>
              <button onClick={toggleForm} className="text-indigo-600 hover:text-indigo-800 font-semibold">
                LOGIN
              </button>
            </>
          ) : (
            <>
              <h3 className="text-gray-600">New User?</h3>
              <button onClick={toggleForm} className="text-indigo-600 hover:text-indigo-800 font-semibold">
                REGISTER
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
