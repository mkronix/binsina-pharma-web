import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { useRef, useState } from "react";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import Button from "../components/Button/Button";
import { IoClose } from "react-icons/io5";

const Contact = ({ closeForm }) => {
  const formRef = useRef(null); // Create a ref for the form
  const [actionType, setActionType] = useState("");

  const {
    register,
    handleSubmit,
    reset,
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
      emailjs
        .sendForm(
          "service_agf5s52",
          "template_z5hflf2",
          formRef.current, // Pass the form element
          "O9jzNMsuDK9-j8NUD"
        )
        .then(() => {
          reset();
          Swal.fire({
            icon: "success",
            text: "Thank you for contacting us! Your message has been successfully submitted. We'll get back to you as soon as possible.",
          });
        })
        .catch((error) => {
          console.error("Email send error:", error);
          Swal.fire({
            icon: "error",
            text: "Something went wrong! Please try again later.",
          });
        });
    }

    closeForm();
  };

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 h-screen'>
      <div className='popup-form absolute text-black'>
        <form
          ref={formRef} // Attach the ref here
          className='w-80 md:w-96 space-y-5 bg-white p-5 rounded-xl'
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className='flex justify-between items-start'>
            <h1 className='text-4xl font-semibold text-backgroundColor'>
              Reach Us
            </h1>
            <button
              onClick={closeForm}
              className='bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full'
            >
              <IoClose
                onClick={closeForm}
                className='text-2xl cursor-pointer'
              />
            </button>
          </div>

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

          <div className='flex justify-end gap-1'>
            <Button
              type='submit'
              title='WhatsApp'
              onClick={() => setActionType("whatsapp")}
            />
            <Button
              type='submit'
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
