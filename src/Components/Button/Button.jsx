const Button = () => {
  return (
    <div>
      <button className="py-2 w-40 h-16 px-6 mb-4 mt-6 text-sky-700 shadow-lg before:block before:-left-1 before:-top-1 before:bg-sky-700 before:absolute before:h-0 before:w-0 before:hover:w-[100%] before:hover:h-[100%]  before:duration-500 before:-z-40 after:block after:-right-1 after:-bottom-1 after:bg-sky-700 after:absolute after:h-0 after:w-0 after:hover:w-[100%] after:hover:h-[100%] after:duration-500 after:-z-40 bg-white relative inline-block">
        Button
      </button>
    </div>
  );
};

export default Button;
