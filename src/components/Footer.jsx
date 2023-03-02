import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="logo">
        <NavLink to="/">
          Akn <span>Mode</span>
        </NavLink>
      </div>
      <form action="">
        <p>
          Envoyez-nous un message pour une meilleure assistance dans vos choix
          d'habillement.
        </p>
        <input
          type="email"
          name="mail"
          placeholder="Votre adresse emeil"
          id="mail"
        />{" "}
        <br />
        <br />
        <textarea
          name=""
          id=""
          placeholder="Votre message"
          cols="30"
          rows="10"
        ></textarea>
        <br />
        <br />
        <input type="submit" id="btn" value="Envoyer" />
      </form>
      <p className="copy">© 2023 Akn Mode | Tous les droits sont réservés</p>
    </div>
  );
};

export default Footer;
