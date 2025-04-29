import { useState, useEffect } from "react";

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(50);
  const toRotate = ["a Student", "Web Developer"];
  const period = 1800;

  useEffect(() => {
    const ticker = setInterval(() => tick(), delta);
    return () => clearInterval(ticker); // Clean up the interval on component unmount
  }, [text, isDeleting, loopNum, delta]); // Add dependencies

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    console.log({ updatedText, isDeleting, loopNum }); // Debugging

    setText(updatedText);
    setDelta(isDeleting ? 50 : 120);

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period); // Pause after text is fully written
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(130); // Typing delay for next text
    }
  };

  return (
    <section className="text-white h-screen w-screen flex justify-center items-center relative overflow-hidden mt-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Avatar */}
        {/* <div className="w-full md:w-1/3 flex justify-center animate-fadeInLeft">
          <img
            src="/assets/img/avatar1.svg"
            alt="Dev Avatar"
            className="w-[380px] h-[380px] object-contain -mt-16 animate-bounce-slow"
          />
        </div> */}

        {/* Text Section */}
        <div className="w-[1000px] md:w-3/4 text-center md:text-left justify-center items-center">
          <h1 className="up text-2xl sm:text-2xl lg:text-2xl font-semibold leading-tight mb-4 animate-fadeInDown text-center ">
            Hi! I'm Dev, <br />
            <span className=" text-purple-500">
              {text}
              <span className="text-gray-400 animate-pulse">|</span>
            </span>
          </h1>

          <p className="text-gray-400 text-base sm:text-lg lg:text-lg mt-6 leading-relaxed animate-fadeIn opacity-70 text-center">
            FRONTEND DEVELOPER | Crafting Responsive & Interactive Web
            Experiences.
            <br />
            Skilled in HTML, CSS, JavaScript, React JS.
          </p>

          {/* Buttons */}
          <div className="flex justify-center md:justify-center gap-8 mt-24 animate-fadeInUp">
            <button
              className="bg-purple-600 hover:bg-purple-700 hover:scale-105 transition duration-300 text-white font-bold py-3 px-6 rounded-full shadow-lg text-lg animate-wiggle "
              onClick={() => window.open("mailto:youremail@example.com")}
            >
              Hire Me
            </button>
            <button
              onClick={() =>
                window.scrollTo({
                  top: window.innerHeight,
                  behavior: "smooth",
                })
              }
              className="bg-white text-gray-900 hover:bg-purple-200 hover:scale-102 transition duration-300 font-bold py-3 px-6 rounded-full shadow-lg text-lg animate-fadeInUp"
            >
              Explore More ↓
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
