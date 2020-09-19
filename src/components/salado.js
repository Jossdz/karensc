import React from 'react'
import styled from 'styled-components'

const Rectangulo = styled.div`
  border-radius: 6px;
  width: 90%;
  padding: 6px 0;
  box-shadow: 0 0 14px 0 rgba(42, 166, 221, 0.6);
  border: solid 3px #2aa6dd;
  margin-bottom: 30px;
`
const P = styled.div`
width: 300px;
  height: 50px;
  text-shadow: 0 3px 6px rgba(42, 166, 221, 0.6);
  font-family: Roboto, Helvetica, sans-serif;
  font-size: 40px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.21;
  letter-spacing: normal;
  text-align: center;
  color: #2aa6dd;
`
const Li = styled.li`
width: 300px;

text-shadow: 0 3px 6px rgba(42, 166, 221, 0.6);
font-family: Roboto, Helvetica, sans-serif;
font-size: 15px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: 1.21;
letter-spacing: normal;
text-align: center;
color: #2aa6dd;
`
const Ul = styled.ul`
  width: 300px;
  margin: 0;
  padding: 0;
  font-family: Roboto, Helvetica, sans-serif;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.21;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  list-style: none;
`


const salado = () => {
    return (
        <Rectangulo>
               <Ul>
                <P>Salado $40</P>
                <Li>(Incluye 2 ingredientes)</Li>
                <li>Pepperoni</li>
                <li>Jamón</li>
                <li>Queso Manchego</li>
                <li>Piña</li>
                <li>Champiñones</li>
                <li>Fajitas de pollo <br></br>a la BBQ</li>
                <li>Philadelphia</li>
                <li>Tocino</li>
                <li>Salsa de Tomate</li>
                <Li>(Ingredientes extra $5)</Li>
            </Ul>
        </Rectangulo>
    )
}

export default salado
