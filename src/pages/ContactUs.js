import axios from "axios";
import { useRef, useState } from "react";
import { validateForm } from "../utils/validateData";
import { sendEmail } from "../utils/EmailSend";

function ContactUs() {
  const buttonRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    message: "",
  });

  const emptyFormData = () => {
    setFormData({ fullname: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // console.log(formData);
  };

  // form submit logic and submit button loading and disablity
  const handleSubmit = async (e) => {
    e.preventDefault();
    let result = validateForm(formData);
    if (result) {
      setLoading(true);
      buttonRef.current.setAttribute("disabled", true);
      try {
        await axios
          .post("http://localhost:5000/feedbacks/insert", formData)
          .then((res) => {
            let response = res.data;
            if (response.isSuccess) {
              if (response.displayMessage) {
                alert(response.displayMessage);
                emptyFormData();
                setLoading(false);
                buttonRef.current.removeAttribute("disabled", false);
              } else {
                sendEmail({
                  to_name: formData.fullname,
                  to_email: formData.email,
                });
                alert("Thank you! Your message has been successfully sent");
                setLoading(false);
                emptyFormData();
                buttonRef.current.removeAttribute("disabled", false);
              }
            } else {
              alert(response.displayMessage);
              setLoading(false);
              buttonRef.current.removeAttribute("disabled", false);
            }
          });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="h-full w-full">
      <section className="text-gray-600 body-font relative">
        <div className="absolute inset-0 bg-gray-300">
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="map"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.806048972495!2d77.24791487495244!3d28.515482489387423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce17200f30e01%3A0xa21a99247ddc4c4c!2sJamia%20Hamdard%20University!5e0!3m2!1sen!2sin!4v1708599146046!5m2!1sen!2sin"           
             style={{
              filter: "contrast(1.2) opacity(0.5)",
            }}></iframe>
        </div>
        <div className="container px-5 py-24 mx-auto flex ">
          <form
            className="lg:w-1/3 md:w-1/2 bg-white h-full rounded-lg p-5 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-lg "
            onSubmit={handleSubmit}>
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font ">
              Contact US
            </h2>
            <div className="relative mb-4 ">
              <label
                htmlFor="fullname"
                className="leading-7 text-sm font-bold text-gray-600">
                Full Name
              </label>
              <input
                placeholder="Enter Your Name"
                type="text"
                id="fullname"
                name="fullname"
                display-message="Full Name"
                onChange={handleChange}
                value={formData?.fullname}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out hover:border-sky-600  "
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600 font-bold">
                Email
              </label>
              <input
                placeholder="Enter Your Email"
                type="text"
                id="email"
                name="email"
                display-message="Email Address"
                onChange={handleChange}
                value={formData?.email}
                className="w-full bg-white rounded hover:border-sky-600  border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="phone"
                className="leading-7 text-sm text-gray-600 font-bold">
                Mobile
              </label>
              <input
                placeholder="Enter Your Number"
                type="number"
                pattern="[0-9]{10}"
                id="phone"
                name="phone"
                display-message="Phone Number"
                onChange={handleChange}
                value={formData?.phone}
                className=" [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-full bg-white rounded border border-gray-300 hover:border-sky-600  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600 font-bold">
                Message
              </label>
              <textarea
                placeholder="Type Here.."
                id="message"
                name="message"
                display-message="Message"
                onChange={handleChange}
                value={formData?.message}
                className="w-full bg-white rounded border border-gray-300 hover:border-sky-600   focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
            <button
              ref={buttonRef}
              className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg hover:shadow flex justify-center items-center">
              <div
                className={`w-8 h-8 rounded-full border-4 border-r-slate-300 border-slate-50 ${
                  loading === true ? "animate-spin block" : "hidden"
                }`}></div>
              <p className={`${loading === true ? "hidden" : "block"}`}>
                Submit
              </p>
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;
