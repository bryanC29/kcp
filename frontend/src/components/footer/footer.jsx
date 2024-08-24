import logo from '../../assets/logo_kcp_black.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer className="bg-slate-100">

                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">

                    <div className="md:flex md:justify-between">

                        <div className="mb-6 md:mb-0 md:me-7">
                            <span className="flex flex-col items-center">
                                <img src={logo} className="h-16 me-3" alt="KCP Logo" />
                                <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">
                                    Kris Computer Point
                                </span>
                                <span>We make Professional</span>
                            </span>
                        </div>

                        <div className="grid text-center grid-cols-1 gap-8 sm:gap-6 sm:text-start sm:grid-cols-2 md:grid-cols-4">

                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase underline underline-offset-2">Links</h2>
                                <ul className="text-gray-500 font-medium">
                                    <li className="mb-4">
                                        <Link to="/" className="hover:underline">Home</Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link to="/courses" className="hover:underline">Courses</Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link to="/login" className="hover:underline">Student Login</Link>
                                    </li>
                                    <li>
                                        <Link to="/registration" className="hover:underline">Student Registration</Link>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase underline underline-offset-2">Courses</h2>
                                <ul className="text-gray-500 font-medium">
                                    <li className="mb-4">
                                        <Link to="/courses" className="hover:underline ">Programming</Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link to="/courses" className="hover:underline ">Accounting</Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link to="/courses" className="hover:underline ">MS Office</Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link to="/courses" className="hover:underline ">Designing</Link>
                                    </li>
                                    <li>
                                        <Link to="/courses" className="hover:underline">Typing</Link>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase underline underline-offset-2">Social</h2>
                                <ul className="text-gray-500 font-medium">
                                    <li className="mb-4">
                                        <Link to="/" className="hover:underline ">Instagram</Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link to="/" className="hover:underline ">Google</Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link to="/" className="hover:underline ">Facebook</Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link to="/" className="hover:underline ">LinkedIn</Link>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase underline underline-offset-2">Address</h2>
                                <ul className="text-gray-500 font-medium">
                                    <li className="mb-4">
                                        <span>+91 9936344376</span>
                                    </li>
                                    <li>
                                        <span>360, Tiwaripur - 1,<br/> Jajmau, Kanpur - 208010</span>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <hr className="my-6 border-gray-600 sm:mx-auto" />

                    <div className="text-center md:text-start">
                        <span className="text-sm text-gray-600 sm:text-center">
                            &copy; 2024 <a href="/" className="hover:underline italic">Kris Computer Point</a> | All Rights Reserved.
                        </span>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;