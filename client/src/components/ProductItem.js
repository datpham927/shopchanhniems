import * as React from 'react';
const ProductItem = ({ product,onClick }) => {


  return (
    <a href={product?.product_link} onClick={onClick} target="_blank" className="flex flex-col w-full h-fit  px-4 py-6 hover:shadow-cart hover:rounded-md cursor-pointer" rel="noreferrer">
      <div className="flex my-2  rounded-2xl overflow-hidden">
        <img className="w-full h-full object-cover " src={product?.product_image} alt='' />
      </div>
      <span className="truncate-trailing line-clamp-2 text-sm text-[rgb(240,103,59)]">{product?.product_title}</span>
    </a>
  )
}

export default ProductItem