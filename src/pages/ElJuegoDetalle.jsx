import { useState, useEffect } from "react";
import { NavLink } from "react-router";
import { useParams } from "react-router";

function ElJuegoDetalle() {
    const { id } = useParams();
    const [article, setArticle] = useState(null);

    useEffect(() => {
      fetch("/api/api-articles.json")
      .then((res) => res.json())
      .then((data) => {
        const foundArticle = data.find((a) => a.id === Number(id));
        setArticle(foundArticle);
      });
    }, [id]);

    if (!article) {
      return <p>Cargando artículo...</p>;
    }

  return (
    <div className="contents_page">
      <div className="article_container">
        <NavLink to="/el-juego">← Volver</NavLink>
        <article>
          <h1 className="title_detail">{article.titulo}</h1>
          <div className="article_content">
            {article.contenido.split("\n").map((parrafo, i) =>(
              <p key={i}>{parrafo}</p>
            ))}
          </div>
          </article>
          <div className="article_images">
            {article.imagenes.map((img, index) =>(
              <img className="image" key={index}
              src={img}
              alt={`imagen ${index + 1}`}/>
            ))}
          </div>
        
      </div>
    </div>
  );
}

export default ElJuegoDetalle;
