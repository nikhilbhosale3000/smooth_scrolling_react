import "./App.css";
import { useRef } from "react";
import { sampleText } from "./data/data";

function App() {
  const homeRef = useRef();
  const aboutRef = useRef();
  const contactRef = useRef();

  return (
    <>
      <div className="body-wrapper min-h-screen w-[1440px] bg-[#28292d] flex justify-center">
        <div className="main-wrapper flex flex-col justify-start items-center w-[75%] h-full font-sans">
          <div className=" nav-bar flex justify-center items-center gap-5 mt-10 ">
            <button
              className="btn-main"
              onClick={() => {
                homeRef.current?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Home
            </button>
            <button
              className="btn-main"
              onClick={() => {
                aboutRef.current?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              About Us
            </button>
            <button
              className="btn-main"
              onClick={() => {
                contactRef.current?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Contact Us
            </button>
          </div>
          <div
            ref={homeRef}
            className="home-section flex flex-col justify-center items-center mt-5 text-white "
          >
            <h3 className="font-bold text-4xl m-5">Home</h3>
            <p className="para">
              {sampleText}
              <br />
              {sampleText}
            </p>
          </div>
          <div
            ref={aboutRef}
            className="about-section flex flex-col justify-center items-center mt-5 text-white "
          >
            <h3 className="font-bold text-4xl m-10">About Us</h3>
            <p className="para">
              {sampleText}
              <br />
              {sampleText}
            </p>
          </div>
          <div
            ref={contactRef}
            className="contact-section flex flex-col justify-center items-center mt-5 text-white "
          >
            <h3 className="font-bold text-4xl m-10">Contact Us</h3>
            <p className="para mb-10">
              {sampleText}
              <br />
              {sampleText}
              <br />
              {sampleText}
            </p>
          </div>
          <button
            className="btn-main mb-5"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            Go to Top
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
