import React from 'react';
import { useEffect, useState } from 'react';

function CategoriesInDB() {
	const [count, setCount] = useState({});
	useEffect(() => {
		fetch('http://localhost:3000/api/products')
			.then((res) => res.json())
			.then((res) => setCount(res.meta.countByCategory));
	}, []);

	return (
		<div className="col-lg-6 mb-4">
			<div className="card shadow mb-4">
				<div className="card-header py-3">
					<h6 className="m-0 font-weight-bold text-primary">
						Categories in Data Base
					</h6>
				</div>
				<div className="card-body">
					<div className="row">
						{Object.entries(count).map((category) => (
							<div className="col-lg-6 mb-4">
								<div className="card bg-info text-white shadow">
									<div className="card-body">
										{category[0] + ': ' + category[1]}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default CategoriesInDB;
