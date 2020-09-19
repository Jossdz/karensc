import React from "react"

//import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Menu from "../components/menu"
import Dulce from "../components/dulce"
import Ingredientes from "../components/ingredientes"
import Salado from "../components/salado"
import Malteadas from "../components/malteadas"
import {createGlobalStyle} from "styled-components"

const Global = createGlobalStyle`
body{
  background-color: #1b130e
}
`


const IndexPage = () => (
  <center>
    <link href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c&family=Montserrat:ital@1&family=Noto+Sans+JP:wght@500;700&family=Ranchers&display=swap" rel="stylesheet"></link>
    <SEO title="Menu" />
    <Global/>
    <br/>
    <Image />
    <Menu></Menu>
    <Dulce></Dulce>
    <Ingredientes></Ingredientes>
    <Salado></Salado>
    <Malteadas></Malteadas>
  </center>
)

export default IndexPage






