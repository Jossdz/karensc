import React from 'react'
import styled from 'styled-components'

const Rectangulo = styled.div`
    
  width: 327px;
  height: 350px;
  box-shadow: 0 0 14px 0 rgba(242, 235, 25, 0.6);
  border: solid 3px yellow;
  margin-bottom: 30px;
`
const Li = styled.div`
    width: 280px;
  height: 50px;
  text-shadow: 0 3px 6px rgba(242, 235, 24, 0.6);
  font-family: Roboto, Helvetica, sans-serif;
  font-size: 28px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.21;
  letter-spacing: normal;
  text-align: center;
  color: #f2eb18;
`
const Lu = styled.div`
  width: 260px;
  height: 50px;
  font-family: Roboto, Helvetica, sans-serif;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 4;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  list-style: none
  `
const ingredientes = () => {
    return (
       <Rectangulo>
             <ul>
                <Li>Ingredientes Karen’s <br></br> $8 c/u</Li>
                <Lu>Kit-kat</Lu>
                <Lu>M&M’s</Lu>
                <Lu>Carlos V</Lu>
                <Lu>Kinder</Lu>
                <Lu>Oreo</Lu>
            </ul>  
        </Rectangulo>
    )
}

export default ingredientes
