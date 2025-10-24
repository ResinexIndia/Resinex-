
import React, { useState } from 'react';
import { Product } from '../types';
import { UTTAR_PRADESH_DISTRICTS } from '../constants';

interface EnquiryFormModalProps {
    product: Product;
    onClose: () => void;
}

const EnquiryFormModal: React.FC<EnquiryFormModalProps> = ({ product, onClose }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [district, setDistrict] = useState(UTTAR_PRADESH_DISTRICTS[0]);
    const [isSubmitted, setIsSubmitted] = useState(false);
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the data to a backend or API
        console.log({
            productName: product.name,
            productId: product.id,
            customerName: name,
            customerPhone: phone,
            customerDistrict: district,
        });
        setIsSubmitted(true);
    };

    return (
         <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={onClose}>
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl shadow-2xl border border-slate-700 w-full max-w-md" onClick={e => e.stopPropagation()}>
                <div className="p-8">
                     <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-white transition">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                    {isSubmitted ? (
                        <div className="text-center">
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-400 mx-auto mb-4" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <h2 className="text-2xl font-bold text-white mb-2">Enquiry Sent!</h2>
                            <p className="text-slate-300 mb-6">Thank you for your interest. Our team will contact you shortly.</p>
                            <button onClick={onClose} className="w-full bg-slate-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-slate-700 transition duration-300">
                                Close
                            </button>
                        </div>
                    ) : (
                        <>
                        <h2 className="text-2xl font-bold text-white mb-2">Enquire about:</h2>
                        <p className="text-lg text-cyan-400 font-semibold mb-6">{product.name}</p>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">Full Name</label>
                                <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} required className="w-full bg-slate-700 border border-slate-600 rounded-md py-2 px-3 text-white placeholder-slate-400 focus:ring-2 focus:ring-cyan-500" />
                            </div>
                             <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-1">Phone Number</label>
                                <input type="tel" id="phone" value={phone} onChange={e => setPhone(e.target.value)} required pattern="[0-9]{10}" title="Please enter a 10-digit phone number" className="w-full bg-slate-700 border border-slate-600 rounded-md py-2 px-3 text-white placeholder-slate-400 focus:ring-2 focus:ring-cyan-500" />
                            </div>
                             <div>
                                <label htmlFor="district" className="block text-sm font-medium text-slate-300 mb-1">District (Uttar Pradesh)</label>
                                <select id="district" value={district} onChange={e => setDistrict(e.target.value)} required className="w-full bg-slate-700 border border-slate-600 rounded-md py-2 px-3 text-white focus:ring-2 focus:ring-cyan-500">
                                    {UTTAR_PRADESH_DISTRICTS.map(d => <option key={d} value={d}>{d}</option>)}
                                </select>
                            </div>
                            <button type="submit" className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition duration-300 shadow-lg mt-2">
                                Submit Enquiry
                            </button>
                        </form>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EnquiryFormModal;
