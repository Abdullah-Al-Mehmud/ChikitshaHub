import { useRef, useState } from 'react';
//import Autosuggest from 'react-autosuggest';
import { useForm, useFieldArray } from 'react-hook-form';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import Swal from 'sweetalert2';

//medicine array
const medicines = ['Tetracyclines', 'Levoxin 500mg', 'Festal 12mg', 'Opal 20mg', 'Aminoglycosides', 'Augmentin', 'Amoxicillin', 'Cephalexin', 'Penicillins'];
//const dayToDay = ['1+0+1', '0+1+0', '1+1+0', '1+1+1', '0+0+1', '1+0+0', '0+1+1'];
//const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 22, 25, 30]
const Prescription = () => {
    const axiosPublic = useAxiosPublic();
    const [isFocus, setIsFocus] = useState(false);
    const [isHover, setIsHover] = useState(false);
    const inputRef = useRef();
    const [selectMedicine, setSelectMedicine] = useState("");
    const { register, control, handleSubmit } = useForm({
        defaultValues: { inputs: [{ value: '' }] } // Initial form data
    });
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'inputs' // Name of the array field
    });

    const onSubmit = data => {
        console.log(data); // Form data
        const medicineName = data.medicineName;
        const dayToday = data.dayToday;
        const days = data.days;
        const medicineInfo = {
          medicineName,
          dayToday,
          days
        };
        console.log(medicineInfo);

        const handleSubmit = async () => {
            axiosPublic.post("/medicines", medicineInfo).then((res) => {
                console.log(res.data);
                if (res.data.success) {
                  console.log(res.data);
                  Swal.fire({
                    title: "Good job!",
                    text: "Send medicine!",
                    icon: "success",
                  });
                }
              });
        }   
        handleSubmit();   
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
                    <img className="w-20" src="https://i.ibb.co/V2NKtfr/chikitsha-Hub-logo.png" alt="" />
                </div>
                <div className="p-3">
                    <form action="">
                        <div className="flex items-center mb-5">
                            <label className=" inline-block text-right text-gray-500 mr-4 text-gray-500">Patient Name</label>
                            <input name="patientName" id="patientName" type="text" placeholder="Your name" className="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400" />
                        </div>
                        <div className="flex items-center mb-10">
                            <label className=" inline-block text-right mr-4 text-gray-500 text-gray-500">Address</label>
                            <input type="text" name="address" id="address" placeholder="Address" className="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400" />
                        </div>
                        <div className="flex">
                            <div className="flex items-center mb-10">
                                <label className="inline-block text-right mr-4 text-gray-500 text-gray-500">Age</label>
                                <input type="text" name="age" id="age" placeholder="Patient Age" className="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400" />
                            </div>
                            <div className="flex items-center mb-10">
                                <label className="inline-block text-right mr-4 text-gray-500 text-gray-500">Date</label>
                                <input type="text" name="date" id="date" placeholder="Appointment Date" className="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400" />
                            </div>
                        </div>
                        <div className="text-right">
                            <button className="py-3 px-8 bg-[#409bd4] text-green-100 font-bold rounded">Submit</button>
                        </div>
                    </form>
                </div>
                <h2 className="mt-10 font-bold text-[#409bd4] text-xl pl-3 ">RX</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {fields.map((field, index) => (
                        <div key={field.id} className='relative'>
                            <input placeholder='Medicine Name' name='medicineName' className='ml-3'
                                {...register(`inputs.${index}.value`)} // Register input field with react-hook-form
                                defaultValue={field.value} // Set default value
                                onFocus={() => setIsFocus(true)}
                                onBlur={()=>{
                                    if(!isHover){
                                        setIsFocus(false);
                                    }
                                }}
                                value={selectMedicine}
                                onChange={(e)=>{
                                    setSelectMedicine(e.target.value);
                                }}
                                ref={inputRef}
                            />
                            {
                                isFocus && (
                                    <div className='shadow-lg absolute' onMouseEnter={()=>{setIsHover(true)}} onMouseLeave={()=>{setIsHover(false)}}>
                                        {
                                            medicines.map((medicine, index) => {
                                                const isMatch = medicine.toLowerCase().indexOf(selectMedicine.toLowerCase()) > -1;
                                                return (
                                                    <div key={index}>
                                                    {
                                                        isMatch && (<div  className='p-5 hover:bg-gray-100 cursor-pointer' onClick={()=>{setSelectMedicine(medicine);
                                                            inputRef.current.focus();
                                                        }}>
                                                        {medicine}
                                                    </div>
                                                    )}
                                                    </div>
                                                );
                                            })
                                        }
                                    </div>
                                )}
                            <input placeholder='1+0+1' name='dayToday'
                                {...register(`inputs.${index}.value`)} // Register input field with react-hook-form
                                defaultValue={field.value} // Set default value
                            />
                            <input placeholder='Days' name='days' className='ml-3'
                                {...register(`inputs.${index}.value`)} // Register input field with react-hook-form
                                defaultValue={field.value} // Set default value
                            />
                            <button type="button" className='text-red-600 ml-2' onClick={() => remove(index)}>Remove</button>
                        </div>
                    ))}
                    <button type="button" className='text-[#409bd4] mr-3' onClick={() => append({ value: '' })}>Click add to medicine</button>
                    <button type="submit" className='text-white p-2 bg-[#409bd4] my-5'>Submit</button>
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