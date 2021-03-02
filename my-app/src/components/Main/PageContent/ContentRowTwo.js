import React from 'react';
import LastProductInDB from './ContentRow/LastProductInDB';
import CategoriesInDB from './ContentRow/CategoriesInDB';
import ProductsList from './ContentRow/ProductsList';

function ContentRowTwo() {
	return (
		<div className="row">
			<LastProductInDB />
			<CategoriesInDB />
			<ProductsList />
		</div>
	);
}

export default ContentRowTwo;
