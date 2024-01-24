import { useEffect, useState } from "react";

const Tips = () => {
    const [TipsData, setTipsData] = useState([]);

    useEffect(() => {
        fetch('../../../public/Tips.json')
            .then(res => res.json())
            .then(data => setTipsData(data))
    }, [])
    console.log(TipsData);
    return(
        
<section className="flex flex-col my-20 justify-center max-w-6xl min-h-screen px-4 py-10 mx-auto sm:px-6">
  
    <div className="flex flex-wrap -mx-4">
        {
            TipsData.map(tips=><div className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
            <img src={tips.image} alt="Card img" className="object-cover object-center w-full h-48" />
            <div className="flex flex-grow">
                <div className="triangle"></div>
                <div className="flex flex-col justify-between px-4 py-6 bg-white   text">
                    <div>
                       
                        <p
                            className="block mb-4 text-2xl font-black leading-tight ">
                            {tips.title}
                        </p>
                        <p className="mb-4">
                           {tips.long_description.slice(0,100)}
                        </p>
                    </div>
                    <div className="flex justify-between items-center">
                        <a href="#"
                            className="inline-block pb-1 mt-2 text-base font-black text-[#409bd4] uppercase border-b border-transparent hover:border-blue-600">Read
                            More -> </a>
                            <p><span>{tips.post_date}</span></p>
                    </div>
                </div>
            </div>
        </div>)
        }
    </div>
</section>
    )}
export default Tips;