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
      <article className="article_gallery">
        {previews.map((preview) => (
          <div className="article_preview"
          key={preview.id}
          onClick={() => navigate(`/el-juego/${preview.id}`)}>
            <img className="image_preview"
          src={preview.imagenes[2]} 
          alt="imagen preview" />
            <h3 className="titulo">
              {preview.titulo}
            </h3>
            <p className="resumen">
              {preview.resumen}
            </p>
          </div>
        ))}
      </article>
    </div>
  );
}

export default ElJuego;
