import React from 'react';
import HomePageHeader from '../Component/HomePage/HomePageHeader';
import ProductSpecificBody from '../Component/ProductSpecific/ProductSpecificBody';

function ProductSpecificPage(value) {
  return (
    <>
      <HomePageHeader />
      <ProductSpecificBody value={ value } />
    </>
  )
}

export default ProductSpecificPage;
