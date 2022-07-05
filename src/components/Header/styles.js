import styled from "styled-components";

let HeaderHead=styled.div`
        width: 100%;
        height:15%;
        padding: 20px 20px 10rem 20px ;
        background:var(--banner-background);
        margin-top: 3%;    
`;
 
let HeaderColumn=styled.div`
        width: auto;
        height: 30%;
        padding: 20px 16px;
        color:var( --text-color-dark);
        & .value{
                font-size:var(--font-number) ;
                padding: 2px 12px;
                text-align: center;    
        }

        & .lable{
                font-size:var(--font-text) ;
                padding: 4px 12px ;
                text-transform:uppercase;
                font-weight: 700px;
                text-align: center;
        }

`;

export {HeaderHead,HeaderColumn};

