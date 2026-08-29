

// This example uses `@web3forms/react` plugin and tailwindcss for css styling

import { useState } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";

const fieldBase =
  "w-full px-4 py-3 border-2 bg-[#14171D] text-white placeholder:text-white/40 rounded-md outline-none focus:ring-4";
const fieldOk = "border-white/15 focus:border-[#33C2F0] ring-transparent";
const fieldError = "border-red-500 focus:border-red-500 ring-red-500/10";

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState(false);

  // Please update the Access Key in the .env
  const apiKey = process.env.PUBLIC_ACCESS_KEY || "bde5eb38-ec80-4e66-b6ab-6254590850d0";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: apiKey,
    settings: {
      from_name: "Baires Pool Plastering",
      subject: "New Contact Message from your Website",
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setMessage(msg);
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setMessage(msg);
    },
  });

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="my-10">
        <input
          type="checkbox"
          id=""
          className="hidden"
          style={{ display: "none" }}
          {...register("botcheck")}></input>

        <div className="mb-5">
          <input
            type="text"
            placeholder="Full Name"
            autoComplete="false"
            className={`${fieldBase} ${errors.name ? fieldError : fieldOk}`}
            {...register("name", {
              required: "Full name is required",
              maxLength: 80,
            })}
          />
          {errors.name && (
            <div className="mt-1 text-red-400">
              <small>{errors.name.message}</small>
            </div>
          )}
        </div>
        <div className="mb-5">
          <label htmlFor="phone_number" className="sr-only">
            Phone Number
          </label>
          <input
            id="phone"
            type="Phone"
            placeholder="Phone Number"
            name="phone"
            autoComplete="false"
            className={`${fieldBase} ${errors.phone ? fieldError : fieldOk}`}
            {...register("phone", {
              required: "Enter your Phone",
              pattern: {

                message: "Please enter a valid Phone number",
              },
            })}
          />
          {errors.phone && (
            <div className="mt-1 text-red-400">
              <small>{errors.phone.message}</small>
            </div>
          )}
        </div>

        <div className="mb-5">
          <label htmlFor="email_address" className="sr-only">
            Email Address
          </label>
          <input
            id="email_address"
            type="email"
            placeholder="Email Address"
            name="email"
            autoComplete="false"
            className={`${fieldBase} ${errors.email ? fieldError : fieldOk}`}
            {...register("email", {
              required: "Enter your email",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Please enter a valid email",
              },
            })}
          />
          {errors.email && (
            <div className="mt-1 text-red-400">
              <small>{errors.email.message}</small>
            </div>
          )}
        </div>

        <div className="mb-3">
          <textarea
            name="message"
            placeholder="Your Message"
            className={`${fieldBase} h-36 ${errors.message ? fieldError : fieldOk}`}
            {...register("message", {
              required: "Enter your Message",
            })}
          />
          {errors.message && (
            <div className="mt-1 text-red-400">
              {" "}
              <small>{errors.message.message}</small>
            </div>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-4 font-semibold text-[#0A0C10] transition-colors bg-[#33C2F0] rounded-md hover:bg-[#6FDBFF] focus:outline-none focus:ring-4 focus:ring-[#33C2F0]/20 px-7">
          {isSubmitting ? (
            <svg
              className="w-5 h-5 mx-auto text-[#0A0C10] animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
            "Send Message"
          )}
        </button>
      </form>

      {isSubmitSuccessful && isSuccess && (
        <div className="mt-3 text-sm text-center text-green-400">
          {message || "Success. Message sent successfully"}
        </div>
      )}
      {isSubmitSuccessful && !isSuccess && (
        <div className="mt-3 text-sm text-center text-red-400">
          {message || "Something went wrong. Please try later."}
        </div>
      )}
    </>
  );
}
