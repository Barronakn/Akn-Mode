import { NavLink } from "react-router-dom";

const ArticlesList = ( { img, title, link} ) => {
  return <div className="articleMode videoMode">
    <img src={img} alt="" />
    <p>{title}</p> <br />
    <NavLink to={link}>Lire plus</NavLink>
  </div>
};

export default ArticlesList;
