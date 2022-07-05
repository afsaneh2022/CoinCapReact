import styled from "styled-components";

let FooterMain=styled.div`
        width: 100%;
        height:45%;
        margin-top: 2% ; 
        padding: 0px 20px 10rem 20px ;
        margin-bottom: 0px;
        background:var(--banner-background);
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: stretch;
`;

let FooterColumn=styled.div`
        width: 25%;
        height: 100px;
        padding: 2px 16px;
        color:var( --text-color-dark);
        display: flex;
        flex-direction: column;

        & a{
            color:var(--text-color-dark-a);
            &:hover{
                color:var(--text-color-dark);
            }
        }
        & h4{
            padding-bottom: 0px;
        }
        & h5{
            color:var(--text-color-dark-a);
            margin: 0px;
        }
`;
let FooterIcon=styled.div`
        display: flex;
        justify-content: flex-start;

`;


export {FooterMain,FooterColumn,FooterIcon};

  