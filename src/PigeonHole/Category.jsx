import {GiPayMoney,GiReceiveMoney} from "react-icons/gi";
import{TbJewishStar} from "react-icons/tb";
import{AiFillEdit} from "react-icons/ai";
import styled from "styled-components";
import {NavLink} from "react-router-dom";

import React from 'react';

function Category() {
  return (
    <List>
        <SLink to={'/cuisine/wishlist'}>
        
            <h4>Wishlist</h4>
            
        </SLink>
        <SLink to={'/myorder'}>
           
            <h4>Order</h4>
        </SLink>
        <SLink to={'/cuisine/sold'}>
            
            <h4>Sold</h4>
        </SLink>
        
        <SLink to={'/editmyinfo'}>
            
            <h4>Edit</h4>
        </SLink>
    </List>
  )
}

const List = styled.div`

    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
`;
const SLink = styled(NavLink)`

    diplay:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius:10%;
    margin-right: 3rem;
    text-decoration:none;
    
    
    width: 6rem;
    height: 3rem;
    cursor: pointer;
    transform: scale(0.85);

    h4{
        color: #13294B;
        font-size: 1.1rem;
        margin: 2rem 1.1rem;
    }

    

    &.active{
        h4{
            color:#4B9CD3;          
        }
    
        svg{
            color: white;
        }

    }
`
export default Category