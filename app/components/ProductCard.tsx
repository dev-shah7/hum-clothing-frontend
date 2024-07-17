import Image from 'next/image';
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className="max-w-md bg-slate-100 shadow-md overflow-hidden w-50 md:w-1/3 m-4">
            <div className="w-full h-96 relative border-4 border-slate-100 p-2">
                <Image
                    src={product.image}
                    alt={product.title}
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div className="p-6 border-4 border-slate-100">
                <h3 className="text-2xl font-semibold text-gray-800">{product.title}</h3>
                <div className="mt-4">
                    <p className="text-gray-600">Available Sizes:</p>
                    <div className="flex space-x-2 mt-1">
                        {product.sizes.map((size, index) => (
                            <span key={index} className="px-3 py-1 bg-gray-200 text-gray-800 rounded-md">{size}</span>
                        ))}
                    </div>
                </div>
                <div className="mt-4">
                    <p className="text-gray-600">Available Colors:</p>
                    <div className="flex space-x-2 mt-1">
                        {product.colors.map((color, index) => (
                            <span
                                key={index}
                                className={`w-6 h-6 rounded-full`}
                                style={{ backgroundColor: color }}
                            ></span>
                        ))}
                    </div>
                </div>
                <div className="mt-6">
                    <span className="text-2xl font-bold text-gray-800">${product.price.toFixed(2)}</span>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
