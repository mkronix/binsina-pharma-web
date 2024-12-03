import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import Button from "../components/Button/Button";
import { useState } from "react";

const Contact = ({ closeForm }) => {
  const [actionType, setActionType] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (actionType === "whatsapp") {
      const whatsappMessage = `Hi, I'm ${data.name}\nMessage: ${data.message}\n\nEmail: ${data.email}`;
      const whatsappLink = `https://wa.me/+919892146706?text=${encodeURIComponent(
        whatsappMessage
      )}`;
      window.location.href = whatsappLink;
    } else if (actionType === "email") {
      console.log("Sending email with data:", data);
    }

    closeForm();
  };

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 h-screen'>
      <div className='popup-form absolute text-black'>
        <form
          className=' w-80 md:w-96 space-y-5 bg-white p-5 rounded-xl'
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className='text-4xl font-semibold text-center text-backgroundColor'>
            Reach Us
          </h1>

          <div className='flex flex-col'>
            <input
              className='py-3 px-2 bg-[#d5f2ec] rounded-lg'
              type='text'
              placeholder='Your Name'
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <span className='text-red-500 text-sm'>
                {errors.name.message}
              </span>
            )}
          </div>

          <div className='flex flex-col'>
            <input
              className='py-3 px-2 bg-[#d5f2ec] rounded-lg'
              type='email'
              placeholder='Your Email'
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Enter a valid email address",
                },
              })}
            />
            {errors.email && (
              <span className='text-red-500 text-sm'>
                {errors.email.message}
              </span>
            )}
          </div>

          <div className='flex flex-col'>
            <textarea
              className='py-3 px-2 bg-[#d5f2ec] rounded-lg resize-none'
              rows='4'
              placeholder='Your Message'
              {...register("message", {
                required: "Message is required",
                minLength: {
                  value: 10,
                  message: "Message must be at least 10 characters long",
                },
              })}
            />
            {errors.message && (
              <span className='text-red-500 text-sm'>
                {errors.message.message}
              </span>
            )}
          </div>

          <div className='flex justify-end gap-5'>
            <Button title='Close' onClick={closeForm} />
            <Button
              type={"submit"}
              title='WhatApp'
              onClick={() => setActionType("whatsapp")}
            />
            <Button
              type={"submit"}
              title='Submit'
              onClick={() => setActionType("email")}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

Contact.propTypes = {
  closeForm: PropTypes.func.isRequired,
};

export default Contact;
