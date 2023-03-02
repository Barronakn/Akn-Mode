import Navigation from '../components/Navigation';
import Footer from "../components/Footer";
import ArticlesList from "../components/ArticlesList";
import { useState } from "react";
const Articles = () => {
  const articles = [
    {
      id: 0,
      img: "mode1b.jpg",
      title: "Existe-t-il une mode africaine ?",
      link: "https://www.peresblancs.org/mode_africaine.htm",
    },
    {
      id: 1,
      img: "mode-africaine.jpg",
      title: "Histoire et évolution de la mode africaine",
      link: "https://afriquetimes.com/histoire-et-evolution-de-la-mode-africaine/",
    },
    {
      id: 2,
      img: "mode-africaine-femme.jpg",
      title: "5 CONSEILS POUR UNE TENUE AFRICAINE RÉUSSIE",
      link: "https://boutique-africaine.com/blogs/blog-africain/tenue-africaine#:~:text=Tu%20pr%C3%A9f%C3%A8res%20porter%20une%20robe,une%20robe%20africaine%20de%20soir%C3%A9e.",
    },
    {
      id: 3,
      img: "IMG-20221108-WA0028-738x355.jpg",
      title:
        "Comment s'habiller pour un mariage coutumier africain? 33 modèles de pagnes pour son mariage coutumier",
      link: "https://www.liveandwed.com/modeles-pagnes-mariage-coutumier/#:~:text=La%20robe%20en%20pagne%20reste,votre%20tenue%20de%20mariage%20coutumier.",
    },
    {
      id: 4,
      img: "modèle-africain-chemise-homme-africaine-imprimés-géométriques-chaussures-noires-manches-mi-longues.jpg",
      title:
        "Tenue africaine pour homme – un style entre tradition et modernité",
      link: "https://archzine.fr/mode-et-beaute/mode-homme/tenue-africaine-pour-homme-un-style-entre-tradition-et-modernite/#:~:text=Une%20seule%20bande%20d'imprim%C3%A9s,en%20restant%20styl%C3%A9e%20et%20actuelle.",
    },
  ];
    const [search, setSearch] = useState("");
    const filter = articles.filter((article) => {
      return article.title.includes(search)
    })
    return (
      <div className="article">
        <Navigation />
        <div className="articleContainer videoContainer">
          <div className="articleHeader videoHeader">
            <h1>Bibliothèque d'articles</h1>
            <p>Explorez des sujets intéressants sur la mode.</p>
          </div>
          <div className="search">
            <input
              type="search"
              placeholder="Rechercher dans la bibliothèque d'articles"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              id="search"
            />
            <select name="" id="select">
              <option className="n" value="Tirer par">
                Tirer par
              </option>
              <option value="De A à Z">De A à Z</option>
              <option value="De Z à A">De Z à A</option>
            </select>
          </div>
          <div className="article video">
            { !search ?
            articles.map((article) => {
              return <ArticlesList key={article.id} {...article} />
            })
            : filter.map((article) => {
              return <ArticlesList key={article.id} {...article} />
            })
          }
          </div>
        </div>
        <Footer />
      </div>
    );
};

export default Articles;