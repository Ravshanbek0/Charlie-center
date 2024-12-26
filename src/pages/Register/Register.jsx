import React, { useState } from 'react'

function Register() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
                    Register
                </h2>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Your Name"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="you@example.com"
                            required
                        />
                    </div>
                    <div className="relative">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type={passwordVisible ? 'text' : 'password'}
                            id="password"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="********"
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setPasswordVisible(!passwordVisible)}
                            className="absolute inset-y-0 right-0 flex items-center pr-3"
                        >
                            {passwordVisible ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-gray-500"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path d="M10 3a7 7 0 00-7 7c0 3.87 7 7 7 7s7-3.13 7-7a7 7 0 00-7-7zm0 12a5.992 5.992 0 01-4.6-2.09c.392-.428.86-.84 1.39-1.22a4 4 0 006.42 0c.53.38.998.792 1.39 1.22A5.992 5.992 0 0110 15zm-3-5a3 3 0 016 0 3 3 0 01-6 0z" />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-gray-500"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M.458 10C1.732 4.943 5.522 2 10 2c4.478 0 8.268 2.943 9.542 8-.1.513-.256 1.01-.458 1.492A9.987 9.987 0 0110 18c-4.478 0-8.268-2.943-9.542-8A9.987 9.987 0 01.458 10zM10 4a6 6 0 00-4.28 10.295A7.963 7.963 0 0110 16a7.963 7.963 0 014.28-1.705A6 6 0 0010 4zm0 4a2 2 0 110 4 2 2 0 010-4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Register
                    </button>
                </form>
                <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-500">Or continue with</span>
                    </div>
                </div>
                <button
                    onClick={() => {
                        // Google Sign-In Logic Goes Here
                        alert('Google Sign-In');
                    }}
                    className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    <img
                        src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000"
                        alt="Google Logo"
                        className="h-5 w-5 mr-2"
                    />
                    Continue with Google
                </button>
            </div>
        </div>
    )
}

export default Register