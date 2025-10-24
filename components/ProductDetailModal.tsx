import React, { useState } from 'react';
import { Product } from '../types';

interface ProductDetailModalProps {
    product: Product;
    onClose: () => void;
    onEnquire: (product: Product) => void;
}

const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, onClose, onEnquire }) => {
    const [selectedCapacity, setSelectedCapacity] = useState<number>(product.capacities[0]);
    const finalPrice = (selectedCapacity * product.pricePerLiter).toFixed(2);
    
    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 transition-opacity" onClick={onClose}>
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl shadow-2xl border border-slate-700 w-full max-w-3xl max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
                <div className="p-6 md:p-8 flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/2">
                        <img src={product.imageUrl} alt={product.name} className="w-full h-auto object-cover rounded-lg shadow-lg border border-slate-600" />
                    </div>
                    <div className="md:w-1/2 flex flex-col">
                        <div className="flex-grow">
                            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-2">{product.name}</h2>
                            <span className={`inline-block px-3 py-1 text-sm font-semibold rounded-full mb-4 ${product.quality === 'Premium' ? 'bg-yellow-500/20 text-yellow-300' : 'bg-blue-500/20 text-blue-300'}`}>
                                {product.quality} Quality
                            </span>
                            
                            <div className="space-y-3 text-slate-300">
                                <DetailRow icon="chip" label="Technology" value={product.technology} />
                                <DetailRow icon="layers" label="Layers" value={product.layers ? `${product.layers}-Layer` : 'N/A'} />
                                <DetailRow icon="color_swatch" label="Colors" value={product.colors.join(', ')} />
                                <DetailRow icon="shield_check" label="Guarantee" value={product.guarantee} />
                            </div>

                            <div className="mt-4">
                                <h4 className="font-semibold text-slate-100 mb-2">Features:</h4>
                                <ul className="list-disc list-inside text-slate-300 space-y-1">
                                    {product.features.map(f => <li key={f}>{f}</li>)}
                                </ul>
                            </div>
                             {product.notes && product.notes.length > 0 && (
                                <div className="mt-4 p-3 bg-slate-700/50 rounded-md border border-slate-600">
                                    <h4 className="font-semibold text-yellow-400 text-sm mb-1">Important Note:</h4>
                                    <ul className="list-disc list-inside text-slate-300 text-sm space-y-1">
                                      {product.notes.map(n => <li key={n}>{n}</li>)}
                                    </ul>
                                </div>
                             )}
                        </div>

                        <div className="mt-6 pt-6 border-t border-slate-700">
                             <div className="mb-4">
                                <label htmlFor="capacity" className="block text-sm font-medium text-slate-300 mb-2">Select Capacity</label>
                                <select 
                                    id="capacity"
                                    value={selectedCapacity}
                                    onChange={(e) => setSelectedCapacity(Number(e.target.value))}
                                    className="w-full bg-slate-700 border border-slate-600 rounded-md py-2 px-3 text-white focus:ring-2 focus:ring-cyan-500"
                                >
                                    {product.capacities.map(c => <option key={c} value={c}>{c} Liters</option>)}
                                </select>
                             </div>

                             <div className="flex justify-between items-center mb-4">
                                <p className="text-slate-300">Estimated Price (Inc. GST):</p>
                                <p className="text-2xl font-bold text-cyan-400">₹{finalPrice}</p>
                             </div>

                            <button onClick={() => onEnquire(product)} className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition duration-300 shadow-lg">
                                Enquire Now
                            </button>
                        </div>
                    </div>
                </div>
                <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-white transition">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </div>
        </div>
    );
};

const Icon: React.FC<{ name: string }> = ({ name }) => {
    // FIX: Replaced JSX.Element with React.ReactElement to resolve "Cannot find namespace 'JSX'" error.
    const icons: { [key: string]: React.ReactElement } = {
        chip: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 9a1 1 0 011-1h1a1 1 0 010 2H5a1 1 0 01-1-1zm11 0a1 1 0 00-1-1h-1a1 1 0 100 2h1a1 1 0 001-1zM10 16a1 1 0 01-1 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM3 5a1 1 0 011-1h1a1 1 0 110 2H4a1 1 0 01-1-1zm13 0a1 1 0 00-1-1h-1a1 1 0 100 2h1a1 1 0 001-1zM7 16a1 1 0 01-1 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm9 0a1 1 0 00-1-1h-1a1 1 0 100 2h1a1 1 0 001-1zM8 9a2 2 0 100-4 2 2 0 000 4zm4-2a2 2 0 11-4 0 2 2 0 014 0zM8 13a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>,
        layers: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v10H5V5z" /></svg>,
        color_swatch: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H4zm12 2H4v12h12V4zM6 6a2 2 0 100 4 2 2 0 000-4zm8 0a2 2 0 100 4 2 2 0 000-4zm-8 6a2 2 0 100 4 2 2 0 000-4zm8 0a2 2 0 100 4 2 2 0 000-4z" clipRule="evenodd" /></svg>,
        shield_check: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
    };
    return icons[name] || null;
};

const DetailRow: React.FC<{ icon: string; label: string; value: string }> = ({ icon, label, value }) => (
    <div className="flex items-center">
        <span className="text-cyan-400 mr-2"><Icon name={icon} /></span>
        <span className="font-semibold text-slate-100 w-24">{label}:</span>
        <span>{value}</span>
    </div>
);

export default ProductDetailModal;