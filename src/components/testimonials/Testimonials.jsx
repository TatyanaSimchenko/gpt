import rightArrow from "../../assets/right-arrow.png";
import youtube from "../../assets/youtube.png";
import twitter from "../../assets/twitter.png";
import linkedin from "../../assets/linkedin.png";
import "./Testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Lina Mayer",
      title: "Seo Analitic",
      img: "https://www.imagediamond.com/blog/wp-content/uploads/2020/06/cartoon-boy-images-17-1.jpg",
      icon: youtube,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam optio excepturi sed nesciunt quod ipsam voluptas tempora.",
    },
    {
      id: 2,
      name: "Sonya Dreskova",
      title: "Designer",
      img: "https://www.imagediamond.com/blog/wp-content/uploads/2020/06/cartoon-boy-images-16-1.jpg",
      icon: twitter,
      desc: "Eum magnam laboriosam numquam, eos doloribus eaque est placeat. Corrupti quisquam necessitatibus voluptatum.",
      featured: true,
    },
    {
      id: 3,
      name: "Maria Duk",
      title: "Front-End Dew",
      img: "https://www.imagediamond.com/blog/wp-content/uploads/2020/06/cartoon-girl-images-1.jpg",
      icon: linkedin,
      desc: "Ullam optio excepturi sed nesciunt quod ipsam voluptas tempora, eum magnam laboriosam numquam.",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src={rightArrow} alt="arrow" className="left" />
              <img className="user" src={d.img} alt="img" />
              <img src={d.icon} alt="icon" className="right" />
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// https://www.imagediamond.com/blog/wp-content/uploads/2020/06/cartoon-boy-images-16-1.jpg
// https://www.imagediamond.com/blog/wp-content/uploads/2020/06/cartoon-boy-images-21-1.jpg
// https://www.imagediamond.com/blog/wp-content/uploads/2020/06/cartoon-girl-images-1.jpg
