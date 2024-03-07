/* eslint-disable no-unused-vars */
import React, { useState } from "react";
// import { FaArrowRightLong } from "react-icons/fa";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

const BodyFat = () => {
  const user = useSelector((state) => state.auth.user);
  const { email } = user || {};
  const axiosPublic = useAxiosPublic("");
  const [gender, setGender] = useState("male");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = () => {
    const BodyfitData = { result, status, height, weight, email };
    axiosPublic.post("/bodyfit", BodyfitData).then((res) => {
      if (res.data.success) {
        Swal.fire({
          title: "Good job!",
          text: "Your Body Fit is Added!",
          icon: "success",
        });
        setStatus("");
        setResult("");
        setWeight("");
        setHeight("");
      }
    });
  };

  const calculateBodyFat = () => {
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);

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
      return;
    }

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

    setResult(bodyFatPercentage);
    setStatus(bodyFatStatus);
  };

  return (
    <div className="">
      <h1 className="text-4xl py-10 text-center font-bold">Body Fat Calculator</h1>
      <div className="px-10 w-full mx-auto">
        <div className="w-full max-w-md shadow-2xl mx-auto bg-base-100">
          <div className="card-body">
          <label className="label">
                <span className="label-text">
                  Select Gender{" "}
                </span>
              </label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="select select-bordered w-full"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <div className="form-control">
              <label className="label">
                <span className="label-text">
                  Weight <span className="text-xs font-semibold text-gray-600">(kg)</span>
                </span>
              </label>
              <input
                type="number"
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
                  Height <span className="text-xs font-semibold text-gray-600">(cm)</span>
                </span>
              </label>
              <input
                type="number"
                id="height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="Height"
                className="input input-bordered"
                required
              />
            </div>
            {result && (
              <div>
                <h1 className="text-[#409bd4] font-bold">Result:</h1>
                <p>Currently status: {status}</p>
                <p>Your Body Fit is: {result}%</p>
                <button
                  onClick={handleSubmit}
                  className="flex items-center relative w-28 border-2 border-[#409bd4] text-[#409bd4] px-4 py-2 rounded-full group mt-4"
                >
                  <span>Save</span>
                  <span className="ml-2">
                    {/* <FaArrowRightLong className="h-10" /> */}
                  </span>
                </button>
              </div>
            )}
            <div className="form-control mt-6">
              <button onClick={calculateBodyFat} className="btn bg-[#409bd4] text-white">
                Body Fat Calculate
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyFat;
