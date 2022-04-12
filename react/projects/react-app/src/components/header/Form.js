import { useState } from 'react'
import { FormSearch, SearchInput, Button, SelectOption, Container } from './style'

const Form = ({result}) => {

  const [searchText, setSearchText] = useState('eggs')
  const [optionText, setOptionText] = useState('breakfast')


  const handleClick = (e) => {

    e.preventDefault()
    result({searchText, optionText})
    console.log(searchText, optionText);
    
    
  
  }
  return (
    <div>
        <Container>
        <FormSearch>
            <SearchInput type='text' placeholder='Search' onChange={(e)=>(setSearchText(e.target.value))}/>
            <Button type='submit' onClick={handleClick}>Search</Button>
            <SelectOption onChange={(e)=>(setOptionText(e.target.value))}>
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
                <option value="Snack">Snack</option>
                <option value="TeaTime">TeaTime</option>
            </SelectOption>
        </FormSearch>
        </Container>
    </div>
  )
}

export default Form