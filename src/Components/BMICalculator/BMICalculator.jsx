
const BMICalculator = () => {
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
                                <input type="number" placeholder="Weight" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Height</span>
                                </label>
                                <input type="number" placeholder="Height" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#409bd4] text-white">BMI Calculate</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BMICalculator;