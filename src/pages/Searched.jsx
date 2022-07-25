
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import styled from "styled-components";

function Searched() {
    // const [searchProducts, setSearchedProducts] = useState([]);

    // const getSearched = async (name) => {
    //     const data = await fetch(``);
    //     const products = await data.json();
    //     setSearchedProducts(products.results);
    // };
    // useEffect(() => {
    //     getSearched(params.search);
    // }, [params,search]);
  return (
    <div>Searched
    {/* <Grid>
        {searchProducts.map((item) => {
            <Card key={item.id}>
                <img src={item.image} alt=""/>
                <h4>{item.title}</h4>
            </Card>
        })}

    </Grid> */}
    </div>
  )
}

// const Grid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
//   grid-gap: 2rem;
//   margin: 2rem;
// `;

// const Card = styled.div`

//   img{
//     width: 100%;
//     border-radius: 1rem;
//   }

//   a{
//     text-decoration: none;
//   }

//   h4{
//     text-align: center;
//     padding: 0.5rem;
//   }
// `;

export default Searched;