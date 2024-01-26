import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Tips = () => {
  const [TipsData, setTipsData] = useState([]);

  useEffect(() => {
    fetch("Tips.json")
      .then((res) => res.json())
      .then((data) => setTipsData(data));
  }, []);
  console.log(TipsData);
  return (
    <div>
      <div className="bg-[url('https://i.ibb.co/qYS91BQ/banner2.jpg')] bg-no-repeat bg-cover">
        <div className="w-full bg-black bg-opacity-70 lg:pb-40 lg:pt-36 md:pb-28 md:pt-24 pb-20 pt-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="pt-10 text-[#ffffffea] w-full lg:text-left text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                Tips
              </h2>
              <p className="font-medium text-white mt-1">
                Home &gt; <span className="text-[#409bd4]">Tips</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="flex flex-col my-20 justify-center max-w-6xl min-h-screen px-4 py-10 mx-auto sm:px-6">
        <div className="flex flex-wrap -mx-4">
          {TipsData.map((tips, idx) => (
            <div
              key={idx}
              className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col"
            >
              <img
                src={tips.image}
                alt="Card img"
                className="object-cover object-center w-full h-48"
              />
              <div className="flex flex-grow">
                <div className="triangle"></div>
                <div className="flex flex-col justify-between px-4 py-6 bg-white   text">
                  <div>
                    <p className="block mb-4 text-2xl font-black leading-tight ">
                      {tips.title}
                    </p>
                    <p className="mb-4">
                      {tips.long_description.slice(0, 70)}........
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <Link to={`/readMores/${tips.id}`}>
                      <button className="inline-block pb-1 mt-2 text-base font-black text-[#409bd4] uppercase border-b border-transparent hover:border-blue-600">
                        Read More -&gt;{" "}
                      </button>
                    </Link>
                    <p>
                      <span>{tips.post_date}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
export default Tips;
