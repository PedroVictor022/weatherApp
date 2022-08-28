import styled from "styled-components";

export const Container = styled.div`
   width: 100vw;
   height: 100vh;
   
   display: flex;
   align-items:center;
   justify-content: center;

   background-color: #222;
`

export const WeatherApp = styled.div`
   width: 380px;
   height: auto;
   
   padding: 2rem;

   display: flex;
   flex-direction: column;
   align-items:center;
   justify-content: center;
   border-radius: 2rem;

   color: #f3f3f3;
   background-color: #1a1a1a;
`

export const WeatherInput = styled.form`
   display: flex;
   align-items: center;
   gap: 0.5rem;

   input { 
      padding: 0.2rem;
      border-radius: 0.4rem;
      outline: none;
      border: none;
   }

`

export const WeatherInfos = styled.div`
   margin-top: 1rem;
   .location-name{
      font-size: 32px;
   }
   .location-region{
      font-size: 26px;
   }
   .current-temp {
      font-size: 30px;
   }
`