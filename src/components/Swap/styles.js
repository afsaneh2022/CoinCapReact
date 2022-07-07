import styled from "styled-components";

let MainBox=styled.div`
        width: 40%;
        background-color: green;
        margin: auto;
        margin-top: 96px;
        margin-bottom: 48px;
        padding-top:24px;
        height: 400px;
        border-radius: 24px;
`;
 
let SwapBoxRow=styled.div`
        width: 90%;
        margin:auto;
        height: 15%;
        text-align: center;
        display: flex;
        justify-content: space-between;
        background-color: red;
        align-content: center;
        padding-top: 0px;
         & h2{
                text-align: center;
                margin-top: 0px;
                padding: 0px 20px;
         }
         & span{
             
                text-align: center;
                margin-top: 0px;
                padding: 0px 20px;  
                
                & img{
                        width:32px;
                        height: 32px;
                }
         }

`;


export {MainBox,SwapBoxRow};