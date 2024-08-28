import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState();
    const [successMessage, setSuccessMessage] = useState();
    const navigate = useNavigate();

    const loginImage = 'https://static.vecteezy.com/system/resources/previews/006/912/004/non_2x/secure-login-and-sign-up-concept-illustration-vector.jpg';

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/users/login', {username, password});
            if(response.status === 200) {
                setErrorMessage();
                setSuccessMessage('Login Successful!');
                setTimeout(() => {
                    navigate('/dashboard');
                }, 1000);
            }
        } catch(err) {
            if(err.response && err.response.status === 401) {
                setErrorMessage(err.response.data.message);
                setPassword('');
                setSuccessMessage();
            }
        }
    }

    return (
        <div className='w-screen h-screen flex items-center justify-center'>
            <div className='border-2 border-slate-600 bg-slate-100 shadow-lg rounded-2xl flex flex-row items-center justify-center flex-wrap overflow-hidden w-5/6 max-w-[90rem]'>
                <img src={loginImage} alt="" className='w-1/2 hidden lg:inline-block h-full' />
                <form onSubmit={(e) => handleSubmit(e)} method='POST' className='md:w-1/2 w-full flex flex-col justify-center items-start p-4 px-8'>
                    <p className='font-bold text-xl w-full text-center'>Welcome Back</p>
                    <label htmlFor="email" className='font-semibold text-lg'>Email</label>
                    <input onChange={(e) => setUsername(e.target.value)} value={username} type="email" name="email" id="email" placeholder='Email address' className='px-4 w-full py-2 rounded-lg shadow-inner m-4 box-border' />
                    <label htmlFor="password" className='font-semibold text-lg'>Password</label>
                    <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" name="password" id="password" placeholder='Your Password' className='px-4 w-full py-2 rounded-lg shadow-inner m-4 box-border' />
                    <p className='text-end w-full text-slate-600 text-sm italic underline underline-offset-2'>Forgot Password?</p>
                    <button className='m-4 mt-2 w-full rounded-lg py-2 px-4 bg-black text-white hover:bg-gray-900'>Login</button>
                    {errorMessage && <p className='text-red-600 text-center italic w-full'>{errorMessage}</p>}
                    {successMessage && <p className='text-green-700 text-center italic w-full'>{successMessage}</p>}
                    <div>
                        <input type="checkbox" name="remember" id="remember" className='rounded-lg shadow-inner m-4' />
                        <label htmlFor="remember" className='text-md'>Remember me</label>
                    </div>
                    <p className='italic text-slate-800 m-4 w-full text-center'>If you don&apos;t have account please <Link to='/registration' className='underline underline-offset-2'>Signup</Link> using the link.</p>
                </form>
            </div>
        </div>
    )
}

export default Login;