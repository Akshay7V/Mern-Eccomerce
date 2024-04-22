import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/user/signup", {
        headers: {
          "Content-Type": "application/json",
        },
        method: 'POST',
        body: JSON.stringify({ email, password }),
      });
      if (res.ok) {
        const data = res.json();
        console.log(data);
        window.location.href = '/signin'; // Redirect to the '/signin' route
      } else {
        console.error("Error ", await res.json());
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-96 w-72 bg-blue-200 flex flex-col gap-2 mt-24 mx-auto rounded-xl p-4">
      <h2 className="text-2xl font-semibold text-center">
        Create Your Account
      </h2>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <input
          className="w-full h-10 p-2 border-2 border-gray-500 rounded-md"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-full h-10 p-2 border-2 border-gray-500 rounded-md"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="w-full py-2 px-1 bg-black text-white rounded-md"
          type="submit"
        >
          Sign Up
        </button>
      </form>
      <p className="text-center">
        Already have an account?{" "}
        <Link className="font-semibold" to={"/signin"}>
          Sign In
        </Link>
      </p>
    </div>
  );
}
