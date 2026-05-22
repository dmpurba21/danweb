import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { fadeIn } from "../../variants";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    setSuccess(false);
    setError(false);

    const form = event.target;

    emailjs
      .sendForm(
        "service_r52cy3c",
        "7wu74r4",
        form,
        "CU5QR2qf_mi3SBTnG"
      )
      .then(() => {
        setSuccess(true);
        form.reset();
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px]">

          {/* heading */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-4"
          >
            Let's <span className="text-accent">connect.</span>
          </motion.h2>

          {/* subtitle */}
          <motion.p
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-white/60 text-center mb-12 max-w-[500px] mx-auto"
          >
            Whether you are navigating a publisher audit, building a SAM or TPRM
            practice, or exploring data analysitcs services across APAC, I would be
            glad to connect. I will get back to you within 24 to 48 hours.
          </motion.p>

          {/* form */}
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
            onSubmit={handleSubmit}
            autoComplete="off"
            autoCapitalize="off"
          >
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                name="from_name"
                placeholder="Name"
                className="input"
                disabled={isLoading}
                required
              />
              <input
                type="email"
                name="from_email"
                placeholder="E-mail"
                className="input"
                disabled={isLoading}
                required
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="input"
              disabled={isLoading}
              required
            />
            <textarea
              name="message"
              placeholder="Message..."
              className="textarea"
              disabled={isLoading}
              required
            />

            {/* success message */}
            {success && (
              <p className="text-green-400 text-sm text-center">
                Message sent successfully. I will get back to you soon!
              </p>
            )}

            {/* error message */}
            {error && (
              <p className="text-red-400 text-sm text-center">
                Something went wrong. Please try again or reach me on LinkedIn.
              </p>
            )}

            <button
              type="submit"
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
              disabled={isLoading}
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                {isLoading ? "Sending..." : "Let's talk"}
              </span>
              <BsArrowRight
                className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"
                aria-hidden
              />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
