import React, { useState } from "react";

const contactDetails = {
  email: "devdarji1827@gmail.com",
  phone: "+91 9104635945",
  address: "C-504, Sangini Sakar Jahangirpura Surat - 395005",
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, projectType, message } = formData;
    if (!name || !email || !phone || !projectType || !message) {
      setFormStatus("Please fill in all fields.");
      return;
    }
    const mailToLink = `mailto:${contactDetails.email}?subject=Project Inquiry&body=Name: ${name}%0D%0AEmail: ${email}%0D%0APhone: ${phone}%0D%0AProject Type: ${projectType}%0D%0AMessage: ${message}`;
    window.location.href = mailToLink;
    setFormStatus("Message sent successfully!");
    setFormData({ name: "", email: "", phone: "", projectType: "", message: "" });
  };

  return (
    <section id="contact" className=" text-white py-24 px-6">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-extrabold">
          Let's Discuss Your{" "}
          <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text">
            Project
          </span>
        </h2>
        <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-xl">
          Let’s make something new, different, and more meaningful or make
          things more visual or conceptual.
        </p>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 mt-20 ">
        {/* Left side contact info */}
        <div className="flex-1 flex flex-col gap-10 justify-center">
          <ContactCard
            icon={
              <img
                src="src/assets/img/phone.png"
                alt="Phone Icon"
                className="w-7 h-7 "
              />
            }
            label="Call Me"
            value={contactDetails.phone}
            href={`tel:${contactDetails.phone}`}
          />
          <ContactCard
            icon={
              <img
                src="src/assets/img/mail.png"
                alt="Email Icon"
                className="w-8 h-8"
              />
            }
            label="Email"
            value={contactDetails.email}
            href={`mailto:${contactDetails.email}`}
          />
          <ContactCard
            icon={
              <img
                src="src/assets/img/map.png"
                alt="Location Icon"
                className="w-8 h-8"
              />
            }
            label="Address"
            value={contactDetails.address}
            href="https://maps.app.goo.gl/eD2kMq2dqU9Tbf9g9"
          />
        </div>

        {/* Right side form */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#1c1c2c] p-10 rounded-2xl border border-purple-500"
        >
          <input
            type="text"
            name="name"
            placeholder="Full name"
            value={formData.name}
            onChange={handleInputChange}
            className="input-style col-span-1 text-lg px-4 py-3 rounded-lg bg-[#2a2a3b] text-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleInputChange}
            className="input-style col-span-1 text-lg px-4 py-3 rounded-lg bg-[#2a2a3b] text-white"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone number"
            value={formData.phone}
            onChange={handleInputChange}
            className="input-style col-span-1 text-lg px-4 py-3 rounded-lg bg-[#2a2a3b] text-white"
          />
          <input
            type="text"
            name="projectType"
            placeholder="Project Type"
            value={formData.projectType}
            onChange={handleInputChange}
            className="input-style col-span-1 text-lg px-4 py-3 rounded-lg bg-[#2a2a3b] text-white"
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleInputChange}
            rows="4"
            className="input-style col-span-2 text-lg px-4 py-3 rounded-lg bg-[#2a2a3b] text-white"
          />
          {formStatus && (
            <p className="text-center col-span-2 text-red-500 text-base">
              {formStatus}
            </p>
          )}
          <button
            type="submit"
            className="col-span-2 bg-purple-600 hover:bg-purple-700 py-4 px-6 text-lg rounded-lg font-semibold transition duration-300"
          >
            Submit Message
          </button>
        </form>
      </div>
    </section>
  );
};

const ContactCard = ({ icon, label, value, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-5 bg-purple-600/10 hover:bg-purple-600/20 transition rounded-xl p-6"
  >
    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-purple-200 text-white">
      {icon}
    </div>
    <div>
      <h4 className="text-xl font-semibold text-purple-400">{label}</h4>
      <p className="text-white text-[19px] break-words ">{value}</p>
    </div>
  </a>
);

export default Contact;
