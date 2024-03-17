'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

function Loginpage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const HandleLogin = async () => {
    try {
      {
        /** Apı login check*/
      }
      var response = await axios.post(
        'https://u-trust-backend-vercel.vercel.app/login',
        {
          Username: username,
          Password: password,
        }
      );

      var data: {
        success: boolean;
        message: string;
      } = response.data;
      if (data.success == true) {
        router.push('/pages/mainpage');
      }

      console.log(response.data);
    } catch (error) {
      console.error('Giriş başarısız:', error);
    }
  };

  return (
    <div className="w-screen h-screen loginbackground">
      <div className="flex flex-col p-8 justify-center items-center h-full">
        {' '}
        {/** Should check data types */}
        <div className="mt-20">
          <h1 className="font-bold">UserName</h1>
          <input
            className="border-4 rounded-md p-4 my-4"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <h1 className="font-bold">Password</h1>
          <input
            className="border-4 rounded-md p-4 my-4"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {/** Login check should add using api */}
        <button
          className="border-2 p-4 rounded-md border-white duration-1000 hover:bg-slate-500"
          onClick={HandleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Loginpage;
