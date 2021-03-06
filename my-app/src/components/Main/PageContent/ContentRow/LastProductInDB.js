import { useEffect, useState } from 'react';

function LastProductInDB() {
    const [lastImage, setLastImages] = useState({});
	useEffect(() => {
		fetch('http://localhost:3000/api/products/lastProduct')
			.then((res) => res.json())
			.then((res) => (setLastImages(res.data.product[0].Images[0].file_name )));
	}, []);

    const [lastId, setLastId] = useState({});
	useEffect(() => {
		fetch('http://localhost:3000/api/products/lastProduct')
			.then((res) => res.json())
			.then((res) => (setLastId(res.data.product[0].id)));
            
	}, []);



    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">Last product in Data Dase</h6>
                </div>
                <div className="card-body">
                    <div className="text-center">
                    <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" styles="width: 25rem" src={"http://localhost:3000/images/products/" + lastImage } alt="image product" />
                    </div>
                    <a target="_blank" rel="nofollow" href={"http://localhost:3000/products/"+ lastId}>View product detail</a> 
                </div>
            </div>
        </div>
    );
}


export default LastProductInDB;
 