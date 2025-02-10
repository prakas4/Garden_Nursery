import React, { useContext } from 'react'
import productCards from '../../../product.json'
import { ProductContext } from '../Context';
import Header from '../Header';

const Products = () => {
  const {CartItems,addToCart} = useContext(ProductContext)
  const groupedItem = [];
  for (let i = 0; i < productCards.length; i += 4) {
    groupedItem.push(productCards.slice(i, i + 4));
  }
  return (
   <>
   <Header />
   <div className="container my-5">
        {groupedItem.map((item3,index) => 
       
          <div className="d-flex justify-content-center row g-3" key={index}>

            {item3.map((item) =>
            <div className="col-md-3 p-3" key={item.id}>
            <div className="card p-3">
              <div className="position-relative">
                <img
                  src={item.image}
                  className="card-img-top"
                  alt="Product Image"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title price">
                ₹{item.originalPrice}
                </h5>
                <p className="card-text">
                  {item.name}
                </p>
                <p className="mb-1">
                  <i className="bi bi-star-fill text-warning" />
                  <i className="bi bi-star-fill text-warning" />
                  <i className="bi bi-star-fill text-warning" /> {item.reviewes}
                </p>
                <p className="text-muted">{item.offer}</p>
                <button className="btn add-to-cart-btn w-100" onClick={()=> addToCart(item)}>
                  Add to cart
                </button>
              </div>
            </div>
          </div>)}
          </div>
        )}
    
</div>

   </>
  )
}

export default Products