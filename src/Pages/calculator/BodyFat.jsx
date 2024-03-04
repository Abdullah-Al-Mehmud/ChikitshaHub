/* eslint-disable no-unused-vars */
// BodyFatCalculator.js
import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

const BodyFat = () => {
  const user = useSelector((state) => state.auth.user);
  const { email } = user || {};
  //   console.log(user);
  const axiosPublic = useAxiosPublic("");
  const [gender, setGender] = useState("");
  const [weight, setWeight] = useState(null);
  const [height, setHeight] = useState(null);
  const [result, setResult] = useState("");
  const [status, setStatus] = useState("");
  // handleSubmit
  const handleSubmit = () => {
    const BodyfitData = { result, status, height, weight, email };
    console.log(BodyfitData);
    // const BmiData = { bmiResult, status, height, weight };
    axiosPublic.post("/bodyfit", BodyfitData).then((res) => {
      console.log(res.data);
      if (res.data.success) {
        console.log(res.data);
        Swal.fire({
          title: "Good job!",
          text: "Your Body Fit is Added!",
          icon: "success",
        });
        setStatus("");
        setResult(null);
      }
    });
    // console.log(BmiData);
    setWeight("");
    setHeight("");
  };
  const calculateBodyFat = () => {
    // Convert height to meters
    const heightInMeters = height / 100;

    // Calculate BMI (Body Mass Index)
    const bmi = weight / (heightInMeters * heightInMeters);

    // Calculate body fat percentage based on gender
    let bodyFatPercentage;
    if (gender === "male") {
      bodyFatPercentage = (
        0.29288 * bmi -
        0.0005 * bmi * bmi +
        0.00005 * bmi * bmi * bmi -
        0.0000015 * bmi * bmi * bmi * bmi +
        0.18
      ).toFixed(2);
    } else if (gender === "female") {
      bodyFatPercentage = (
        0.29669 * bmi -
        0.00043 * bmi * bmi +
        0.0000027 * bmi * bmi * bmi -
        0.0000039 * bmi * bmi * bmi * bmi +
        0.28
      ).toFixed(2);
    } else {
      // Handle other gender options here or set a default value
      return;
    }

    // Determine body fat status based on common classifications
    let bodyFatStatus;
    if (gender === "male") {
      if (bodyFatPercentage < 6) {
        bodyFatStatus = "Essential Fat";
      } else if (bodyFatPercentage < 24) {
        bodyFatStatus = "Fitness";
      } else {
        bodyFatStatus = "Obese";
      }
    } else if (gender === "female") {
      if (bodyFatPercentage < 16) {
        bodyFatStatus = "Essential Fat";
      } else if (bodyFatPercentage < 30) {
        bodyFatStatus = "Fitness";
      } else {
        bodyFatStatus = "Obese";
      }
    }

    setResult(` ${bodyFatPercentage}%`);
    setStatus(` ${bodyFatStatus}`);
  };

  return (
    <div className="my-20">
      <>
        <h1 className="text-4xl py-10 text-center font-bold">
          Body Fit Calculator
        </h1>

        <div className="md:flex px-10 max-w-5xl mx-auto items-center gap-10 ">
          <div className=" w-full max-w-md shadow-2xl bg-base-100">
            <div className="card-body">
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="select select-bordered w-full "
              >
                <option value={"male"}>Male</option>
                <option value={"female"}>Female</option>
              </select>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    Weight{" "}
                    <span className="text-xs font-semibold text-gray-600">
                      (kg)
                    </span>{" "}
                  </span>
                </label>
                <input
                  type="weight in kg"
                  id="weight"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="Weight"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    Height{" "}
                    <span className="text-xs font-semibold text-gray-600">
                      (cm)
                    </span>{" "}
                  </span>
                </label>
                <input
                  type="text"
                  id="height in cm"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  placeholder="Height"
                  className="input input-bordered"
                  required
                />
              </div>
              {result ? (
                <div>
                  <h1 className="text-[#409bd4] font-bold">Result:</h1>
                  <p>Currently status: {status}</p>
                  <p>Your Body Fit is: {result}</p>
                  <button
                    onClick={handleSubmit}
                    className="flex items-center relative w-28  border-2 border-[#409bd4] text-[#409bd4] px-4 py-2 rounded-full group mt-4"
                  >
                    <span>Save</span>
                    <span className="absolute w-1/6 right-3 group-hover:w-5/6 box-content duration-300 flex justify-center bg-white rounded-full">
                      <FaArrowRightLong className="h-10" />
                    </span>
                  </button>
                </div>
              ) : (
                ""
              )}
              <div className="form-control mt-6">
                <button
                  onClick={calculateBodyFat}
                  className="btn bg-[#409bd4] text-white"
                >
                  BMI Calculate
                </button>
              </div>
            </div>
          </div>
          <div className="w-full md:mt-0 mt-10">
            <img
              src="https://i.ibb.co/fSVPjbw/Wavy-Bus-09-Single-06.jpg"
              alt=""
            />
          </div>
        </div>
      </>
    </div>
  );
};

export default BodyFat;
