import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import axios from "axios";

const Emailjs = () => {
  const axiosPublic = useAxiosPublic();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const heading = data.heading;
    const photoURL = data.photoURL;
    const description = data.description;
    const TipsInfo = {
      heading,
      photoURL,
      description,
    };
    console.log(TipsInfo);

    axiosPublic.post("/tips", TipsInfo).then((res) => {
      console.log(res.data);
      if (res.data.success) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Tips added Successful",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
    axiosPublic.post("/sendEmail", TipsInfo).then((res) => {
      console.log(res.data);
    });
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-xl mx-auto mt-16 flex w-full flex-col border rounded-lg bg-white p-8">
        <h2 className="title-font mb-1 text-xl font-medium text-gray-900">{`User's Send Mail`}</h2>
        {/* <p className="mb-5 leading-relaxed text-gray-600">If you had any issues or you liked our product, please share
                    with us!
                </p> */}
        <div className="mb-4">
          <label className="text-sm leading-7 text-gray-600">Heading</label>
          <input
            {...register("heading", {
              required: "input field is required",
            })}
            type="text"
            id="heading"
            name="heading"
            className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
          />
          <p className="text-red-500 py-3 font-bold">
            {errors.heading?.message}
          </p>
        </div>
        <div className="mb-4">
          <label className="text-sm leading-7 text-gray-600">Photo URL</label>
          <input
            {...register("photoURL", {
              required: "input field is required",
            })}
            type="text"
            id="photoURL"
            name="photoURL"
            className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
          />
          <p className="text-red-500 py-3 font-bold">
            {errors.photoURL?.message}
          </p>
        </div>
        <div className="mb-4">
          <label className="text-sm leading-7 text-gray-600">Description</label>
          <textarea
            {...register("description", {
              required: "input field is required",
            })}
            id="description"
            name="description"
            className="h-32 w-full resize-none rounded border border-gray-300 bg-white py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"></textarea>
          <p className="text-red-500 py-3 font-bold">
            {errors.description?.message}
          </p>
        </div>
        <button
          type="submit"
          className="rounded border-0 bg-indigo-500 py-2 px-6 text-lg text-white hover:bg-indigo-600 focus:outline-none">
          Send
        </button>
        <p className="mt-3 text-xs text-gray-500">{`Send All tips update for user's`}</p>
      </form>
    </div>
  );
};

export default Emailjs;
