import styled from "styled-components";

let MainBox=styled.div`
        width: 50%;
        background-color: var(--main-background);
        margin: auto;
        margin-top: 48px;
        height: 500px;
        border-radius: 24px;
`;
 let SwapBox=styled.div`
        
        width: 80%;
        height: 80%;
        background-color: #ffffff;
        margin:48px 32px;
        border-radius: 48px;
        color:var( --text-color-light);
        padding: 0px;
 `;
let SwapBoxRow=styled.div`
        height: 20%;
        text-align: center;
        display: flex;
        justify-content: space-between;
        background-color: #ffffff;
        
        align-content: center;

`;


export {MainBox,SwapBox,SwapBoxRow};