
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
    product: Product;
    onClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
    return (
        <div 
            onClick={onClick}
            className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg shadow-lg overflow-hidden border border-slate-700 cursor-pointer transition-all duration-300 hover:shadow-cyan-500/20 hover:border-cyan-500 hover:-translate-y-1"
        >
            <img src={product.imageUrl} alt={product.name} className="w-full h-56 object-cover" />
            <div className="p-5">
                <h3 className="text-xl font-bold text-white truncate">{product.name}</h3>
                <p className="text-sm text-cyan-400 font-semibold">{product.quality} Quality</p>

                <div className="mt-4 flex justify-between items-center">
                    <div className="text-lg font-bold text-white">
                        ₹{product.pricePerLiter.toFixed(2)}
                        <span className="text-xs font-normal text-slate-400"> / Ltr</span>
                    </div>
                    <div className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">{product.technology}</div>
                </div>

                <div className="mt-4 flex space-x-2 text-xs text-slate-300">
                    <span className="bg-slate-700 px-2 py-1 rounded-full">{product.layers ? `${product.layers}-Layer` : 'N/A'}</span>
                    <span className="bg-slate-700 px-2 py-1 rounded-full">{product.guarantee}</span>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
