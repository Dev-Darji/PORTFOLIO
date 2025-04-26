import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import web from "../assets/img/web.png";
import front from "../assets/img/front.png";
import res from "../assets/img/responsive.png";

const Services = () => {
  const serviceData = [
    {
      img: web,
      title: "Web Development",
      description:
        "I create fully responsive, optimized websites using clean code and modern tools. My focus is on delivering fast-loading and accessible sites tailored to each project's unique requirements.",
    },
    {
      img: front,
      title: "Frontend Development",
      description:
        "I develop interactive and user-friendly interfaces using HTML, CSS, JavaScript, and modern libraries. I ensure pixel-perfect results, intuitive UX, and maintainable component structures.",
    },
    {
      img: res,
      title: "Responsive Web Design",
      description:
        "I ensure websites adapt seamlessly to all devices using mobile-first principles. My designs work flawlessly across various screen sizes, offering users a smooth experience everywhere.",
    },
  ];

  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section id="services" className=" text-white py-34 px-6">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto text-center"
      >
        <h2 className="text-5xl md:text-6xl font-extrabold mb-3">
          <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text">
            Services
          </span>
        </h2>
        <h4 className="text-xl text-gray-300 mb-6">--- What I Provide ---</h4>
        <p className="text-lg text-gray-400 mb-16 max-w-3xl mx-auto leading-relaxed">
          Below are the key services I offer in frontend development. These focus
          on creating beautiful, functional, and accessible websites that look
          great and perform well across all devices.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {serviceData.map((service, index) => (
            <motion.div
              key={index}
              className="bg-[#1c1c2c] rounded-2xl p-10 min-h-[440px] flex flex-col items-center text-center hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.3 }}
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-20 h-20 object-contain mb-6"
              />
              <h3 className="text-2xl font-semibold text-purple-400 mb-4">
                {service.title}
              </h3>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
