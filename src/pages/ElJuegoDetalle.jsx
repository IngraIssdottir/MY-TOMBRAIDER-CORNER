import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router";
import { useParams } from "react-router";

function ElJuegoDetalle() {

    const { id } = useParams();
    const [article, setArticle] = useState(null);

    const [allArticles, setAllArticles] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
      fetch("/api/api-articles.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("todos los artículos:", data);
        setAllArticles(data);
        const fetchArticle = data.find((art) => art.id === Number(id));
        setArticle(fetchArticle);
      });
      }, [id]);

    const currentIndex = allArticles.findIndex((article) => article.id === Number(id));

    const handleArt = () => {
      if (currentIndex > 0) {
        navigate(`/el-juego/${allArticles[currentIndex - 1].id}`);
      }
    };
    
    const handleNextArt = () => {
      if (currentIndex < allArticles.length - 1) {
        navigate(`el-juego/${allArticles[currentIndex + 1].id}`);
      }
    };


  return <div className="contents_page">
    
  </div>;
}

export default ElJuegoDetalle;
