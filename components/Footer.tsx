
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-900/50 border-t border-slate-800 mt-12">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-bold text-cyan-400 mb-3">Resinex Digital Catalog</h3>
                        <p className="text-slate-400 text-sm">Empowering customers and dealers across Uttar Pradesh with future-ready digital innovation.</p>
                         <p className="text-slate-500 text-xs mt-4">&copy; 2025 Resinex. All Rights Reserved.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-slate-200 mb-3">Guarantee & Warranty Disclaimer</h3>
                        <ul className="list-disc list-inside text-slate-400 text-sm space-y-2">
                            <li>Products with a 10-year guarantee will have laser engraving.</li>
                            <li>Exchanged tanks with laser engraving will void the guarantee.</li>
                            <li>No warranty/guarantee is provided on Lids or for forceful breakage of tanks.</li>
                            <li>Guarantee conditions may vary. Please confirm with the dealer upon purchase.</li>
                        </ul>
                    </div>
                    <div>
                         <h3 className="text-lg font-bold text-slate-200 mb-3">Important Notices</h3>
                         <ul className="list-disc list-inside text-slate-400 text-sm space-y-2">
                            <li>Prices shown are indicative (₹/Ltr, inclusive of GST) and subject to change.</li>
                            <li>No schemes/offers are applicable on 200, 300 & 5000 Ltr tanks.</li>
                            <li>For distributors: Min. order 10,000 ltrs. below 100 kms. Freight conditions apply.</li>
                         </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
