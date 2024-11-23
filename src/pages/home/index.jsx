import Button from "../../layouts/Button";

const index = () => {
  return (
    <div className="h-[450px] rounded-b-lg flex flex-col justify-center lg:px-32 px-5 text-white bg-[url('assets/img/slider1.png')] bg-no-repeat md:bg-cover opacity-90">
      <div className=' w-full lg:w-4/5 space-y-5 mt-10'>
        <h1 className='md:text-5xl text-2xl font-bold leading-tight text-gray-700'>
          Empowering Health Choices for a Vibrant Life Your Trusted..
        </h1>
        <p className='text-gray-700'>
          Capture Every Market Segment with Our Dosage Form Expertise
        </p>
        <Button title='Contact Us' />
      </div>
    </div>
  );
};

export default index;
