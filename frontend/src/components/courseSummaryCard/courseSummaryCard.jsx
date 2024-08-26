import { Link } from 'react-router-dom';
import EastIcon from '@mui/icons-material/East';

const CourseSummaryCard = ({ data }) => {
    const avatar = 'https://cdn-icons-png.flaticon.com/512/147/147144.png';

    return (
        <>
            {data ? (
                data.map((item, index) => (
                    <>
                    <div key={index} className='mx-auto lg:w-[85%] lg:max-h-[20rem] lg:min-h-[15rem] h-max lg:overflow-y-auto w-[90%] overflow-hidden rounded-2xl border-[3px] border-slate-300 bg-slate-50 shadow-slate-200 shadow-md flex flex-col lg:flex-row my-8'>
                        <img src={item.image} alt="" className="w-full lg:w-1/3" />
                        <div className='box-border p-4'>
                            <p className='text-2xl font-bold text-center lg:text-start mb-4'>{item.heading}</p>
                            <p className='px-4 text-base text-gray-500 lg:italic'>{item.description}</p>

                            <div className='lg:flex lg:flex-row lg:justify-between lg:px-12 lg:pe-16 my-4'>
                                <div className='flex flex-row items-center'>
                                    <img src={avatar} alt="" className="rounded-full w-[1.8rem] me-2" />
                                    <p className=''>{item.instructor} - <span className='italic text-slate-500'>Instructor</span></p>
                                </div>

                                <p><span className='italic text-slate-500'>Software used </span> - {item.software}</p>
                            </div>

                            <div className='flex flex-col lg:flex-row justify-between px-4 items-baseline'>
                                <div className='flex flex-row items-baseline'>
                                    <p className='line-through text-sm text-slate-600'>&#8377; {item.prevPrice}</p>
                                    <p className='text-lg'>&nbsp;&#8377; {item.price}&nbsp;</p>
                                    <p className='text-sm'>/ month</p>
                                </div>

                                <Link to={item.readMore} className='underline underline-offset-2'>Read more</Link>

                                <Link to={item.register} className='m-2 lg:m-0 my-4 lg:my-0 w-full lg:w-max text-center lg:text-start border border-black bg-black hover:bg-transparent text-white hover:text-black rounded-lg p-1 px-3'>
                                    Register Now <EastIcon />
                                </Link>
                            </div>
                        </div>
                    </div>
                    </>
                ))
            ) : null}
        </>
    );
}

export default CourseSummaryCard;