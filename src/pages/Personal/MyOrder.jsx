import React from 'react'
import styled from 'styled-components'
import Search from '../../components/PersonalPage/Search'


function MyOrder() {
  return (
    <OrderWrapper>
        <Search/>
        <Grid>
            <Card>
            <img src='https://target.scene7.com/is/image/Target/GUEST_5a53ed62-acbf-4fbd-9ef3-c7830a8febca?wid=2400&hei=2400&fmt=pjpeg'/>
            <h4>19.9$</h4>
            <h4>order12345678</h4>
            <h4>01/01/2022</h4>        
            </Card>

            <Card>
            <img src='https://target.scene7.com/is/image/Target/GUEST_5a53ed62-acbf-4fbd-9ef3-c7830a8febca?wid=2400&hei=2400&fmt=pjpeg'/>
            <h4>19.9$</h4>
            <h4>order12345678</h4>
            <h4>01/01/2022</h4>        
            </Card>
            <Card>
            <img src='https://target.scene7.com/is/image/Target/GUEST_5a53ed62-acbf-4fbd-9ef3-c7830a8febca?wid=2400&hei=2400&fmt=pjpeg'/>
            <h4>19.9$</h4>
            <h4>order12345678</h4>
            <h4>01/01/2022</h4>        
            </Card>
            <Card>
            <img src='https://target.scene7.com/is/image/Target/GUEST_5a53ed62-acbf-4fbd-9ef3-c7830a8febca?wid=2400&hei=2400&fmt=pjpeg'/>
            <h4>19.9$</h4>
            <h4>order12345678</h4>
            <h4>01/01/2022</h4>        
            </Card>
            

        </Grid>

    </OrderWrapper>
  )
}

const OrderWrapper = styled.div`
margin: 2rem;
`;

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));

grid-gap: 2rem;
margin: 2rem;
`;



const Card = styled.div`

  img{
    
    width: 100%;
    border-radius: 0.5rem;
  }

  a{
    text-decoration: none;
  }
 
  h4{
    text-align: center;
    font-size:15px;
  }
`;

export default MyOrder