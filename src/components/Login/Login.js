import React, { useRef } from 'react';

const Login = () => {
    const email = useRef();
    const password = useRef();

    const handleSignIn = (e) =>{
        e.preventDefault()
        console.log(email.current.value)
    }
  return (
    <div className="flex justify-center items-center bg-primary w-4/5">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-secondary mb-4">Login</h2>
        <form onSubmit={e=>handleSignIn(e)}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-secondary">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-secondary rounded"
              placeholder="Email"
              ref={email}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-secondary">Password</label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border border-secondary rounded"
              placeholder="Password"
              ref={password}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-tertiary text-white rounded hover:bg-opacity-90"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
