import styled from "styled-components";

let NavLinks=styled.nav`
    width:100%;
    padding: 10px 0;
    position: fixed;
    top: 0;
    background-color:var(--nav-background);
    box-shadow: 10px 1px 5px var(--shadow);
      
`;
let NavRight=styled.div`
    display: flex;
    justify-content: space-between;
    width: 25%;
    align-items: center;

`;



let NavCenter=styled.div`
    width: 10%;
    height: 100%;

`;

export {NavLinks,NavRight,NavCenter};