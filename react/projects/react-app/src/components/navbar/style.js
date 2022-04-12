import styled from "styled-components";

export const Head = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #e1f0dd;
    padding: 0 1rem;

`;
export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 4px;
    width: 25px;
    background: #00adb5;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;
export const UnorderList = styled.ul`
 list-style: none;
 display: flex;
 align-items: center;
 justify-content: center;
 `;

 export const ElementList = styled.li`
 color: #04313d;
 margin-right: 1.5rem;
 font-size: 1.8rem;
 :hover{
     color:rgb(66, 167, 191);
     font-weight: 600;
 }
 `;
 export const Span = styled.span`
 color: black;
 `;
 
 export const HeadText = styled.h2`
  color: rgb(66, 167, 191);
  font-size: 1.8rem;
  
  `; 