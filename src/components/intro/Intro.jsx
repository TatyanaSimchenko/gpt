import { init } from "ityped";
import { useEffect, useRef } from "react";

import "./Intro.scss";
import women from "../../assets/women.png";
import down from "../../assets/down.png";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Developer", "Designer", "Content Creator"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src={women} alt="images" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Sintya Krichevskaya</h1>
          <h3>
            Freelanse <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src={down} alt="arrow"></img>
        </a>
      </div>
    </div>
  );
}
