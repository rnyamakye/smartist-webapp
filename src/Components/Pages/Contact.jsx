import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import { fadeIn } from "../Variants";
import emailjs from "@emailjs/browser";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const form = useRef();
  const [successMessage, setSuccessMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_75mwdff", "template_cnsirhw", form.current, {
        publicKey: "OQSCue2A5Kp0UCU00",
      })
      .then(
        () => {
          setSuccessMessage("Your message has been sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          setSuccessMessage("Failed to send your message. Please try again.");
        }
      );
  };

  return (
    <main className="container w-[90vw] mx-auto px-4 py-[50px] flex-col items-center flex md:py-[120px] lg:py-[50px]">
      <img src="/PngItem_296322.png" className="fixed -z-10 opacity-50" />
      <motion.h1
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.1 }}
        className="text-3xl sm:text-5xl w-[90vw] font-bold py-[50px] text-white text-center z-10"
      >
        Contact Us
      </motion.h1>

      <div className="grid lg:flex-row lg:flex gap-8 lg:justify-center lg:w-[80vw]">
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.1 }}
          className="lg:w-[40%]"
        >
          <h2 className="text-2xl font-semibold mb-4 text-white">
            Get in Touch
          </h2>
          {successMessage && (
            <div className="mb-4 p-2 text-green-600 bg-green-100 border border-green-300 rounded">
              {successMessage}
            </div>
          )}
          <form ref={form} onSubmit={sendEmail} className="space-y-4 ">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="from_name"
                className="mt-1 block w-full p-2 rounded-md border-gray-300 shadow-sm"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="from_email"
                className="mt-1 block w-full p-2 rounded-md border-gray-300 shadow-sm"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                name="message"
                className="mt-1 block w-full h-[150px] rounded-md border-gray-300 shadow-sm"
                required
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              type="submit"
              value="Send"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-1 hover:bg-primary-2"
            >
              Send Message
              <Send className="ml-2 h-4 w-4" />
            </motion.button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-gray-100 p-6 md:px-10 md:py-16 rounded-lg lg:w-[50%]"
        >
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <Phone className="h-5 w-5 mr-2 text-indigo-600" />
              <a href="tel:+233547348350">+233547348350</a>
            </div>
            <div className="flex items-center">
              <Mail className="h-5 w-5 mr-2 text-indigo-600" />
              <span>antwiemmanuel2003@icloud.com</span>
            </div>
            <div className="flex items-start">
              <MapPin className="h-5 w-5 mr-2 text-indigo-600 mt-1" />
              <span>Konadu Street, Amakom, Kumasi, Ghana </span>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default Contact;
