import { Link } from 'react-router-dom';

const Login = () => {
    const loginImage = 'https://static.vecteezy.com/system/resources/previews/006/912/004/non_2x/secure-login-and-sign-up-concept-illustration-vector.jpg';

    return (
        <div className='w-screen h-screen flex items-center justify-center'>
            <div className='border-2 border-slate-600 bg-slate-100 shadow-lg rounded-2xl flex flex-row items-center justify-center flex-wrap overflow-hidden w-5/6 max-w-[90rem]'>
                <img src={loginImage} alt="" className='w-1/2 hidden lg:inline-block h-full' />
                <form action='' method='POST' className='w-1/2 flex flex-col justify-center items-start p-4 px-8'>
                    <p className='font-bold text-xl w-full text-center'>Welcome Back</p>
                    <label htmlFor="email" className='font-semibold text-lg'>Email</label>
                    <input type="email" name="email" id="email" placeholder='Email address' className='px-4 w-full py-2 rounded-lg shadow-inner m-4 box-border' />
                    <label htmlFor="password" className='font-semibold text-lg'>Password</label>
                    <input type="password" name="password" id="password" placeholder='Your Password' className='px-4 w-full py-2 rounded-lg shadow-inner m-4 box-border' />
                    <p className='text-end w-full text-slate-600 text-sm italic underline underline-offset-2'>Forgot Password?</p>
                    <button className='m-4 mt-2 w-full rounded-lg py-2 px-4 bg-black text-white hover:bg-gray-900'>Login</button>
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