import React from 'react'
import ProductCard from '../components/ProductCard';
import products from '../data/products';
import { Product } from '../types';

const ShirtsPage: React.FC = () => {
  return (
    <div>
      <h6 className='text-center m-5'>Shirts Collection</h6>
      <div className="flex flex-wrap justify-center gap-4 p-4">
            {products.map((product: Product) => (
                <ProductCard key={product.id} product={product} />
            ))}
      </div>
    </div>
  )
}

export default ShirtsPage
