
import React from 'react';
import { Product } from '../types';
import ProductCard from './ProductCard';

interface ProductListProps {
    products: Product[];
    onProductClick: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, onProductClick }) => {
    if (products.length === 0) {
        return (
            <div className="flex items-center justify-center h-96 bg-slate-800/50 rounded-lg border-2 border-dashed border-slate-700">
                <div className="text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <h3 className="mt-2 text-xl font-medium text-white">No Products Found</h3>
                    <p className="mt-1 text-sm text-slate-400">Try adjusting your search or filter criteria.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {products.map(product => (
                <ProductCard key={product.id} product={product} onClick={() => onProductClick(product)} />
            ))}
        </div>
    );
};

export default ProductList;
