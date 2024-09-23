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
      .sendForm("service_zszxh4j", "template_atwkta1", form.current, {
        publicKey: "9ccArTlut2b-6Z15T",
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
    <>
      <main className="container mx-auto px-4 py-[50px] md:py-[120px]">
        <motion.h1
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.1 }}
          className="text-3xl sm:text-5xl font-bold py-[50px] text-center"
        >
          Contact Us
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.1 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            {successMessage && (
              <div className="mb-4 p-2 text-green-600 bg-green-100 border border-green-300 rounded">
                {successMessage}
              </div>
            )}
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
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
                  className="mt-1 block w-full h-[100px] rounded-md border-gray-300 shadow-sm"
                  required
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
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
            className="bg-gray-100 p-6 rounded-lg"
          >
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-indigo-600" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-indigo-600" />
                <span>info@artgallery.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-indigo-600" />
                <span>123 Art Street, Creative City, AC 12345</span>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
};

export default Contact;
