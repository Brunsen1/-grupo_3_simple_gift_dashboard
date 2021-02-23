import React from 'react';
import ImageProduct from "../../../../images/product_dummy.svg"

function LastProductInDB() {
    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">Last product in Data Dase</h6>
                </div>
                <div className="card-body">
                    <div className="text-center">
                    <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" styles="width: 25rem" src={ ImageProduct} alt="image dummy" />
                    </div>
                    <a target="_blank" rel="nofollow" href="/">View product detail</a>
                </div>
            </div>
        </div>
    );
}


export default LastProductInDB;
 