import Typewriter from "typewriter-effect";
import { NavLink } from "react-router-dom";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <div className="homeContainer">
        <div className="acceuil">
          <div className="homeAcceuil">
            <h2>Apprenez un peu plus sur la mode africaine</h2>
            <h1>
              Bienvenu sur
              <span>
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 100,
                    strings: ["Akn Mode", "La mode africaine"],
                  }}
                />
              </span>
            </h1>
            <p className="homePara">
              Découvrez le monde de la mode africaine avec Akn Mode, faîtes-nous
              confiance pour vos habillements uniques pour tous types
              d'évènements. Que vous soyez un africain ou non, nous avons
              quelque chose pour vous.
            </p>
          </div>
          <div className="imgAceuil">
            <img src="./pagneHome.png" alt="" />
          </div>
        </div>
        <div className="homeLink">
          <NavLink className="videoLink" to="/videos">
            Regarder des vidéos
          </NavLink>
          <NavLink className="articleLink" to="/articles">
            Explorer les articles <span className="arrow">&rarr;</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;
