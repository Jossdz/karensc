import React from 'react'
import styled from 'styled-components'
const Rectangulo = styled.div`
border-radius: 6px;
  width: 90%;
  padding: 6px 0;
  height: 369px;
  box-shadow: 0 0 14px 0 rgba(246, 146, 34, 0.6);
  border: solid 3px #f69222;
  margin-bottom: 30px;
`
const  Title= styled.div`
 width: 310px;
  height: 54px;
  text-shadow: 0 3px 6px rgba(246, 146, 34, 0.6);
  font-family: Roboto, Helvetica, sans-serif;
  font-size: 32px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.21;
  letter-spacing: normal;
  text-align: center;
  color: #f69222;
`
const Ul = styled.div`
width: 300px;
  height: 90px;
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
const malteadas = () => {
    return (
    <Rectangulo>
                <Ul>
                <Title>Malteadas $38</Title>
                <li>Chocolate</li>
                <li>Mazapán</li>
                <li>Vainilla</li>
                <li>Cajeta</li>
                <li>Fresa</li>
                <li>Oreo</li>
                <li>Choco chips</li>
                </Ul>
        </Rectangulo>
    )
}

export default malteadas
