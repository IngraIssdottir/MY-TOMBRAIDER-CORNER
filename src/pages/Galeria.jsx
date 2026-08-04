import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

function Galeria() {
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}/api/api-gallery.json`)
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, []);

  return (
    <div className="contents_page">
      <article className="gallery">
        {images.map((image) => (
          <img
            className="images"
            key={image.id}
            src={`${import.meta.env.BASE_URL}${image.src.replace(/^\//, "")}`}
            alt={image.alt}
            onClick={() => navigate(`/galeria/${image.id}`)}
            style={{ cursor: "pointer" }}
          />
        ))}
      </article>
    </div>
  );
}

export default Galeria;
