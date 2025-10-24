
import React from 'react';
import Header from '../components/Header';

interface MyOrdersScreenProps {
    onBack: () => void;
}

const MyOrdersScreen: React.FC<MyOrdersScreenProps> = ({ onBack }) => {
    return (
        <div>
            <Header title="My Orders" onBack={onBack} />
            <main className="container mx-auto px-4 py-8">
                 <div className="flex items-center justify-center h-96 bg-slate-800/50 rounded-lg border-2 border-dashed border-slate-700">
                    <div className="text-center">
                        <h3 className="mt-2 text-2xl font-medium text-white">Feature Coming Soon</h3>
                        <p className="mt-1 text-lg text-slate-400">Your order history will be available here.</p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default MyOrdersScreen;
