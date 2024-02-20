import error from '../../assets/images/error.png'
import { Link } from 'react-router-dom';
import { LuArrowUpRight } from 'react-icons/lu';


const Error = () => {
    return (
        <div className=''>
            <div className='px-4 md:px-10 pt-32 pb-28 max-w-[1620px] mx-auto flex flex-col md:flex-row gap-6 items-center'>
                <div data-aos="fade-right" data-aos-duration="2000" className='flex-1'>
                <img src={error} alt="" className='w-full h-auto'/>
                </div>
                <div data-aos="fade-left" data-aos-duration="2000" className='text-center flex-1'>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-snug text-[#222E48]">Oops! Page Not Found</h2>
                <p className='text-[#404A60] mb-6 font-medium text-lg leading-7 max-w-lg mx-auto'>The requested page couldn&lsquo;t be found. Double-check the URL or navigate back to the homepage.</p>
                <Link to='/'>
                <button className="bg-[#409bd4] w-fit text-white border border-[#409bd4] rounded-full px-6 py-3 text-xs md:text-base font-semibold hover:text-[#409bd4] hover:bg-white flex items-center gap-2 mx-auto">
                            Back To Home
                            <LuArrowUpRight className='w-6 h-6' />
                        </button>
                </Link>
                </div>
            </div>
        </div>
    );
};

export default Error;