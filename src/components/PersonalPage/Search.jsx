import React from 'react'
import styled from 'styled-components';
import {useState} from 'react';
// import {FaSearch} from 'react-icons/fa';
import SearchIcon from '@mui/icons-material/Search';
import {useNavigate} from 'react-router-dom';
function Search() {
    const[input, setInput] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/search/' + input)
        
    };
  return (
    
    <FormStyle onSubmit={submitHandler}>
        <div>           
            <input 
                onChange={(e) => setInput(e.target.value)}
                type="text" 
                value={input}/>
                {/* <FaSearch></FaSearch> */}
                <SearchIcon />
               
        </div>
        
        
    </FormStyle>
  )
}

const FormStyle = styled.form`
margin: 0rem 15rem;


div {
    width:100%;
    position: right;
}
input{
    border: none;
    background: #F8F8F8;
    
    font-size: 1rem;
    color: white;
    padding: 0.8rem 3rem;
    border-radius: 1rem;
    outline: none;
    width: 100%;

}

svg{
    position: abolute;
    top 50%;
    left: 0%;
    transform: translate(100%, -180%);
    color: black;
}
`

export default Search