import React from 'react'
import { useNavigate } from 'react-router-dom';
import MealLogin from '../../assets/meal2.svg'
import { Button, FormBox, Header, Image, TextInput, Wrapper } from './style';

const Login = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/home')
  }
  return (
    <div>
        <Wrapper>
            <FormBox>
                <Image src={MealLogin}/>
                <Header>{"<NAİM/>"} Recipe</Header>
                <TextInput placeholder='Username' type='text' required></TextInput>
                <TextInput placeholder='Password' type='password' required></TextInput>
                <Button onClick={handleClick}>LOGIN</Button>
            </FormBox>
        </Wrapper>
    </div>
  )
}

export default Login