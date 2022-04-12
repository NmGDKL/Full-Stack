import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: row;
justify-content: center;
align-items: center;
background-color: rgb(66, 167, 191);

`
export const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 350px;
height: 350px;
margin: 1rem;
background-color: #e1f0dd;
border-radius: 5px;
:hover{
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
}
`
export const Image = styled.img`
width: 150px;
height: 150px;
margin-bottom: 2rem;
border-radius: 15px;
`
export const ImageHome = styled.img`
display: block;
margin: 0 auto;

`
export const HeadText = styled.h3`
width: 70%;
text-align: center;
`
export const Button = styled.button`
border: none;
padding: 0.5rem;
background-color: grey;
font-size: 1.3rem;
color: #e1f0dd;
cursor: pointer;
border-radius: 3px;
`