import { Link } from 'react-router-dom';
import EastIcon from '@mui/icons-material/East';
import kcp_logo from '../../assets/logo_kcp_black.png';
import Helmet from 'react-helmet';
import Card from '../../components/courseCard/courseCard';

const Index = () => {

    const disney_logo = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/17f26397-fad3-4f1c-9503-a7924e05bb2d/dg1c0l1-b9e5c778-1e04-4db2-8d19-69d1db8a97f5.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzE3ZjI2Mzk3LWZhZDMtNGYxYy05NTAzLWE3OTI0ZTA1YmIyZFwvZGcxYzBsMS1iOWU1Yzc3OC0xZTA0LTRkYjItOGQxOS02OWQxZGI4YTk3ZjUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.D_Mgu75Zx9jhIQQYDHLDOTNobdnV6-Jp-OhWM8VwXn8';
    const aaj_tak_logo = 'https://seeklogo.com/images/A/aaj-tak-logo-D2084561E9-seeklogo.com.png';
    const amazon_logo = 'https://upload.wikimedia.org/wikipedia/commons/4/41/Amazon_PNG6.png';
    const samsung_logo = 'https://parspng.com/wp-content/uploads/2022/06/samsungpng.parspng.com-2.png';
    const office_image = 'https://as1.ftcdn.net/v2/jpg/02/77/25/52/1000_F_277255297_9Vr8CDHzYPQrawX2ZR3zvd2EzZTbRPjQ.jpg';
    const consultation_image = 'https://previews.123rf.com/images/filata/filata1808/filata180800004/105842682-girl-telephone-consultant-in-workplace-online-consultation-vector-illustration.jpg';

    const cardData = [
        {
        "name": "Basic",
        "body": "All the software included inside Basic course to cater the needs of official purpose.",
        "link": "/courses",
        "image": "https://t4.ftcdn.net/jpg/04/43/40/53/360_F_443405385_LsnPskAG8o2wqWLA04V0cnbbCXjO4Vwi.jpg"
        },
        {
        "name": "Programming",
        "body": "All the programming languages included inside Programming course to cate the needs of modern developer.",
        "link": "/courses",
        "image": "https://as2.ftcdn.net/v2/jpg/03/67/89/85/1000_F_367898595_6pz7ALMD0fSZZGlF2sEvblrxV03Hue7r.jpg"
        },
        {
        "name": "Designing",
        "body": "All the skills included inside Designing course to cate the needs of creative demands of market.",
        "link": "/courses",
        "image": "https://t4.ftcdn.net/jpg/04/95/28/65/360_F_495286577_rpsT2Shmr6g81hOhGXALhxWOfx1vOQBa.jpg"
        },
        {
        "name": "Accounting",
        "body": "All the software included inside Accounting couse to cate the needs of present day ledger maintenance.",
        "link": "/courses",
        "image": "https://thumbs.dreamstime.com/b/hand-using-calculator-accounting-concept-panoramic-banner-male-143333510.jpg"
        },
        {
        "name": "Typing",
        "body": "Special course to increase the typing speeds of individual to tachle fast pace typing speeds needed in market.",
        "link": "/courses",
        "image": "https://as1.ftcdn.net/v2/jpg/03/48/10/62/1000_F_348106259_vIolUo1hYFUrWGnmLLbsy1sB1YIVGYd2.jpg"
        },
    ]

    return (
        <>
        <Helmet>
            <title>Kris Computer Point</title>
        </Helmet>

        <div className='flex flex-col-reverse lg:flex-row items-center justify-center h-[90vh] mx-6'>
            <div className='lg:w-max w-full lg:me-12'>
                <p className='lg:text-9xl text-7xl lg:text-end text-center font-bold max-w-max'>Kris Computer Point</p>
                <p className='lg:text-end text-center md:text-4xl text-xl italic'>We Make Professional</p>
            </div>
            <div className='lg:border-l-2 lg:border-black lg:p-14 mb-8 lg:mb-0 lg:w-2/3'>
                <img src={kcp_logo} alt="KCP Logo" className='lg:h-96 h-60' />
            </div>
        </div>
        <p className='text-center text-3xl italic my-5 font-semibold'>
            Who are <span className='font-bold not-italic'>WE</span>?
        </p>
        <div className='flex flex-col md:flex-row-reverse justify-center items-center'>
            <div className='md:ms-6 p-8 text-center md:text-start md:p-12 text-xl'>
                <p>
                    We are a computer education institution founded in 2000 and since imparting quality and professional education in the field of computer sciences.
                </p>
                <p className='text-center mt-10 mb-2 underline underline-offset-2 text-2xl'>
                    Our <span className='font-bold italic'>AIM</span>
                </p>
                <p>
                    We as <span className='italic'>Kris Computer Point</span> strives to make professional employees who can withstand ever increasing demands and complexities of market.
                </p>
            </div>
            <div className='md:me-6 p-8'>
                <img src={office_image} alt="Office Space" className='h-3/4' />
            </div>
        </div>

        <div className='flex justify-center items-center flex-wrap'>
            {cardData.map((data, index) => (
                <Card key={index} name={data.name} body={data.body} image={data.image} link={data.link} />
            ))}
        </div>
        <div className='text-center pb-6'>
            <Link to='/courses' className='bg-black hover:bg-white text-white transition-all hover:scale-105 hover:text-black rounded-xl w-[80%] inline-block p-3 text-xl border-2 border-black'>
                Explore all courses &nbsp; <EastIcon />
            </Link>
        </div>

        <p className='text-center p-3 md:p-0 md:text-2xl md:underline md:underline-offset-4 my-5 mb-9 md:font-semibold'>
            Students getting placed in reputed organizations
        </p>
        <div className="bg-slate-200 flex-col flex justify-around p-4 items-center flex-wrap md:flex-row">
            <img src={disney_logo} alt="" className='w-44 m-4 md:m-1 saturate-0 hover:saturate-100' />
            <img src={aaj_tak_logo} alt="" className='h-20 m-4 md:m-1 saturate-0 hover:saturate-100' />
            <img src={amazon_logo} alt="" className='w-40 m-7 md:m-1 saturate-0 hover:saturate-100' />
            <img src={samsung_logo} alt="" className='w-40 m-1 saturate-0 hover:saturate-100' />
        </div>

        <p className='p-4 text-center text-3xl my-8'>
            Book <span className='uppercase bg-yellow-300 italic font-bold'>free</span> Consultation
        </p>
        <div className='flex flex-row justify-around overflow-auto lg:overflow-hidden p-2 sm:p-8 lg:p-0 lg:pe-4 items-center mb-16 border-2 border-slate-300 sm:w-[80%] w-[90%] mx-auto rounded-2xl shadow-lg'>
            <div className='hidden lg:block w-1/2'>
                <img src={consultation_image} alt="Consultation Image" className='' />
            </div>
            <form method='POST' action='' className='flex flex-col lg:w-1/2 lg:pe-16'>
                <p className='text-center font-bold text-2xl lg:my-8 mb-8 mt-2'>Contact us</p>
                <label htmlFor="name" className='mb-1 font-semibold'>Name</label>
                <input type="text" name="name" id="name" placeholder='Full Name' className='mb-4 border-black border px-4 py-2 rounded-md text-black' />
                <label htmlFor="email" className='mb-1 font-semibold'>Email</label>
                <input type="email" name="email" id="email" placeholder='Email address' className='mb-4 border-black border px-4 py-2 rounded-md text-black' />
                <label htmlFor="number" className='mb-1 font-semibold'>Contact Number</label>
                <input type="tel" name="number" id="number" placeholder='Phone number' className='mb-4 border-black border px-4 py-2 rounded-md text-black' />
                <label htmlFor="courses" className='mb-1 font-semibold'>Course opted</label>
                <select name="courses" id="courses" className='mb-4 border-black border px-4 py-2 rounded-md text-black'>
                    <option value="programming">Programming</option>
                    <option value="accounting">Accounting</option>
                    <option value="office">MS Office</option>
                    <option value="design">Designing</option>
                    <option value="type">Typing</option>
                </select>
                <div className='mb-7'>
                    <input type="checkbox" name="tnc" id="tnc" value='yes' />
                    <label htmlFor="tnc">&nbsp;Agree to Terms and Conditions</label>
                </div>
                <button type="submit" className='mb-6 lg:mb-10 bg-black text-white rounded-md p-2 border border-black hover:bg-white hover:text-black'>
                    Continue
                </button>
            </form>
        </div>
        </>
    )
}

export default Index;