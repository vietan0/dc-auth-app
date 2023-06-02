import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Facebook from '../assets/Facebook.svg';
import Github from '../assets/Github.svg';
import Google from '../assets/Google.svg';
import Twitter from '../assets/Twitter.svg';
import dcLight from '../assets/devchallenges-light.svg';
import dc from '../assets/devchallenges.svg';
import { emailSignIn } from '../firebase';
import { UserContext } from '../contexts/UserContext';

export default function LogIn() {
  const { currentUser, darkMode } = useContext(UserContext);
  const nav = useNavigate();

  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    await emailSignIn(data);
  };
  const onError = (errors, e) => console.log(errors, e);

  useEffect(() => {
    if (currentUser) nav('/');
  }, [currentUser, nav]);

  return (
    <div
      id="LogIn"
      className="flex w-full flex-col gap-8 rounded-xl p-6 xs:m-auto xs:max-w-md xs:p-12 xs:outline xs:outline-1 xs:outline-slate-500"
    >
      <div
        id="form-header"
        className="flex flex-col gap-4"
      >
        <img
          src={darkMode ? dcLight : dc}
          alt="devchallenges logo"
          className="mb-4 max-w-[120px]"
        />
        <p className="text-xl font-bold">Login</p>
      </div>
      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <label
          htmlFor="email"
          className="relative w-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="absolute left-[10px] top-[10px] h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
          <input
            type="email"
            {...register('email')}
            id="email"
            placeholder="Email"
            className="w-full rounded py-2 pl-10 pr-4 outline outline-1 outline-slate-500"
          />
        </label>
        <label
          htmlFor="password"
          className="relative w-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="absolute left-[10px] top-[10px] h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
            />
          </svg>
          <input
            type="password"
            {...register('password')}
            id="password"
            placeholder="Password"
            className="w-full rounded py-2 pl-10 pr-4 outline outline-1 outline-slate-500"
          />
        </label>
        <button className="rounded bg-blue-500 px-4 py-2 text-white">Log In</button>
      </form>
      <div id="social-auth">
        <p className="mb-4 text-center">or continue with these social profiles</p>
        <div
          id="providers"
          className="flex justify-center gap-4"
        >
          <button>
            <img
              src={Google}
              alt="google logo"
            />
          </button>
          <button>
            <img
              src={Github}
              alt="github logo"
            />
          </button>
          <button>
            <img
              src={Facebook}
              alt="facebook logo"
            />
          </button>
          <button>
            <img
              src={Twitter}
              alt="twitter logo"
            />
          </button>
        </div>
      </div>
      <p className="text-center">
        Don&apos;t have an account yet?{' '}
        <Link
          to="/signup"
          className="text-blue-500"
        >
          Signup
        </Link>
      </p>
    </div>
  );
}
