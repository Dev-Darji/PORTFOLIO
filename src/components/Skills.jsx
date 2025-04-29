import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Skills = () => {
  const skillsData = [
    {
      img: "src/assets/img/html.png",
      title: "HTML",
      description:
        "Strong understanding of semantic HTML5 structure, elements, and best practices for building accessible web pages.",
    },
    {
      img: "src/assets/img/css.png",
      title: "CSS",
      description:
        "Skilled in crafting responsive layouts, animations, and styling with modern CSS techniques and Flexbox/Grid.",
    },
    {
      img: "src/assets/img/js.svg",
      title: "JavaScript",
      description:
        "Proficient in ES6+ features, DOM manipulation, event handling, and creating dynamic, interactive web apps.",
    },
    {
      img: "src/assets/img/react.svg",
      title: "React JS",
      description:
        "Experienced in building SPA using components, hooks, props, and managing state effectively in React applications.",
    },
    {
      img: "src/assets/img/bootstrap.svg",
      title: "Bootstrap",
      description:
        "Familiar with Bootstrap 5 utility classes, grid system, responsive components, and layout customization.",
    },
    {
      img: "src/assets/img/tailwind.svg",
      title: "Tailwind CSS",
      description:
        "Skilled in using utility-first classes of Tailwind to quickly build responsive and modern UI designs.",
    },
  ];

  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section id="skills" className=" text-white py-32 px-6">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto text-center"
      >
        <h2 className="text-5xl md:text-6xl font-extrabold mb-3">
          <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text">
            Skills
          </span>
        </h2>
        <h4 className="text-xl text-gray-300 mb-6">--- What I Know ---</h4>
        <p className="text-lg text-gray-400 mb-16 max-w-3xl mx-auto leading-relaxed">
          Below are the key technologies I work with in frontend development. Each skill contributes to building responsive, modern, and high-performance web applications.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-[#1c1c2c] rounded-2xl p-8 min-h-[300px] flex flex-col items-center text-center hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img
                src={skill.img}
                alt={skill.title}
                className="w-20 h-20 object-contain mb-6"
              />
              <h3 className="text-2xl font-semibold text-purple-400 mb-4">
                {skill.title}
              </h3>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
