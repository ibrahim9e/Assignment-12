import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AvailableProducts from '../AvaiableProducts/AvailableProducts';
import ProductHeader from '../ProductsHeader/ProductHeader';

const Products = () => {
    return (
        <div>
            <Navigation></Navigation>
            <ProductHeader></ProductHeader>
            <AvailableProducts></AvailableProducts>
            
        </div>
    );
};

export default Products;