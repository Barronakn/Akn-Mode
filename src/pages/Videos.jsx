import Navigation from "../components/Navigation";
import VideoList from "../components/VideoList";
import Footer from "../components/Footer";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Videos = () => {
  const videos = [
    {
      id: 0,
      iframe: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/UrN_fV_Vj74"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
      title:
        "+150 modèles en soie, modèles des robes #africaines en #soie 2022",
    },
    {
      id: 1,
      iframe: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/gYx80_QAJfc"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
      title:
        "Nouveaux modèles (2023) de taille basse en pagne africain pour femme.",
    },
    {
      id: 2,
      iframe: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/7kZZa-WSWJM"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
      title:
        "Mode Africaine : très jolie petite robe, courte en pagne. Trendy african dresses.",
    },
    {
      id: 3,
      iframe: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/40TjitHNGck"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
      title:
        "+40 idée des marinières en pagne pour être sexy pendant la #grossesse",
    },
    {
      id: 4,
      iframe: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/akmqUz6K0Ag"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
      title:
        "Modèle de veste en pagne pour femme / blazer en pagne wax africain.",
    },
    {
      id: 5,
      iframe: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/DQB16dckxcw"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
      title:
        "Mode Africaine : chics nouveaux modèles de robe en pagne, pour fille, garçon. ",
    },
    {
      id: 6,
      iframe: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/p6lsXcycBOg"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
      title:
        "Modèle africain pour couple /modèle africain en pagne pour couple.",
    },
    {
      id: 7,
      iframe: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/wQzZFTvItHg"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
      title: "Modèle en pagne africain pour couple",
    },
    {
      id: 8,
      iframe: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/1eZF2Wbf0uU"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
      title: "Modèles petit garçon trop chou",
    },
    {
      id: 9,
      iframe: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/PYzk3AHyYXI"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
      title:
        "MODÈLES AFRICAIN POUR HOMME / TENUE AFRICAIN EN PAGNE POUR HOMME , ANKARA STYLES FOR MAN",
    },
    {
      id: 10,
      iframe: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/dvCIZkzchGo"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
      title:
        "MODELS CHEMISES,SENATORS,BLOUSES HOMMES IPER TENDANCES,FASHION STYLE EN PAGNE.",
    },
    {
      id: 11,
      iframe: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Ua7DLxl10L4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
      title:
        "Modèle africain : 30 élégants modèles de boubou homme très tendance. Mode africaine homme.",
    },
  ];

  const [search, setSearch] = useState("");
  const filter = videos.filter(video => {
        return video.title.includes(search)
   })

  const croissant = () => {
    videos.sort((a, b) => (a.title > b.title ? 1 : -1))
  };

  return (
    <div className="videos">
      <Navigation />
      <div className="videoContainer">
        <div className="videoHeader">
          <h1>Vidéothèque</h1>
          <p>Explorez notre collection organisée de vidéos de mode.</p>
        </div>
        <div className="search">
          <input
            type="search"
            placeholder="Rechercher dans la vidéothèque"
            id="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select onClick={croissant} name="" id="select">
            <option className="n" value="Tirer par">
              Tirer par
            </option>
            <option value="De A à Z">
              <NavLink >De A à Z</NavLink>
            </option>
            <option value="De Z à A">De Z à A</option>
          </select>
        </div>
        <div className="video">
          {!search
            ? videos.map((video) => {
                return <VideoList key={video.id} {...video} />;
              })
            : filter.map((video) => {
                return <VideoList key={video.id} {...video} />;
              })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Videos;
