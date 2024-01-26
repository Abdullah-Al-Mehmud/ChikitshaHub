import { useLoaderData, useParams } from "react-router-dom";

const Readmore = () => {
    const details = useLoaderData();
const {id}=useParams();
const idInt = parseInt(id);
  const eventDetails = details.find((detail) => detail.id === idInt);
    console.log(details);
    return(
        <div>
            <div className="bg-[url('https://i.ibb.co/qYS91BQ/banner2.jpg')] bg-no-repeat bg-cover">
        <div className="w-full bg-black bg-opacity-70 lg:pb-40 lg:pt-36 md:pb-28 md:pt-24 pb-20 pt-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="pt-10 text-[#ffffffea] w-full lg:text-left text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                Read More
              </h2>
              <p className="font-medium text-white mt-1">
                Home &gt; Tips &gt; <span className="text-[#409bd4]">Read More</span>
              </p>
            </div>
          </div>
        </div>
      </div>
              <div>

              <div className="max-w-screen-lg mx-auto p-5 sm:p-10 md:p-16">

<div className="mb-10 rounded overflow-hidden flex flex-col mx-auto">
    <a href="#"
        className="text-xl sm:text-4xl font-semibold my-5  transition duration-500 ease-in-out inline-block mb-2">
            {eventDetails.title}
        </a>

    <div className="relative">
        <a href="#">
          <img src={eventDetails.image} alt="" />
        </a>
    </div>
    <p className="text-gray-700 py-5 text-base leading-8">
       {eventDetails.long_description}
    </p>
    <div className="py-5 text-sm font-regular text-gray-900 flex">
        <span className="mr-3 flex flex-row items-center">
            
            <span className="ml-1">{eventDetails.post_date}</span></span>
        <a href="#" className="flex flex-row items-center hover:text-indigo-600">

        </a>
    </div>
    <hr/>

</div>

</div>

              </div>
             
        </div>
    )}
export default Readmore;