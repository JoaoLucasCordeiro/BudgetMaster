import styled from "styled-components";

export const Container = styled.div`

max-width: 1120px;
margin: 20px auto;
width: 98%;
background-color: #FFF;
box-shadow: 5px 5px 10px #ccc;
border-radius: 5px;
display: flex;
justify-content: space-around;
padding: 15px 0;
gap: 0.7rem;


@media (max-width: 750px) {
    display: grid;
}
`
export const InputContent = styled.div`
display: flex;
flex-direction: column;

`

export const Label = styled.label`
cursor: pointer;
`


export const Input = styled.input`

outline: none;
border-radius: 5px;
padding: 5px 10px;
font-size: 15px;
border: 1px solid #ccc;
transition: all .2s ease-in-out;

:focus{
    border:  1px solid #FF7C3B;
}

`

export const RadioGroup = styled.div`
display: flex;
align-items: center;

input {
 margin-left: 20px;
 margin-right: 5px;
 accent-color: black;
 margin-top: 0;
}
`

export const button = styled.button`

padding: 3px 7px;
border: none;
border-radius: 1.35rem;
cursor: pointer;
color: #FFF;
background: rgb(252,148,97);
background: linear-gradient(90deg, rgba(252,148,97,1) 0%, rgba(255,124,59,1) 49%, rgba(255,85,0,1) 100%);
font-size: 1rem;
font-weight: bold;
transition: all .2s ease-in-out;

`


