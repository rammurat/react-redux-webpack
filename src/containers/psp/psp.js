import React from "react";
import './psp.scss'

// load components
import Filters from '../../components/filters.js';
import ProductList from '../../components/product-list.js'

const PSP = () => {
    return (
    <div className="container">
        <div className="row">
        <div className="col-sm-12 col-md-3 col-lg-3">
            <Filters/>
        </div>
        <div className="product-list-cnt col-sm-12 col-md-9 col-lg-9">
            <ProductList />
        </div>
        </div>
    </div>
 )}

 export default PSP
