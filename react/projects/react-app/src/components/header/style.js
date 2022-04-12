import styled from "styled-components";

export const MainText = styled.h1`
color: black;
text-align: center;
background-color: rgb(66, 167, 191);
margin: 0;
padding:1rem 0;
`;
 export const Container = styled.div`
 display: flex;
 justify-content: center;
 background-color: rgb(66, 167, 191);
 padding-bottom: 1rem;
 `
 export const FormSearch = styled.form`
 outline: 1px solid white;
 border-radius: 1px;
 outline-offset: 5px;
 display: flex;
 background-color: rgb(66, 167, 191);
 `;

 export const SearchInput = styled.input`
 padding: 0.4rem;
 border-radius: 3px;
 margin-right: 0.5rem;
 border: none;
 outline: none;
 font-size: 1.3rem;
 font-family: 'Girassol', cursive;
 ::placeholder{
    font-weight: 500;
    font-family: 'Girassol', cursive;
    font-size: 1.3rem;
 }
 
 `
export const Button = styled.button`
padding: 0.4rem 0.6rem;
font-weight: 500;
font-family: 'Girassol', cursive;
font-size: 1.3rem;
border-radius: 3px;
margin-right: 0.5rem;
border: none;
background-color: #e1f0dd;
cursor: pointer;
:active{
    background-color: rgb(66, 167, 191);
    border: 1px solid white;
}



`
export const SelectOption = styled.select`
padding: 0.4rem;
font-weight: 500;
font-family: 'Girassol', cursive;
font-size: 1.3rem;
border-radius: 3px;
`