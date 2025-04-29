import React, { useState, useEffect, useRef } from "react";
import port from "../assets/img/portfolio.png";
import burger from "../assets/img/burger.png";
import spotify from "../assets/img/spotify.png";
import calci from "../assets/img/calc.png";
import ET from "../assets/img/expense.png";
import ttt from "../assets/img/tictactoe.png";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    image: port,
    description: "A personal portfolio website built with React JS and Tailwind CSS.",
    demoLink: "https://github.com/Dev-Darji/Portfolio_main",
    codeLink: "https://github.com/Dev-Darji/Portfolio_main",
  },
  {
    id: 2,
    title: "Spotify Clone",
    image: spotify,
    description: "A Spotify Clone application using React JS and Tailwind CSS.",
    demoLink: "https://github.com/Dev-Darji/Spotify_Clone",
    codeLink: "https://github.com/Dev-Darji/Spotify_Clone",
  },
  {
    id: 3,
    title: "Expense Tracker",
    image: ET,
    description: "A Expense Tracker application using React.",
    demoLink: "https://github.com/Dev-Darji/EXPENSE-TRACKER",
    codeLink: "https://github.com/Dev-Darji/EXPENSE-TRACKER",
  },
  {
    id: 4,
    title: "Tic Tac Toe",
    image: ttt,
    description: "A Tic Tac Toe Game using HTML,CSS,JS",
    demoLink: "https://github.com/Dev-Darji/TicTacToe",
    codeLink: "https://github.com/Dev-Darji/TicTacToe",
  },
  {
    id: 5,
    title: "Burger Bites",
    image: burger,
    description: "A Burger Bites application using HTML and CSS.",
    demoLink: "https://github.com/Dev-Darji/burger-bites",
    codeLink: "https://github.com/Dev-Darji/burger-bites",
  },
  {
    id: 6,
    title: "Calculator",
    image: calci,
    description: "A Responsive Calculator using HTML,CSS,JS",
    demoLink: "https://github.com/Dev-Darji/calculator",
    codeLink: "https://github.com/Dev-Darji/calculator",
  },
];

const Projects = () => {
  const [isScrolling, setIsScrolling] = useState(true);
  const projectContainerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (projectContainerRef.current && isScrolling) {
        const scrollWidth = projectContainerRef.current.scrollWidth;
        const containerWidth = projectContainerRef.current.clientWidth;
        const currentScroll = projectContainerRef.current.scrollLeft;

        if (currentScroll + containerWidth >= scrollWidth) {
          projectContainerRef.current.scrollTo({
            left: 0,
            behavior: "smooth",
          });
        } else {
          projectContainerRef.current.scrollTo({
            left: currentScroll + 300,
            behavior: "smooth",
          });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isScrolling]);

  const handleMouseEnter = () => setIsScrolling(false);
  const handleMouseLeave = () => setIsScrolling(true);

  return (
    <main id="projects" className="py-40 text-white px-6">
      <section className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
          <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text">
            My Projects
          </span>
        </h2>
        <p className="text-gray-300 text-xl mb-20">
          --- What I Have Built ---
        </p>

        <div
          ref={projectContainerRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="flex overflow-x-auto gap-8 scrollbar-thin scrollbar-thumb-purple-500 scroll-smooth"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex-shrink-0 w-[320px] md:w-[360px] lg:w-[400px] bg-[#1c1c2c] rounded-2xl shadow-lg hover:shadow-purple-500/30 transition-all duration-300 relative"
            >
              <div className="overflow-hidden rounded-t-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-purple-400 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 text-base">{project.description}</p>
                <div className="flex justify-between gap-4">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg transition"
                  >
                    View Demo
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-700 hover:bg-gray-800 text-white py-2 rounded-lg transition"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Projects;
