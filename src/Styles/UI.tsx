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

   color: #f3f3f3;
   background-color: #1a1a1a;
`

export const WeatherInput = styled.form`
   display: flex;
   align-items: center;
   gap: 0.5rem;

   margin-bottom:1rem;
`

export const WeatherInfos = styled.div`
   
`