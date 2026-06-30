import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router";
import { useParams } from "react-router";

function GaleriaDetail() {
  /*variables para el detalle de la imagen*/
  const { id } = useParams();
  const [image, setImage] = useState(null);
  /*variables para el slide de debajo*/
  const [allImages, setAllImages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/api/api-gallery.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("todas las imágenes:", data);
        setAllImages(data);
        const fetchImage = data.find((img) => img.id === Number(id));
        setImage(fetchImage);
      });
  }, [id]);

  // Indice para la imagen actual del array
  const currentIndex = allImages.findIndex((img) => img.id === Number(id));

  const handlePrev = () => {
    if (currentIndex > 0) {
      navigate(`/galeria/${allImages[currentIndex - 1].id}`);
    }
  };

  const handleNext = () => {
    if (currentIndex < allImages.length - 1) {
      navigate(`/galeria/${allImages[currentIndex + 1].id}`);
    }
  };

  return (
    <div className="contents_page">
      <article className="image_container">
        <NavLink className="back_to_galley" to="/galeria">
          ← Back to Gallery
        </NavLink>
        <section>
          {image ? (
            <img
              className="image_detail"
              key={image.id}
              src={image.src}
              alt={image.alt}
            />
          ) : (
            <p>Cargando...</p>
          )}
        </section>
        <section className="gallery_slide">
          <button onClick={handlePrev} disabled={currentIndex === 0}>
            ←
          </button>
          <div className="thumbnails_vertical">
            {allImages.map((img) => (
              <img
                key={img.id}
                src={img.src}
                alt={img.alt}
                className={
                  img.id === Number(id) ? "thumbnail active" : "thumbnail"
                }
                onClick={() => navigate(`/galeria/${img.id}`)}
              />
            ))}
          </div>
          <button
            onClick={handleNext}
            disabled={currentIndex === allImages.length - 1}
          >
            →
          </button>
        </section>
      </article>
    </div>
  );
}

export default GaleriaDetail;
