import styled from "styled-components";

let TableList=styled.div`
        margin-top: -5em;
        width: 100%;
        display: flex;
        flex-direction: column;
        background-color: var(--nav-background);
        box-shadow: 1px 1px var(--shadow), -.1em 0 .1em var(--shadow);
        border-bottom-style: inset;
        border-radius: 5px 0px 0px 0px ;
`;

let TableHead=styled.div`
   
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid var(--border-color);
        
`;

let TrowAligh2=styled.a`
    width: 16%;

`;

let Asending=styled.a`
   &::after{
    content:"";
    width: 10px;
    height:10px;
    background: url(./logo/arrow_bottomdown.svg);
    margin:4px 0px 0px 10px;
   }

`;

let Trow =styled.div`
    height: 60px;
    display: flex;
    justify-content: space-between; 
    border-bottom: 1px solid var(--border-color);
    &:hoverr{
        background-color: var(--back-shadow);
    } 
   

    
`;
let LogoName=styled.div`

    width: 100%px;
    height: 100%px;
    margin: 0px;
    display: flex;
    justify-content: flex-start;
    text-decoration:underline


`;

let TrowAligh=styled.a`
    width:12% ;
    text-align: center;
    display:flex;
    justify-content: center;

`;


export {TableList,TableHead,TrowAligh2,Asending,Trow,LogoName,TrowAligh};


