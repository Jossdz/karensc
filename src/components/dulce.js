import React from 'react'
import styled from 'styled-components'

const Rectangulo = styled.div`
    border-radius: 6px;
  width: 90%;
  height: 700px;
  box-shadow: 0 0 14px 0 rgba(237, 24, 144, 0.6);
  border: solid 3px #ed1890;
  margin-bottom: 30px;
`
const P = styled.div`
    width: 300px;
  height: 50px;
  text-shadow: 0 3px 6px rgba(237, 24, 144, 0.6);
  font-family: Roboto, Helvetica, sans-serif;
  font-size: 40px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.21;
  letter-spacing: normal;
  text-align: center;
  color: #ed1890;
`
const Ul = styled.div`
  width: 310px;
  height: 50px;
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

  const Li = styled.div`
  width: 300px;
  height: 50px;
  text-shadow: 0 3px 6px rgba(237, 24, 144, 0.6);
  font-family: Roboto, Helvetica, sans-serif;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.21;
  letter-spacing: normal;
  text-align: center;
  color: #ed1890;
  `


const dulce = () => {
    return (
        <Rectangulo>
            <Ul>
                <P>Dulce $35</P>
                <Li>(Incluye 2 ingredientes)</Li>
                <li>Chispas</li>
                <li>Plátano</li>
                <li>Philadelphia</li>
                <li>Fresa</li>
                <li>Lechera</li>
                <li>Mermelada de zarzamora</li>
                <li>Cajeta</li>
                <li>Nuez</li>
                <li>Nutella</li>
                <li>Durazno</li>
                <li>Manzana</li>
                <li>Helado</li>
                <Li>(Ingredientes extra $5)</Li>
            </Ul>
        </Rectangulo>
    )
}

export default dulce



