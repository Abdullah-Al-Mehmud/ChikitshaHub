/* eslint-disable no-unused-vars */
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSelector, useDispatch } from "react-redux";
const Prescription = ({doctorName, doctorEmail, patientEmail, meetingId}) => {
  const axiosPublic = useAxiosPublic();
  const user = useSelector((state) => state.auth.user);
  const { photoURL, email, displayName } = user || {};
  const [medicineNames, setMedicineNames] = useState([]);
  const [frequencies, setFrequencies] = useState([]);
  const [days, setDays] = useState([]);

  //doctor data get
  const { data: doctors = [] } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/doctors`);
      return res.data;
    },
  });

  const doctor = doctors.find(data=> data.doctorEmail === doctorEmail )

  const addMedicine = () => {
    setMedicineNames([...medicineNames, ""]);
    setFrequencies([...frequencies, ""]);
    setDays([...days, ""]);
  };

  const removeField = (index) => {
    const newMedicineNames = [...medicineNames];
    const newFrequencies = [...frequencies];
    const newDays = [...days];

    newMedicineNames.splice(index, 1);
    newFrequencies.splice(index, 1);
    newDays.splice(index, 1);

    setMedicineNames(newMedicineNames);
    setFrequencies(newFrequencies);
    setDays(newDays);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const patientName = document.getElementById("patientName").value;
      const address = document.getElementById("address").value;
      const age = document.getElementById("age").value;
      const date = document.getElementById("date").value;

      const medicines = medicineNames.map((medicineName, index) => ({
        medicineName,
        frequency: frequencies[index],
        days: days[index],
      }));

      const dataToSend = {
        doctorName,
        doctorEmail,
        patientEmail,
        patientName: patientName,
        //address: address,
        age: age,
        date: date,
        medicines: medicines,
        meetingId
      };

      //   console.log(dataToSend);
      // Send data to the backend
      const response = await axiosPublic.post("/medicines", dataToSend);
      //   console.log(response);
      Swal.fire({
        title: "Good job!",
        text: "Data added successfully",
        icon: "success",
      });
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
      <div className="bg-white shadow-lg">
        <div className="bg-[#409bd4] flex justify-between text-white p-3">
          <div>
            <h2 className="text-xl font-bold">{doctorName}</h2>
            <p>{doctor?.degrees}</p>
            <p>{doctor?.education?.academy} </p>
          </div>
          <img
            className="w-20"
            src="https://i.ibb.co/V2NKtfr/chikitsha-Hub-logo.png"
            alt=""
          />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="p-3">
            <div className="flex items-center mb-5">
              <label className=" inline-block text-right  text-lg mr-4 text-gray-500">
                Patient Name
              </label>
              <input
                name="patientName"
                id="patientName"
                type="text"
                placeholder="Your name"
                className="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400"
              />
            </div>
            <div className="flex items-center mb-10">
              <label className=" inline-block text-right mr-4  text-lg  text-gray-500">
                Address
              </label>
              <input
                type="text"
                name="address"
                id="address"
                placeholder="Address"
                className="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400"
              />
            </div>
            <div className="flex">
              <div className="flex items-center mb-10">
                <label className="inline-block text-right mr-4 text-lg  text-gray-500">
                  Age
                </label>
                <input
                  type="text"
                  name="age"
                  id="age"
                  placeholder="Patient Age"
                  className="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400"
                />
              </div>
              <div className="flex items-center mb-10">
                <label className="inline-block text-right mr-4 text-lg  text-gray-500">
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  placeholder="Appointment Date"
                  className="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400"
                />
              </div>
            </div>
          </div>
          <h2 className="mt-10 font-bold text-[#409bd4] text-xl pl-3  mb-10">
            RX
          </h2>
          {medicineNames.map((medicineName, index) => (
            <div key={index} className="mb-5">
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
                placeholder="1+1+0"
              />
              <input
                type="text"
                value={days[index]}
                onChange={(e) => handleDayChange(index, e.target.value)}
                placeholder="Day"
              />
              <button
                type="button"
                className="text-red-600 ml-2"
                onClick={() => removeField(index)}
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            className="text-[#409bd4]"
            onClick={addMedicine}
          >
            Click Add to medicine
          </button>
          <button
            type="submit"
            className="ml-3 text-[#409bd4] px-6 py-2 border-2 rounded-full border-[#409bd4] hover:text-white hover:bg-[#409bd4]"
          >
            Submit
          </button>
        </form>

        <div className="bg-[#409bd4] text-white mt-2">
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
