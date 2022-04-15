import "./PortfolioList.scss";
// import "../portfolio/Portfolio.scss";

export default function PortfolioList({id, title, active, setSelected}) {
  return (
    <li className=
    {active ? "portfolioList active" : "portfolioList"} onClick={() => setSelected(id)}>
      {title}
    </li>
  )
}
