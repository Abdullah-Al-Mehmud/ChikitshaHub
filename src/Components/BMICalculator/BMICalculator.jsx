import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

import { useSelector } from "react-redux";

const BMICalculator = () => {
  const user = useSelector((state) => state.auth.user);
  const { email, displayName } = user || {};
  //   console.log(user);
  const axiosPublic = useAxiosPublic("");
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [bmiResult, setBmiResult] = useState(null);
  const [status, setStatus] = useState("");
  // handleSubmit
  const handleSubmit = () => {
    const BmiData = { bmiResult, status, height, weight, email, displayName };
    // const BmiData = { bmiResult, status, height, weight };
    axiosPublic.post("/bmi", BmiData).then((res) => {
      console.log(res.data);
      if (res.data.success) {
        console.log(res.data);
        Swal.fire({
          title: "Good job!",
          text: "Your BMI is Added!",
          icon: "success",
        });
        setStatus("");
        setBmiResult(null);
      }
    });
    // console.log(BmiData);
    setWeight("");
    setHeight("");
  };
  function calculateBMI() {
    let bmi = Number(weight / (height / 100) ** 2).toFixed(2);
    setBmiResult(bmi);
    let bmiStatus = getStatus(bmi);
    setStatus(bmiStatus);
  }

  function getStatus(bmi) {
    if (bmi < 18.5) {
      return "underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      return "Normal";
    } else if (bmi >= 25 && bmi < 29.9) {
      return "Overweight";
    } else return "Obese";
  }
  return (
    <div className="min-h-screen bg-base-200">
      <h1 className="text-3xl py-10 text-center font-bold">BMI Calculation</h1>
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/G7cKSNB/10177-removebg-preview.png"
            className="w-full h-80 rounded-lg"
          />
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
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
              {bmiResult ? (
                <div>
                  <h1 className="text-[#409bd4] font-bold">Result:</h1>
                  <p>Currently status: {status}</p>
                  <p>Your BMI is: {bmiResult}</p>
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
                  onClick={calculateBMI}
                  className="btn bg-[#409bd4] text-white"
                >
                  BMI Calculate
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BMICalculator;
