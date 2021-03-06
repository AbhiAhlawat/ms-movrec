import AnimationCard from "./subComponents/AnimationCard";
import FAQ from "./subComponents/FAQ";
import tv from "../assets/tv.png";
import mobile from "../assets/mobile.jpg";
import devicePile from "../assets/device-pile-in.png";
import videoTv from "../assets/video-tv-in-0819.m4v";
import videoDevicePile from "../assets/video-devices-in.m4v";
import downloadIcon from "../assets/download-icon.gif";
import "../css/index.css";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="main-content">

      <div className="showcase-wrapper">
        <div className="showcase">
          <h1 className="showcase-title">
            Unlimited Movies, TV Shows and More.
          </h1>
          <h2 className="showcase-sub-title">
            Explore Anytime,Anywhere
          </h2>
          <button className="red-btn signup-btn">
          
            <Link to="/home">
              <button className="red-btn signup-btn"> Get Started </button>
            </Link>
        
          <span className="chevron-right-arrow">
            <svg viewBox="0 0 6 12" xmlns="http://www.w3.org/2000/svg">
              <desc>chevron</desc>
              <path d="M.61 1.312l.78-.624L5.64 6l-4.25 5.312-.78-.624L4.36 6z"></path>
            </svg>
          </span>
        </button>
        </div>
      </div>
      
      
      <section className="enjoy-on-tv-section">
        <AnimationCard
          title="Enjoy on your TV."
          subtitle="Watch on smart TVs, Chromecast, Apple TV, Blu-ray players and more."
          image={tv}
          imageAlt="tv"
          videoTv={videoTv}
        />
      </section>
      <section className="download-your-shows-section">
        <AnimationCard
          title="Watch Trailers on Youtube."
          subtitle="Always have something to watch including trailers and related videos."
          image={mobile}
          imageAlt="mobile"
          downloadIcon={downloadIcon}
        />
      </section>
      <section className="watch-everywhere-section">
        <AnimationCard
          title="Watch everywhere."
          subtitle="Stream unlimited videos related to Movies and TV shows on your phone, tablet, laptop, and TV."
          image={devicePile}
          imageAlt="device pile in"
          videoDevicePile={videoDevicePile}
        />
      </section>
      
      <section className="faq-section">
        <FAQ />
      </section>
    </div>
  );
};

export default Main;
