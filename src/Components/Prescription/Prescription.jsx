//import { useRef, useState } from 'react';
//import Autosuggest from 'react-autosuggest';
// import { useForm, useFieldArray } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useState } from "react";

const Prescription = () => {
  const axiosPublic = useAxiosPublic();

  //   const { register, control, handleSubmit } = useForm({
  //     defaultValues: { inputs: [{ value: "" }] }, // Initial form data
  //   });

  //   const onSubmit = (data) => {
  //     // console.log(data); // Form data
  //     const medicineName = data.medicineName;
  //     const dayToday = data.dayToday;
  //     const days = data.days;

  //     const medicineInfo = {
  //       medicineName,
  //       dayToday,
  //       days,
  //     };
  //     console.log(medicineInfo);

  //     axiosPublic.post("/medicines", medicineInfo).then((res) => {
  //       console.log(res.data);
  //       if (res.data.success) {
  //         console.log(res.data);
  //         Swal.fire({
  //           title: "Good job!",
  //           text: "Send medicine!",
  //           icon: "success",
  //         });
  //       }
  //     });
  //   };

  const [medicineNames, setMedicineNames] = useState([]);
  const [frequencies, setFrequencies] = useState([]);
  const [days, setDays] = useState([]);

  const addField = () => {
    setMedicineNames([...medicineNames, ""]);
    setFrequencies([...frequencies, ""]);
    setDays([...days, ""]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const dataToSend = {
        medicines: medicineNames,
        frequencies: frequencies,
        days: days,
      };

      // Send data to the backend
      const response = await axiosPublic.post("/prescription", dataToSend);
      console.log(response.data);
      console.log(dataToSend);
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  const handleMedicineNameChange = (index, value) => {
    const newMedicineNames = [...medicineNames];
    newMedicineNames[index] = value;
    setMedicineNames(newMedicineNames);
  };

  const handleFrequencyChange = (index, value) => {
    const newFrequencies = [...frequencies];
    newFrequencies[index] = value;
    setFrequencies(newFrequencies);
  };

  const handleDayChange = (index, value) => {
    const newDays = [...days];
    newDays[index] = value;
    setDays(newDays);
  };

  return (
    <div>
      <div className="bg-white shadow-lg mx-36 mt-36">
        <div className="bg-[#409bd4] flex justify-between text-white p-3">
          <div>
            <h2 className="text-xl font-bold">DR. Doctor Name</h2>
            <p>MBBS & FCPS surgery Department</p>
            <p>Dhaka medical </p>
          </div>
          <img
            className="w-20"
            src="https://i.ibb.co/V2NKtfr/chikitsha-Hub-logo.png"
            alt=""
          />
        </div>
        <form onSubmit={handleSubmit}>
          {medicineNames.map((medicineName, index) => (
            <div key={index}>
              <input
                type="text"
                value={medicineName}
                onChange={(e) =>
                  handleMedicineNameChange(index, e.target.value)
                }
                placeholder="Medicine Name"
              />
              <input
                type="text"
                value={frequencies[index]}
                onChange={(e) => handleFrequencyChange(index, e.target.value)}
                placeholder="Frequency"
              />
              <input
                type="text"
                value={days[index]}
                onChange={(e) => handleDayChange(index, e.target.value)}
                placeholder="Day"
              />
            </div>
          ))}
          <button type="button" onClick={addField}>
            Add Field
          </button>
          <button type="submit" className="px-6 bg-red-500">
            Submit
          </button>
        </form>

        <div className="bg-[#409bd4] text-white">
          <div className="flex justify-between p-3">
            <h2 className="font-bold">ChikitshaHub</h2>
            <div>
              <div className="flex gap-5">
                <p>+5678908765432</p>
                <p>chikishahub@gmail.com</p>
              </div>
              <div className="flex gap-5">
                <p>Mirpur-10 road-306</p>
                <p>Webpage.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prescription;
