import { Link } from 'react-router-dom';

const Register = () => {
    const loginImage = 'https://static.vecteezy.com/system/resources/previews/006/912/004/non_2x/secure-login-and-sign-up-concept-illustration-vector.jpg';

    return (
        <div className='w-screen h-screen flex items-center justify-center'>
            <div className='border-2 border-slate-600 bg-slate-100 shadow-lg rounded-2xl flex flex-row items-center justify-center flex-wrap overflow-hidden w-5/6 max-w-[90rem]'>
                <img src={loginImage} alt="" className='w-1/2 hidden lg:inline-block h-full' />
                <form action='' method='POST' className='w-1/2 flex flex-col justify-center items-start p-4 px-8'>
                    <p className='font-bold text-xl w-full text-center'>Join us</p>
                    <label htmlFor="name" className='font-semibold text-lg'>Name</label>
                    <input type="text" name="name" id="name" placeholder='Full Name' className='px-4 w-full py-2 rounded-lg shadow-inner m-4 box-border' />
                    <label htmlFor="email" className='font-semibold text-lg'>Email</label>
                    <input type="email" name="email" id="email" placeholder='Email address' className='px-4 w-full py-2 rounded-lg shadow-inner m-4 box-border' />
                    <label htmlFor="password" className='font-semibold text-lg'>Password</label>
                    <input type="password" name="password" id="password" placeholder='Your Password' className='px-4 w-full py-2 rounded-lg shadow-inner m-4 box-border' />
                    <button className='m-4 mt-2 w-full rounded-lg py-2 px-4 bg-black text-white hover:bg-gray-900'>Register</button>
                    <p className='italic text-slate-800 m-4 w-full text-center'>If you already have account please <Link to='/login' className='underline underline-offset-2'>Login</Link> using the link.</p>
                </form>
            </div>
        </div>
    )
}

export default Register;