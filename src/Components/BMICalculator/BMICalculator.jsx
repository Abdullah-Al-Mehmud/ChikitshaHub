import { useState } from "react";

const BMICalculator = () => {
    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [bmiResult, setBmiResult] = useState(null);
    const [status, setStatus] = useState('');

    function calculateBMI(){
        let bmi = Number(weight / (height / 100) ** 2).toFixed(2);
        setBmiResult(bmi);
        let bmiStatus = getStatus(bmi)
        setStatus(bmiStatus)
    }

    function getStatus(bmi){
        if(bmi < 18.5){
            return "underweight";
        } else if(bmi >= 18.5 && bmi < 24.9){
            return "Normal";
        } else if(bmi >= 25 && bmi < 29.9){
            return "Overweight"
        }else return "Obese"
    }
    return (
        <div className="min-h-screen bg-base-200">
            <h1 className="text-3xl py-10 text-center font-bold">BMI Calculation</h1>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://i.ibb.co/G7cKSNB/10177-removebg-preview.png" className="max-w-sm h-80 rounded-lg shadow-2xl" />
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Weight</span>
                                </label>
                                <input type="weight in kg" id="weight" value={weight} onChange={e => setWeight(e.target.value)} placeholder="Weight" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Height</span>
                                </label>
                                <input type="text" id="height in cm" value={height} onChange={e => setHeight(e.target.value)} placeholder="Height" className="input input-bordered" required />
                            </div>
                            <p>{status} {bmiResult}</p>
                            <div className="form-control mt-6">
                                <button onClick={calculateBMI} className="btn bg-[#409bd4] text-white">BMI Calculate</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BMICalculator;