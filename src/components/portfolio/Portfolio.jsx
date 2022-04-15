import { useState, useEffect } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  brandingPortfolio,
} from "../../data";
import "./Portfolio.scss";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "branding",
      title: "Branding",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      case "branding":
        setData(brandingPortfolio);
        break;
        default:
          setData(featuredPortfolio);

    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
        {/* <li className="active">Featured</li>
        <li>Web App</li>
        <li>Mobile App</li>
        <li>Design</li>
        <li>Branding</li> */}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
          <img
            src={d.img}
            alt="img"
          ></img>
          <h3>{d.title}</h3>
        </div>
        ))}
        
        {/* <div className="item">
          <img
            src="https://www.visitdubai.com/-/media/gathercontent/article/t/top-rides-at-img-worlds-of-adventure/media/top-rides-at-img-worlds-of-adventure-predator-5.jpg?rev=f1bb54a15add49a09c912eac851f4ff7&cx=0.56&cy=0.4&cw=1556&ch=690"
            alt=""
          ></img>
          <h3>Travel App</h3>
        </div>
        <div className="item">
          <img
            src="https://www.visitdubai.com/-/media/gathercontent/article/t/top-rides-at-img-worlds-of-adventure/media/top-rides-at-img-worlds-of-adventure-predator-5.jpg?rev=f1bb54a15add49a09c912eac851f4ff7&cx=0.56&cy=0.4&cw=1556&ch=690"
            alt=""
          ></img>
          <h3>Travel App</h3>
        </div>
        <div className="item">
          <img
            src="https://www.visitdubai.com/-/media/gathercontent/article/t/top-rides-at-img-worlds-of-adventure/media/top-rides-at-img-worlds-of-adventure-predator-5.jpg?rev=f1bb54a15add49a09c912eac851f4ff7&cx=0.56&cy=0.4&cw=1556&ch=690"
            alt=""
          ></img>
          <h3>Travel App</h3>
        </div>
        <div className="item">
          <img
            src="https://www.visitdubai.com/-/media/gathercontent/article/t/top-rides-at-img-worlds-of-adventure/media/top-rides-at-img-worlds-of-adventure-predator-5.jpg?rev=f1bb54a15add49a09c912eac851f4ff7&cx=0.56&cy=0.4&cw=1556&ch=690"
            alt=""
          ></img>
          <h3>Travel App</h3>
        </div> */}
      </div>
    </div>
  );
}
