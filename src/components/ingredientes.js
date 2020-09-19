import React from 'react'
import styled from 'styled-components'

const Rectangulo = styled.div`
  display: flex;
  flex-direction: column;
  width: 327px;
  border-radius: 6px;
  width: 90%;
 
  box-shadow: 0 0 14px 0 rgba(242, 235, 25, 0.6);
  border: solid 3px yellow;
  margin-bottom: 30px;
  h3{
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
  }
`

const Lu = styled.li`
 
  font-family: Roboto, Helvetica, sans-serif;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  list-style: none;
  `
const ingredientes = () => {
    return (
       <Rectangulo>
                <h3>Ingredientes Karen’s <br></br> $8 c/u</h3>
             <ul style={{margin: 0, padding: 0}} >
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
