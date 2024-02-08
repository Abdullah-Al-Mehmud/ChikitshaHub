import { useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
const Prescription = () => {
    const [suggestions, setSuggestions] = useState([]);
    const { register, control, handleSubmit } = useForm({
        defaultValues: { inputs: [{ value: '' }] } // Initial form data
    });
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'inputs' // Name of the array field
    });

    const onSubmit = data => {
        console.log(data); // Form data
    };

    

    return (
        <div>
            <div className="bg-white shadow-lg mx-36 mt-36">
                <div className="bg-[#409bd4] flex justify-between text-white p-3">
                    <div>
                        <h2 className="text-xl font-bold">DR. Doctor Name</h2>
                        <p></p>
                    </div>
                    <img className="w-20" src="https://i.ibb.co/V2NKtfr/chikitsha-Hub-logo.png" alt="" />
                </div>
                <div className="p-3">
                    {/* <form action="">
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
                    </form> */}
                </div>
                <h2 className="mt-10 font-bold text-[#409bd4] text-xl pl-3 ">RX</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {fields.map((field, index) => (
                        <div key={field.id}>
                            <input placeholder='Medicine Name' name='medicineName' className='ml-3'
                                {...register(`inputs.${index}.value`)} // Register input field with react-hook-form
                                defaultValue={field.value} // Set default value
                            />
                            <input placeholder='1+0+1' name=''
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