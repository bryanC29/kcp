import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const importCourseData = async (courseName) => {
    try {
        const courseData = await import(`../../courses/detailed/${courseName}.json`);
        return courseData.default;
    } catch (error) {
        console.error("Error loading course data:", error);
        return null;
    }
};

const Course = () => {
    const { courseName } = useParams();
    const [course, setCourse] = useState(null);

    useEffect(() => {
        const fetchCourseData = async () => {
            const data = await importCourseData(courseName);
            setCourse(data);
        };

        fetchCourseData();
    }, [courseName]);

    if (!course) return <div>Error in Loading document</div>;

    const avatar = 'https://cdn-icons-png.flaticon.com/512/147/147144.png';

    return (
        <>
            <div className='bg-slate-200 flex flex-col lg:flex-row-reverse p-4'>
                <div>
                    <h1 className='text-center lg:text-start text-3xl font-semibold px-2'>{course.heading}</h1>
                    <div className='hidden lg:block'>
                        <p className='p-4 italic text-slate-900'>{course.description}</p>
                        <div className="flex flex-row items-center my-4">
                            <img src={avatar} alt="" className="rounded-full w-[1.8rem] me-2" />
                            <p className='font-semibold'>{course.instructor} - <span className='text-base font-normal italic text-slate-700'>Instructor</span></p>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className='flex flex-row items-baseline'>
                                <p className="text-slate-900 text-xl font-semibold">Price:&nbsp;</p>
                                <p className='text-sm text-slate-700 line-through'>&#8377;{course.prevRate}</p>
                                <p className='font-semibold text-lg'>&nbsp;&#8377;{course.rate}</p>
                                <p className="inline-block text-sm">&nbsp;/ month</p>
                            </div>
                            <Link to={course.register} className='py-2 px-4 border border-black rounded-md text-white hover:text-black bg-black hover:bg-transparent'>Register</Link>
                        </div>
                    </div>
                </div>
                <img src={course.image} alt="" className='lg:w-2/6 w-full my-6 lg:me-8 lg:my-4 lg:ms-2 box-border rounded-xl' />
            </div>
            <div className='flex flex-col lg:flex-row w-full my-8 flex-wrap'>
                <div className='text-black lg:border-e-4 border-black flex w-full lg:w-1/3 flex-col flex-nowrap p-4 px-8'>
                    <h2 className='text-2xl text-slate-600 font-semibold text-start border-b-2 border-slate-600 mb-4 pb-1'>Details</h2>
                    <div className="flex flex-row px-2 my-3">
                        <p className='font-semibold me-2 min-w-[5rem]'>Difficulty:</p>
                        <p>{course.level}</p>

                    </div>
                    <div className="flex flex-row px-2 my-3">
                        <p className='font-semibold me-2 min-w-[5rem]'>Duration:</p>
                        <p>{course.duration}</p>

                    </div>
                    <div className="flex flex-row px-2 my-3">
                        <p className='font-semibold me-2 min-w-[5rem]'>Software:</p>
                        <p>{course.software}</p>

                    </div>
                    <div className="flex flex-row px-2 my-3">
                        <p className='font-semibold me-2 min-w-[5rem]'>Skills:</p>
                        <p>{course.skills}</p>

                    </div>
                    <div className="flex flex-row px-2 my-3">
                        <p className='font-semibold me-2 min-w-[5rem]'>Fee:</p>
                        <p>&#8377;{course.rate}</p>

                    </div>
                    <div className="flex flex-row px-2 my-3">
                        <p className='font-semibold me-2 min-w-[5rem]'>Teacher:</p>
                        <p>{course.instructor}</p>

                    </div>
                    <div className="flex flex-row px-2 my-3">
                        <p className='font-semibold me-2 min-w-[5rem]'>Remarks:</p>
                        <p>{course.remarks}</p>

                    </div>
                    <Link to={course.register} className='w-full text-center bg-black hover:bg-transparent rounded-md my-16 text-white hover:text-black border border-black py-2 font-semibold lg:sticky lg:bottom-4'>Register Now</Link>
                </div>
                <div className='px-8 w-full lg:w-2/3'>
                    <h2 className='text-2xl text-slate-600 font-semibold text-start border-b-2 border-slate-600 mb-4 pb-1'>About course</h2>
                    <p className='text-slate-900'>{course.body}</p>
                    <Link to={course.register} className='lg:hidden inline-block w-full text-center bg-black hover:bg-transparent rounded-md my-16 text-white hover:text-black border border-black py-2 font-semibold sticky bottom-4'>Register Now</Link>
                </div>
            </div>
        </>
    );
};

export default Course;