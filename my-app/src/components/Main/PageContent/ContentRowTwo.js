import React from 'react'
import LastProductInDB from './ContentRow/LastProductInDB'
import CategoriesInDB from './ContentRow/CategoriesInDB'

function ContentRowTwo() {
    return (
        <div className="row">
           <LastProductInDB/>
           <CategoriesInDB/>
        </div>
    );
}

export default ContentRowTwo;