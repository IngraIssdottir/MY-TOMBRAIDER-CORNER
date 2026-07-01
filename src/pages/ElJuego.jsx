import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

function ElJuego() {
  const [previews, setPreviews] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/api/api-articles.json")
      .then((res) => res.json())
      .then((data) => setPreviews(data));
  }, []);

  return (
  <div className="contents_page">
    <div className="article_gallery">
      {previews.map((preview) => (
        <article
          className="article_preview"
          key={preview.id}
          onClick={() => navigate(`/el-juego/${preview.id}`)}
        >
          <img
            className="image_preview"
            src={preview.imagenes[2]}
            alt="imagen preview"
          />
          <div className="preview_text">
            <h3 className="titulo">{preview.titulo}</h3>
            <p className="resumen">{preview.resumen}</p>
            <span className="leer-mas">Leer más →</span>
          </div>
        </article>
      ))}
    </div>
  </div>
);
}

export default ElJuego;
