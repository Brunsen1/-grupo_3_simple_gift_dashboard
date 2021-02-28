import React from 'react';
import { useEffect, useState } from 'react';

function CategoriesInDB() {
	const [categories, setCategories] = useState([]);
	useEffect(() => {
		fetch('http://localhost:3000/api/categories')
			.then((res) => res.json())
			.then((data) => setCategories(data.data.categories));
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
						{categories.map((category) => (
							<div className="col-lg-6 mb-4">
								<div className="card bg-info text-white shadow">
									<div className="card-body">{category.name}</div>
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
