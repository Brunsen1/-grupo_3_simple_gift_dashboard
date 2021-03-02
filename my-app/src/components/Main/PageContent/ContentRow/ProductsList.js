import React from 'react';
import { useEffect, useState } from 'react';

function ProductsList() {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		fetch('http://localhost:3000/api/products')
			.then((res) => res.json())
			.then((data) => setProducts(data.data.products));
	}, []);

	return (
		<div className="col-lg-6 mb-4">
			<div className="card shadow mb-4">
				<div className="card-header py-3">
					<h6 className="m-0 font-weight-bold text-primary">
						Products in Data Base
					</h6>
				</div>
				<div className="card-body">
					<div className="row">
						{products.map((product) => (
							<a
								href={'http://localhost:3000/products/' + product.id}
								className="col-lg-6 mb-4"
								target="_blank"
							>
								<div className="card bg-info text-white shadow">
									<div className="card-body">{product.name}</div>
								</div>
							</a>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProductsList;
