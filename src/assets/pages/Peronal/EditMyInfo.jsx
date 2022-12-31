import React from 'react'
import styled from 'styled-components'


function EditMyInfo() {

  const handleSubmit = (e) => {
    e.preventDefault();  
};
  //handle change fuc
  return (
    <FormStyle onSubmit={handleSubmit}>
        <div>
          <label>Edit My Information</label>
          <input
            name="username"
            type="text"
            placeholder='Username'
          />
          <input
            name="password"
            type="password"
            placeholder='Password'
          />
          <input
            name="phone"
            type="number"
            placeholder='Phone'
          />

          <input
            name="email"
            placeholder='E-mail'
          />
          <textarea 
          placeholder="Shipping Address"
          />

        </div>
        <button type='submit'>Save</button>
    </FormStyle>
    
  )
}

const FormStyle = styled.form`

label{
    display: block;
    text-align: center;
    font-size: 20px;
    margin: 0 0 2vh 0;
}

input,textarea{
  display: block;
  width: 100%;
  padding: .5rem .8rem .5rem .8rem;
  margin: .9vw 0 ;
  border:0;
  border-radius: 5px;
  font-size: 18px;
  background:#F8F8F8;
}
textarea{
  height: 15vh;
}

button {
  padding: 0.75rem 1rem;
  color: white;
  background:#4B9CD3;
  border: none;
  margin-right: 1rem;
  font-weight:600;
  border-radius: 7px;

}


`

export default EditMyInfo