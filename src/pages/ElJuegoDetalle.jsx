import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router";
import { useParams } from "react-router";

function ElJuegoDetalle() {

    const { id } = useParams();

  return <div className="contents_page">Detalle</div>;
}

export default ElJuegoDetalle;
