import styled from "styled-components";

let Button=styled.a`
        padding: 11px 26px;
        border-radius: 34px;
       
        font-weight: bold;
        display: inline-flex;
        align-items: center;
        box-shadow: rgb(0 0 0 / 40%) 0px 2px 15px -3px;
        background-color: var(--button_light_primary); 
        color:var(--nav-background);
        &:hover{
            transform: translatey(-2px);
            scale: .03s;
            box-shadow: rgb(0 0 0 / 40%) 0px 2px 15px -3px;
            /* transition-timing-function: cubic-bezier(0.1, 0.7, 1.0, 0.1); */
            color:var(--nav-background);
        }

`;


export {Button};