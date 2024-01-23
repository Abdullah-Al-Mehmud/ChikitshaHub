import { useEffect, useState } from 'react';
const MoreSpecialties = () => {
    const [specialtiesData, setSpecialtiesData] = useState([]);

    useEffect(() => {
        fetch('../../../public/specialtiesData.json')
            .then(res => res.json())
            .then(data => setSpecialtiesData(data))
    }, [])
    console.log(specialtiesData);
    return(
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12 p-6 md:p-10 mt-12">
         {
            specialtiesData.map((specialties,idx)=> 
            <div key = {idx}  >
            <a href="#"
                className="flex flex-col p-6 space-y-6 transition-all duration-500 bg-white border border-indigo-100 rounded-lg shadow hover:shadow-xl lg:p-8 lg:flex-row lg:space-y-0 lg:space-x-6">
                <div
                    className="flex items-center justify-center w-16 h-16 bg-green-100 border border-green-200 rounded-full shadow-inner lg:h-20 lg:w-20">
                    <img src={specialties.img} alt="" />
                </div>
                <div className="flex-1">
                    <h5 className="mb-3 text-xl font-bold lg:text-2xl">{specialties.name}</h5>
                    <p className="mb-6 text-lg text-gray-600">Find out what plan is right for you</p>
                   
                </div>
            </a>
            
        </div>
        )
         }
        </div>
    )}
export default MoreSpecialties;