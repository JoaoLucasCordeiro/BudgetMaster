import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: #FFF;
border-radius: 5px;
padding: 5px 15px;
width: 30%;
box-shadow: 2px 2px 8px rgba(0,0,0,0.35);

@media (max-width: 750px) {
    width: 20%;

    p {
        font-size: 12px;
    }

    span {
        font-size: 20px;
    }

    svg {
        display: none;
    }
}


`


export const Header = styled.header`

display: flex;
align-items: center;
justify-content: space-around;
width: 100%;
gap: 1rem;
margin: 1.3rem auto;

svg {
    width: 25px;
    height: 25px;
}

`

export const HeaderTitle = styled.p`
font-size: 1.4rem;
`

export const Total = styled.span`
font-size: 1.85rem;
font-weight: bold;
`