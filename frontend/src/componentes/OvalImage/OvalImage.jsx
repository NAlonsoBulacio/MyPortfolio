import React from 'react'
import irregularOval from '../../multimedia/irregularOval.svg'
import nico from "../../multimedia/nico-photo.png";
const OvalImage = () => {
  return (
    <div style={{ width: "300px", height: "300px", position: "relative" }}>
      <img
        src={nico}
        alt="Tu rostro"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          mask: `url(${irregularOval})`,
          WebkitMask: `url(${irregularOval})`, // Para navegadores WebKit (Safari, Chrome)
        }}
      />
    </div>
  )
}

export default OvalImage
