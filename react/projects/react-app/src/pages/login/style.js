import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Girassol', cursive;
  background-image: url(https://picsum.photos/1600/900);
  background-repeat: no-repeat;
  background-size: cover;
`;
export const FormBox = styled.div`
  width: 350px;
  height: 350px;
  border: 1px solid white;
  padding: 2rem;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgba(66, 167, 191, 0.5);
`;
export const Header = styled.h1`
  color: white;
`;

export const Image = styled.img`
  width: 30%;
  display: block;
`;

export const TextInput = styled.input`
    margin-bottom: 0.5rem;
    padding: 0.5rem 0.5rem;
    background-color: #04313d;
    border-radius: 3px;
    color: white;
    border: none;
    width: 50%;
    font-family: 'Girassol', cursive;
    ::placeholder,
    ::-webkit-input-placeholder {
    color: grey;
    font-weight: 500;
    font-family: 'Girassol', cursive;
    font-size: 1.3rem;
  }
    

`;

export const Button = styled.button`
  width: 55%;
  padding: 0.5rem 0;
  border-radius: 3px;
  background-color: #04313d;
  color: white;
  border: none;
  font-family: 'Girassol', cursive;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
`;