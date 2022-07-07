import styled from "styled-components";

let Baner=styled.div`
        
        width: 100%;
        height:15%;
        padding: 20px 20px 10rem 20px ;
        background:var(--banner-background);
        margin-top: 3%;    

`;

let MainPage=styled.div`

        padding: 20px 0px  ;
        display: flex;
        width: 100%;

`;
let LeftBaner=styled.div`
        display: flex;
        width:50%;
`;
let DivRank=styled.div`
        width:30%;
`;
let GreenBox=styled.div`
        width: 58px;
        height: 90px;
        padding: 0px;
        text-align: center;
        background-color:var(--button_light_primary) ;
        border-radius: 0px 0px 12px 12px;
        position: relative;  
        &::before{
                content: "";
                width: calc(100% + 20px);
                height: 10px;
                background: var(--button_light_primary) ;
                left: -10px; 
                top: 0px;
                border-radius: 8px;
                position: absolute; 


        }
        & h1{
                margin: 0px;
                padding: 16px 0px 12px 0px;
                font-size: 32px;
                color:#fff;
        }
        & p{
                margin: 0px;
                padding: 0px;
                font-size: 10px;
                color:#fff;     
        }


`;



export { Baner,MainPage,LeftBaner,DivRank,GreenBox};
