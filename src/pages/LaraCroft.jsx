import laraCroft from "../images/lara-profile.jpg";

function LaraCroft() {
  return (
    <div className="contents_page">
    <article className="lara_file">
      <section className="section_one">
        <div className="lara_picture_profile">
          <img className="lar_pic" src={laraCroft} alt="Lara Croft" />
        </div>
        <div className="lara_basic_info">
          <dl>
            <dt className="def_trem"> Nombre completo:</dt>
            <dd>Lara Amelia Croft</dd>
            <dt className="def_trem"> Nacimiento:</dt>
            <dd>14/01/1968</dd>
            <dt className="def_trem"> Nacionalidad</dt>
            <dd>Inglesa</dd>
            <dt className="def_trem"> Ocupaciones:</dt>
            <dd>Arqueóloga, Caza Tesoros, Autora</dd>
            <dt className="def_trem"> Padres:</dt>
            <dd>Lord Henshingly Croft y Lady Amelia Croft</dd>
          </dl>
        </div>
      </section>
      <section className="section_two">
        <div className="backg_title">
          <p className="backg_title_text_1">LARA CROFT</p>
          <p className="backg_title_text_2">(Según la línea temporal original)</p>
        </div>
        <div className="backg_text">
          <p>Lara Croft, hija de Lord Henshingly Croft, fue educada desde sun nacimiento a comportarse
            como una aristócrata. Después de terminar sus estudios a la edad de 21 años, estaba claro
            que Lara se casaría con un buen partido. No obstante, cuando regresaba de una vacaciones de
            esquí, el avión se estrelló en el centro de los Montes Himalaya. Lara fue la única
            superviviente , por lo que tuvo que aprender a sobrevivir en condiciones adversas, en un
            mundo muy distinto al que conocía. Dos semanas más tarde, cuando llegó al pueblecito de
            Tokakeriby, se dio cuenta de que su experiencia había arraigado en su mente. Ya no podía
            soportar el sofocante y claustrofóbico de la alta sociedad británica, y sólo se sentía cómoda
            cuando viajaba sola. Durante los 8 años que siguieron, se dedicó a viajar por el mundo y a
            estudiar las civilizaciones de la antigüedad. Su familia no tardó en desheredar a esta hija
            pródiga, y Lara no tuvo más remedio que dedicarse a escribir para poder financiar sus viajes.
            Afamada por el descubrimiento de varias zonas antiguas de gran interés arqueológico, publicó
            varios libros de viaje y revistas sobre sus excavaciones.
          </p>
        </div>
      </section>
    </article>
    </div>
  )
}

export default LaraCroft;