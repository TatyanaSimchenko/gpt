import "./Works.scss";
import mobile  from "../../assets/mobile.png";
import globe from "../../assets/globe.png";
import writing from "../../assets/writing.png"
import arrLeft from "../../assets/arr-left-white.png";
import arrRight from "../../assets/arr-right-white.png";
import { useState } from "react";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState (0);

  const data = [
  {
    id: "1",
    icon: mobile,
    title:"Web Design",
    desc: "Lorem, ipsum dolor sit amet consectetur",
    img: "https://miro.medium.com/max/1400/0*Yu75zppTpoMl_Noj",
  },
  {
    id: "2",
    icon:globe,
    title:"Mobile Aplication",
    desc: "Facilis excepturi, quo dicta maiores veniam",
    img: "https://timeinpakistan.com/oc-content/uploads/92/19397.jpg",
  },
  {
    id: "3",
    icon: writing,
    title:"Web Content",
    desc: "Sit amet consectetur adipisicing elit",
    img: "https://miro.medium.com/max/1400/1*chEvq4TZ_v30O9YnO3Gifw.jpeg",
  },
  ];

  const handleClick = (way) => {
    way === "left" ? 
    setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) :
    setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
  }

  return (
    <div className="works" id="works">
      <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
        {data.map((d) => (
          <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src={d.icon} alt="img" />
                </div>
                <h2>{d.title}</h2>
                <p>
                  {d.desc}
                </p>
                <span>Projects</span>
              </div>
            </div>
            <div className="right">
              <img src={d.img} alt="img" />
            </div>
          </div>
        </div>
        ))}
        
        
      </div>
      <img src={arrLeft} alt="img" className="arrow left" onClick={() => handleClick("left")}/>
      <img src={arrRight} alt="img" className="arrow right" onClick={() => handleClick()}/>
    </div>
  );
}
