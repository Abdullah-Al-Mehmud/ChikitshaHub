import { useEffect, useState } from "react";


const Faq = () => {
    const [datas, setDatas] = useState();

    // add your array of object data 
    useEffect(() => {
        fetch('faq.json')
            .then(res => res.json())
            .then(data => setDatas(data.faqs))
    }, [])

    // toggle state and function 
    const [isOpen, setIsOpen] = useState(null);
    const handleToggle = (idx) => setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));

    return (
        <div className="max-w-6xl mx-auto my-14">
            <h2 className="text-5xl font-bold text-center mb-5">Frequently Asked Questions</h2>
            <div className="flex justify-between items-center gap-5">
                {/* faq images */}
                <div className="flex-1">
                    <img src="https://i.ibb.co/VvgxsyS/Questions-pana.png" alt="" />
                </div>
                {/* questions */}
                <div className="rounded-lg py-20 space-y-6 cursor-pointer">
                    {/* maping each accordion  */}
                    {datas?.map((data, idx) => (
                        <div key={idx} onClick={() => handleToggle(idx)} className="flex items-center">
                            {/* the index div  */}
                            <div className="w-16 h-16 bg-[#409bd4] flex justify-center items-center text-white text-2xl font-semibold rounded-xl font-sans">
                                <span>0{idx + 1}</span>
                            </div>
                            <div className="w-10 h-[2px] bg-[#409bd4] relative">
                                <span className="w-3 h-3 bg-white absolute -left-2 -top-[5px] z-40 rounded-full border-2 border-[#409bd4]"></span>
                                <span className="bg-[#409bd4] w-10 h-1"></span>
                            </div>
                            {/* main accordion div  */}
                            <div>
                                <div className="max-w-[450px] bg-sky-50 shadow-md border-t-[12px] p-3 border-[#409bd4] relative">
                                    <span className="h-0 w-0 border-b-[40px] border-b-transparent border-r-[40px] border-r-[#409bd4] absolute top-0 right-0"></span>
                                    <h1 className="text-[#409bd4] text-xl text-center">{data?.question}</h1>
                                </div>
                                <div
                                    className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600  ${isOpen === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                                        }`}
                                >
                                    <div className="overflow-hidden">
                                        <div className=" max-w-[450px] rounded-br-xl rounded-bl-xl bg-[#409bd4] text-white p-6 text-center text-sm">
                                            {data?.answer}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Faq;