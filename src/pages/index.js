import * as React from "react"
import HamterImg from "../images/hamter.jpg"

import "../styles/reset.css"

const HamterStyle = {
  display: "block",
  height: "100vh"
}

const IndexPage = () => {
  return (
    <main>
      <title>Álex S. Fogaça - Software Developer</title>
      <img src={HamterImg} alt="Hamter" style={HamterStyle}/>
    </main>
  )
}

export default IndexPage