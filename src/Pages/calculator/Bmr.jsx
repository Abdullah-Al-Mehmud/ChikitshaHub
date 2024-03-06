import { useState } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import { useSelector } from 'react-redux';
const Bmr = () => {
  const user = useSelector((state) => state.auth.user);
  const { email} = user || {};
  //   console.log(user);
  const axiosPublic = useAxiosPublic();
  const [weight, setWeight] = useState(null);
  const [height, setHeight] = useState(null);
  const [age, setAge] = useState(null);
  const [gender, setGender] = useState('male');
  const [bmr, setBmr] = useState(null);


  const handleSubmit = () => {
    const BmrData = { bmr, age, height, weight, email};
    console.log(BmrData);
    // const BmiData = { bmiResult, status, height, weight };
    axiosPublic.post("/bmr", BmrData).then((res) => {
      console.log(res);
      if (res.data.success) {
        console.log(res.data);
        Swal.fire({
          title: "Good job!",
          text: "Your Calories is Added!",
          icon: "success",
        });
        setBmr("");
        setWeight("");
        setHeight("");
        setAge("")
      }
    });
    // console.log(BmiData);
    
  };





  
  const calculateBmr = () => {
    // Implement your BMR calculation logic here
    // This is a basic example, you may want to use a more sophisticated formula
    let baseBmr;
    if (gender === 'male') {
      baseBmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else if (gender === 'female') {
      baseBmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }
    setBmr(baseBmr.toFixed(2));
  };
    return(
        <div className=''>
        <>
      <h1 className="text-4xl py-10 text-center font-bold">BMR Calculator</h1>
    
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
            {bmr ? (
              <div>
                <h1 className="text-[#409bd4] font-bold">Result:</h1>
                
                <p>BMR: {bmr} Calories/day</p>
                
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
                onClick={calculateBmr}
                className="btn bg-[#409bd4] text-white">
                BMR Calculate
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
    </div>
    )}
export default Bmr;