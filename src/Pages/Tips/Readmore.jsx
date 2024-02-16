import { useLoaderData } from "react-router-dom";

const Readmore = () => {
  const details = useLoaderData();

  return (
    <div>
      <div className="py-6">
        <div className="max-w-screen-lg mx-auto py-16 lg:py-20">
          <div className="mb-10 rounded overflow-hidden flex flex-col mx-auto">
            <a
              href="#"
              className="text-xl sm:text-4xl font-semibold my-5  transition duration-500 ease-in-out inline-block">
              {details.heading}
            </a>

            <div className="relative">
              <a href="#">
                <img src={details.photoURL} alt="" />
              </a>
            </div>
            <p className="text-gray-700 py-5 text-base leading-8">
              {details.description}
            </p>
            <div className="py-5 text-sm font-regular text-gray-900 flex">
              <span className="mr-3 flex flex-row items-center">
                {/* <span className="ml-1">{eventDetails.post_date}</span> */}
              </span>
              <a
                href="#"
                className="flex flex-row items-center hover:text-indigo-600"></a>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Readmore;
