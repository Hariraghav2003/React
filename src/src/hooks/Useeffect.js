import React, { useEffect, useState } from 'react';

function Useeffect() {
  // State to store the products
  const [productList, setProductList] = useState([]);
  const [loading,setLoading] = useState(true);
  // const[error,setError]=useState();
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();
        setProductList(products); // Update the state with fetched data
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(true); 
        // setError(true); // Set error state to true when fetching data fails
      }
    };
    fetchdata();
  }, []); // Empty dependency array ensures this runs only once
  if(loading){
    return <h2>Loading...</h2> // To Show loading message while fetching data

  }
  
  return (
    <div>
      {productList.map((product) => (
        <div key={product.id}>  
          <h3>{product.title}</h3>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Useeffect;
