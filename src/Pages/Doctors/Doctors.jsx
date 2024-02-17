import { useState } from "react";
// import Slider from 'rc-slider';
import "rc-slider/assets/index.css";
import Rating from "react-rating";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Link, useLoaderData } from "react-router-dom";

const Doctors = () => {
  // const [range, setRange] = useState([0, 1000]);
  const doctorList = useLoaderData();
  const [doctors, setDoctors] = useState(doctorList);
  // const [sortByFeesHighToLow, setSortByFeesHighToLow] = useState(false);
  // const [sortByFeesLowToHigh, setSortByFeesLowToHigh] = useState(false);
  const [sortBy, setSortBy] = useState("");
  const [sortByExperience, setSortByExperience] = useState(false);
  const [sortByRating, setSortByRating] = useState(false);

  const priceHighToLow = () => {
    const sortedDoctors = doctorList.sort((a, b) => b?.fee - a?.fee);
    setDoctors(sortedDoctors);
  };
  const priceLowToHigh = () => {
    const sortedDoctors = doctorList.sort((a, b) => a?.fee - b?.fee);
    setDoctors(sortedDoctors);
  };
  const experience = () => {
    const sortedDoctor = doctorList.sort((a, b) =>
      a?.experience?.year < b?.experience?.year ? 1 : -1
    );
    setDoctors(sortedDoctor);
  };
  const rating = () => {
    const sortedDoctor = doctorList.sort((a, b) =>
      a?.rating < b?.rating ? 1 : -1
    );
    setDoctors(sortedDoctor);
  };

  // const handleSortByFeesHighToLow = () => {
  //   setSortByFeesHighToLow(!sortByFeesHighToLow);
  //   if (!sortByFeesHighToLow) {
  //     priceHighToLow();
  //   } else {
  //     priceLowToHigh();
  //   }
  // };
  // const handleSortByFeesLowToHigh = () => {
  //   setSortByFeesLowToHigh(!sortByFeesLowToHigh);
  //   if (!sortByFeesLowToHigh) {
  //     priceLowToHigh();
  //   } else {
  //     setDoctors(doctorList);
  //   }
  // };

  const handleSortByChange = (event) => {
    const selectedSortBy = event.target.value;
    setSortBy(selectedSortBy);

    if (selectedSortBy === "highToLow") {
      priceHighToLow();
    } else if (selectedSortBy === "lowToHigh") {
      priceLowToHigh();
    } else {
      // Handle other cases or fallback
    }
  };
  const handleSortByExperience = () => {
    setSortByExperience(!sortByExperience);
    if (!sortByExperience) {
      experience();
    } else {
      const sortedDoctor = doctorList.sort((a, b) =>
        a?.experience?.year > b?.experience?.year ? 1 : -1
      );
      setDoctors(sortedDoctor);
    }
  };
  const handleSortByRating = () => {
    setSortByRating(!sortByRating);
    if (!sortByRating) {
      rating();
    } else {
      const sortedDoctor = doctorList.sort((a, b) =>
        a?.rating > b?.rating ? 1 : -1
      );
      setDoctors(sortedDoctor);
    }
  };

  // const handleSliderChange = (value) => {
  //     setRange(value);
  // };

  return (
    <div>
      <div className="grid grid-cols-12 mt-10 gap-6 max-w-7xl mx-auto px-6 py-16 lg:py-20">
        <div className="col-span-12 md:col-span-4  rounded-lg bg-white pb-96">
          {/* <div className="flex justify-between mb-4 text-gray-600">
                        <h4 className="text-xl font-bold">Filters</h4>
                        <h4 className="text-xl font-bold">Reset</h4>
                    </div> */}
          {/* <h2 className="text-2xl font-bold mb-4 text-black">Consultation Fee</h2> */}

          {/* <p>Price Range: ${range[0]} - ${range[1]}</p> */}
          {/* <Slider
                        range
                        min={0}
                        max={1000}
                        value={range}
                        onChange={handleSliderChange}
                    /> */}
          {/* <div className="mt-6">
                        <div className="flex gap-4 items-center mb-2">
                            <input type="checkbox" name="" id="" className="w-6 h-6" value='Online now' />
                            <label className="text-xl font-medium text-gray-700">Online Now</label>
                        </div>
                        <div className="flex gap-4 items-center mb-2">
                            <input type="checkbox" name="" id="" className="w-6 h-6" value='Available in next 2 hours' />
                            <label className="text-xl font-medium text-gray-700">Available in next 2 hours</label>
                        </div>
                        <div className="flex gap-4 items-center mb-2">
                            <input type="checkbox" name="" id="" className="w-6 h-6" value='Available today' />
                            <label className="text-xl font-medium text-gray-700">Available today</label>
                        </div>
                        <div className="flex gap-4 items-center mb-2">
                            <input type="checkbox" name="" id="" className="w-6 h-6" value='Female doctors only' />
                            <label className="text-xl font-medium text-gray-700">Female doctors only</label>
                        </div>
                    </div> */}
          <div className="fixed bg-slate-50 lg:bg-transparent">
            <h2 className="text-2xl font-bold  mb-4 text-black ">Sort By</h2>
            <div className="mt-6 lg:flex-col grid grid-cols-4 lg:grid-cols-1 text-sm">
              <div className="flex gap-4 items-center mb-2">
                <input
                  onChange={handleSortByRating}
                  type="checkbox"
                  name="popularity"
                  id=""
                  className="w-6 h-6"
                  value="Popularity"
                />
                <label className="lg:text-xl text-sm font-medium text-gray-700">
                  Popularity
                </label>
              </div>

              {/* <div className="flex gap-4 items-center mb-2">
                <input
                  onChange={handleSortByFeesLowToHigh}
                  type="checkbox"
                  name=""
                  id=""
                  className="w-6 h-6"
                  value="Fees: low too high"
                />
                <label className="lg:text-xl text-sm font-medium text-gray-700">
                  Fees: low too high
                </label>
              </div>
              <div className="flex gap-4 items-center mb-2">
                <input
                  onChange={handleSortByFeesHighToLow}
                  type="checkbox"
                  name=""
                  id=""
                  className="w-6 h-6"
                  value="Fees: high too low"
                />
                <label className="lg:text-xl text-sm font-medium text-gray-700">
                  Fees: high too low
                </label>
              </div> */}
              <div className="flex gap-4 items-center mb-2">
                <input
                  onChange={handleSortByExperience}
                  type="checkbox"
                  name=""
                  id=""
                  className="w-6 h-6"
                  value="Experience"
                />
                <label className="lg:text-xl text-sm font-medium text-gray-700">
                  Experience
                </label>
              </div>
              <div className="flex justify-between items-center text-lg w-full">
                <div>
                  <h1>Sort by:</h1>
                </div>
                <div>
                  <select
                    className="select w-full max-w-[180px] lg:text-xl text-sm font-medium text-gray-700 border-none flex justify-between"
                    onChange={handleSortByChange}
                    value={sortBy}
                  >
                    <option
                      className="lg:text-base text-sm font-medium text-gray-700  border-none"
                      disabled
                      value=""
                    >
                      Fees
                    </option>
                    <option
                      className="lg:text-base text-sm font-medium text-gray-700"
                      value="lowToHigh  border-none"
                    >
                      low to high
                    </option>
                    <option
                      className="lg:text-base text-sm font-medium text-gray-700  border-none"
                      value="highToLow"
                    >
                      high to low
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-8">
          <div>
            {doctors?.map((doctor) => (
              <Link to={`/doctors/${doctor._id}`} key={doctor._id}>
                <div className="p-6 border rounded-lg mb-6 shadow-xl hover:border-[#409bd4] hover:shadow-2xl">
                  <div className="flex items-center justify-between gap-2 flex-col md:flex-row">
                    <div>
                      <div className="flex items-center gap-6">
                        <div className="avatar">
                          <div className="w-24 rounded-xl">
                            <img src={doctor.img} />
                          </div>
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold">
                            {doctor.name}
                          </h4>
                          <p className="text-sm font-semibold text-gray-600">
                            {doctor.specialties}
                          </p>
                        </div>
                      </div>
                      <div className="mt-6">
                        <h4 className="text-lg font-medium text-gray-600">
                          Working on:{" "}
                          <span className="text-xl font-semibold text-black">
                            {doctor.location}
                          </span>
                        </h4>
                        <div className="flex md: flex-col lg:flex-row lg:items-center gap-4 mt-2">
                          <h4 className="text-lg font-medium text-gray-600">
                            Experience:{" "}
                            <span className="text-xl font-semibold text-black">
                              {doctor.experience?.year} + Years
                            </span>
                          </h4>
                          <div className="flex gap-1 items-center">
                            <h4 className="text-lg font-medium text-gray-600 flex items-center gap-2">
                              Rating:{" "}
                              <Rating
                                initialRating={doctor.rating}
                                emptySymbol={
                                  <AiOutlineStar className="text-orange-300 w-6 h-6" />
                                }
                                fullSymbol={
                                  <AiFillStar className="text-orange-300 w-6 h-6" />
                                }
                              ></Rating>
                            </h4>
                            <p className="text-lg font-medium text-gray-600">
                              ({doctor.rating})
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-base-200 px-10 py-16 text-center w-full rounded-lg md:w-fit">
                      <h4 className="text-2xl font-bold">
                        $ {doctor.fee}{" "}
                        <span className="text-sm font-normal text-gray-600">
                          per <br /> consultation
                        </span>
                      </h4>
                      <p className="text-sm font-normal text-gray-600 mt-4">
                        Follow Up: $ {doctor.followUpFee}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
