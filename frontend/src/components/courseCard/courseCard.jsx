import { Link } from 'react-router-dom';
import EastIcon from '@mui/icons-material/East';

const Card = ({name, body, image, link}) => {

    return (
        <>
        <div className="w-[90%] h-max lg:w-[20rem] rounded-2xl border border-slate-400 shadow-md m-12 transition-all hover:scale-105 hover:shadow-xl">
            <img src={image} alt="Laptop" className="max-w-max-full rounded-t-2xl p-4" />
            <div className="p-4">
                <h1 className="inline-flex items-center text-lg font-semibold">
                    {name}
                </h1>
                <p className="mt-3 text-sm text-gray-700 p-2">
                    {body}
                </p>
                <Link to={link} type="button" className="mt-4 w-full text-center block rounded-md bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-white border border-black hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black" >
                    Learn More&nbsp; <EastIcon />
                </Link>
            </div>
        </div>
        </>
    )
}

export default Card;