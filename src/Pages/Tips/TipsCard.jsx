/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const TipsCard = ({ data }) => {
  return (
    <div>
      <article className="flex bg-slate-50 transition hover:shadow-xl rounded-xl">
        {/* <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
          <time
            datetime="2022-10-10"
            className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
          >
            <span>2022</span>
            <span className="w-px flex-1 bg-gray-900/10"></span>
            <span>Oct 10</span>
          </time>
        </div> */}

        <div className="hidden sm:block sm:basis-56 w-auto">
          <img
            alt=""
            src={
              data?.photoURL
                ? data?.photoURL
                : `https://i.ibb.co/Lh5BzVX/log-Inbanner.png`
            }
            className="aspect-square h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-1 flex-col justify-between">
          <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
            <a href="#">
              <h3 className="font-bold uppercase text-gray-900">
                {data.heading}
              </h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
              {data.description.slice(0, 100)}
            </p>
          </div>

          <div className="sm:flex sm:items-end sm:justify-end ">
            <Link
              to={`/readmores/${data._id}`}
              className="block bg-blue-500 px-5 py-3 text-center text-sm font-bold uppercase text-white transition hover:bg-blue-600 rounded-br-xl"
            >
              Read Blog
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default TipsCard;
