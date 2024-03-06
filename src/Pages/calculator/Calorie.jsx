/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';

const Calorie = () => {
  const user = useSelector((state) => state.auth.user);
  const { email } = user || {};
  //   console.log(user);
  const axiosPublic = useAxiosPublic();
  const [weight, setWeight] = useState(null);
  const [height, setHeight] = useState(null);
  const [age, setAge] = useState(null);
  const [gender, setGender] = useState('male');
  const [activityLevel, setActivityLevel] = useState('Activity Level');
  const [calories, setCalories] = useState(null);
  const [healthStatus, setHealthStatus] = useState("");


  // handleSubmit
  const handleSubmit = () => {
    const CaloriesData = { calories, healthStatus, age, height, weight, email };
    console.log(CaloriesData);
    // const BmiData = { bmiResult, status, height, weight };
    axiosPublic.post("/calories", CaloriesData).then((res) => {
      console.log(res);
      if (res.data.success) {
        console.log(res.data);
        Swal.fire({
          title: "Good job!",
          text: "Your Calories is Added!",
          icon: "success",
        });
        setHealthStatus("");
        setWeight("");
        setHeight("");
        setAge("")
      }
    });
    // console.log(BmiData);
    
  };




  const calculateCalories = () => {
    // Implement your calorie calculation logic here
    // This is a basic example, you may want to use a more sophisticated formula
    let baseCalories;

    if (gender === 'male') {
      baseCalories = 10 * weight + 6.25 * height - 5 * age + 5;
    } else if (gender === 'female') {
      baseCalories = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    const totalCalories = baseCalories * getActivityMultiplier(activityLevel);
    setCalories(totalCalories.toFixed(2));
    determineHealthStatus(totalCalories);
  };

  const getActivityMultiplier = (level) => {
    switch (level) {
      case 'sedentary':
        return 1.2;
      case 'lightlyActive':
        return 1.375;
      case 'moderatelyActive':
        return 1.55;
      case 'veryActive':
        return 1.725;
      case 'extraActive':
        return 1.9;
      default:
        return 1.2;
    }
  };
  const determineHealthStatus = (calories) => {
    let status;
    if (calories < 1200) {
      status = 'Very Low Calorie Intake (Potentially Harmful)';
    } else if (calories < 1500) {
      status = 'Low Calorie Intake';
    } else if (calories < 2000) {
      status = 'Moderate Calorie Intake';
    } else {
      status = 'High Calorie Intake';
    }

    setHealthStatus(status);
  };
  return (
    <div className=''>
      <>
        <h1 className="text-4xl py-10 text-center font-bold">Calorie Calculator</h1>

        <div className="px-10 w-full mx-auto">
          <div className=" w-full max-w-md shadow-2xl mx-auto bg-base-100">
            <div className="card-body">
              <label className="label">
                <span className="label-text">
                  Select Gender{" "}
                </span>
              </label>
              <select value={gender} onChange={(e) => setGender(e.target.value)}
                className="select select-bordered w-full ">
                <option value={"male"}>Male</option>
                <option value={"female"}>Female</option>
              </select>
              <label className="label">
                <span className="label-text">
                  Select Activity Level{" "}
                </span>
              </label>
              <select value={gender} onChange={(e) => setActivityLevel(e.target.value)} className="select select-bordered w-full ">
                <option value="sedentary">Sedentary</option>
                <option value="lightlyActive">Lightly Active</option>
                <option value="moderatelyActive">Moderately Active</option>
                <option value="veryActive">Very Active</option>
                <option value="extraActive">Extra Active</option>
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
                    Age{" "}

                  </span>
                </label>
                <input
                  type="number"
                  id="age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  placeholder="Age"
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
                  type="number"
                  id="height in cm"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  placeholder="Height"
                  className="input input-bordered"
                  required
                />
              </div>
              {calories ? (
                <div>
                  <h1 className="text-[#409bd4] font-bold">Result:</h1>

                  <p>Estimated Daily Calories: {calories} kcal</p>
                  <p>Your Health Status: {healthStatus}</p>
                  <button
                    onClick={handleSubmit}
                    className="flex items-center relative w-28  border-2 border-[#409bd4] text-[#409bd4] px-4 py-2 rounded-full group mt-4">
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
                  onClick={calculateCalories}
                  className="btn bg-[#409bd4] text-white">
                  Calorie Calculator
                </button>
              </div>
            </div>
          </div>

        </div>
      </>
    </div>
  )
}
export default Calorie;