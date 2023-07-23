'use client';

import Image from 'next/image';
import { Product } from '../types';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { index, productTitle, productHref, productImgLink } = product;

  return (
    <div className='overflow-hidden mx-8 '>
      <div className='p-3'>
        <Link href={`${productHref}`} target='_blank'>
          <Image
            src={productImgLink || ''}
            alt={productTitle || ''}
            className='w-full h-48 object-cover '
            layout='responsive'
            quality={100}
            height={100}
            width={100}
          />
        </Link>

        <div className='p-4'>
          {/* //* link to product detail page on target.com */}
          <Link href={`${productHref}`} target='_blank'>
            <h2 className='text-lg sm:text-xl md:text-2xl text-gray-700 font-semibold mb-3 hover:text-blue-600 transition-colors duration-200  '>
              {productTitle}
            </h2>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
