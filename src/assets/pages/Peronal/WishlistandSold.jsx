import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {Link, useParams} from "react-router-dom";
import Search from '../../components/PersonalPage/Search';


function WishlistandSold() {

    const [cuisin, setCuisine] = useState([]);
    let params = useParams();

    const getCuisine = async (name) => {

        const data = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=9148a26020a94a8587608d6c4f9d21dc&cuisine=${name}`);
        const recipes = await data.json();
        console.log(data);
        setCuisine(recipes.results);
};

    useEffect(() => {
        getCuisine(params.type);
        console.log(params);
    }, [params.type])

  return (
    <DetailWrapper>
      <Search/>
    
 
    <Grid>
        
        {/* {Cuisine.map((item) => {
          return(
            <Card key={item.id}>
              <img src={item.image} alt=""/>
              <h4>{item.title}</h4>

            </Card>
          )
        })} */}
        <Card>
          <img src='https://target.scene7.com/is/image/Target/GUEST_5a53ed62-acbf-4fbd-9ef3-c7830a8febca?wid=2400&hei=2400&fmt=pjpeg'/>
          <h4>name1</h4>

        </Card>
        <Card>
          <img src='https://target.scene7.com/is/image/Target/GUEST_bfcab585-7814-470b-8432-604efa4e5959?wid=2400&hei=2400&fmt=pjpeg'/>
          <h4>name1</h4>

        </Card>
        <Card>
          <img src='https://target.scene7.com/is/image/Target/GUEST_5a53ed62-acbf-4fbd-9ef3-c7830a8febca?wid=2400&hei=2400&fmt=pjpeg'/>
          <h4>name1</h4>

        </Card>
        <Card>
          <img src='https://target.scene7.com/is/image/Target/GUEST_bfcab585-7814-470b-8432-604efa4e5959?wid=2400&hei=2400&fmt=pjpeg'/>
          <h4>name1</h4>

        </Card>
        <Card>
          <img src='https://target.scene7.com/is/image/Target/GUEST_5a53ed62-acbf-4fbd-9ef3-c7830a8febca?wid=2400&hei=2400&fmt=pjpeg'/>
          <h4>name1</h4>

        </Card>
        <Card>
          <img src='https://target.scene7.com/is/image/Target/GUEST_bfcab585-7814-470b-8432-604efa4e5959?wid=2400&hei=2400&fmt=pjpeg'/>
          <h4>name1</h4>

        </Card>
        
        
       
    </Grid>
    </DetailWrapper>
  )
}
const DetailWrapper = styled.div`
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
    padding: 0.5rem;
  }
`;


export default WishlistandSold;