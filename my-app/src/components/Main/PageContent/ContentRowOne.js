import React from 'react';
import AmountOfProductsInDB from './ContentRow/AmountOfProductsInDB'
import AmountOfUsersInDB from './ContentRow/AmountOfUsersInDB'
import AllProductsInDB from './ContentRow/AllProductsInDB'



function ContentRowOne() {
    return (
        <div className="row">
        <AmountOfProductsInDB/>
        <AllProductsInDB/>
        <AmountOfUsersInDB/>
         
  
        </div>

    );
}

export default ContentRowOne;