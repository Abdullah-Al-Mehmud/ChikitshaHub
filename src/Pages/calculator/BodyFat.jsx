import { useState } from "react";


const BodyFat = () => {
    const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState(null);
  const [status, setStatus] = useState(null);
  const calculateBodyFat = () => {
    // Implement your body fat calculation logic here
    const weightValue = parseFloat(weight);
    const heightValue = parseFloat(height);
     // Check if weight and height are valid numbers
     if (isNaN(weightValue) || isNaN(heightValue)) {
        setResult('Please enter valid weight and height.');
        return;
      }
      // Calculate BMI (Body Mass Index)
    const bmi = (weightValue / ((heightValue / 100) * (heightValue / 100))).toFixed(2);

    // Use a simple formula to estimate body fat percentage based on BMI
    const bodyFatPercentage = (1.2 * bmi + 0.23 * 25 - 10.8).toFixed(2);
// Determine body fat status based on common classifications
let bodyFatStatus;
if (bodyFatPercentage < 6) {
  bodyFatStatus = 'Essential Fat';
} else if (bodyFatPercentage < 14) {
  bodyFatStatus = 'Athletes';
} else if (bodyFatPercentage < 24) {
  bodyFatStatus = 'Fitness';
} else if (bodyFatPercentage < 31) {
  bodyFatStatus = 'Average';
} else {
  bodyFatStatus = 'Obese';
}

    setResult(`Body Fat Percentage: ${bodyFatPercentage}%`);
    setStatus(`Body Fat Status: ${bodyFatStatus}`);
  };
    
    return(
        <div className="mt-20">
              
      <h1 className="text-4xl py-10 text-center font-bold">Body Fat Calculator</h1>
      <div className="md:flex px-10 max-w-5xl mx-auto items-center gap-10 ">
        <div className=" w-full max-w-md shadow-2xl bg-base-100">
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
                value={weight} onChange={(e) => setWeight(e.target.value)}
                id="weight"
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
              value={height} onChange={(e) => setHeight(e.target.value)}
                type="text"
                id="height in cm"
                placeholder="Height"
                className="input input-bordered"
                required
              />
            </div>
              <div>
                <h1 className="text-[#409bd4] font-bold">Result:</h1>
                <p> {result && <div>{result}</div>} </p>
                <p> {status && <div>{status}</div>} </p>
              </div>
            <div className="form-control mt-6">
              <button
                onClick={calculateBodyFat}
                className="btn bg-[#409bd4] text-white">
                Body Fat Calculate
              </button>
            </div>
          </div>
        </div>
        <div className="w-full md:mt-0 mt-10">
          <img
            src="https://i.ibb.co/RYJfcyf/2202-i402-007-F-m004-c9-FP-keto-diet-flat-background-removebg-preview.png"
            alt=""
          />
        </div>
      </div>
    
        </div>
    )}
export default BodyFat;