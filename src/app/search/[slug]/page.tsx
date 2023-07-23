//! Note: page not needed for this project, but will be used for future development

// 'use client';
// import { Product } from '../../../../types';
// import React, { useState } from 'react';
// import { productJson } from '../page';

// async function fetchProductInfo(params: any) {

//   console.log(params)

//   const productInfo = await productJson?.find((p: Product) => p.index === params.slug);

//   return productInfo;
// }

// const Page =  ( params : string) => {

//   const [loading, setLoading] = useState(false);
//   setLoading(true);

//   const productInfo:Product = fetchProductInfo(params);

//   if (productInfo){
//     setLoading(false);
//   }

//   console.log('params: ');
//   const {index, productTitle, productHref, productImgLink} = productInfo;

//   if (loading) {
//     return <div>Loading...</div>;
//   }
//   return (
// <>

//   <div>Product Detail: {index}</div>
//   <div>Product Detail: {productTitle}</div>
//   <div>Product Detail: {productHref}</div>
//   <div>Product Detail: {productImgLink}</div>

// </>

//   );
// };
// export default Page;
