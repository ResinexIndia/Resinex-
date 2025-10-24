
import React from 'react';
import Header from '../components/Header';

interface LocateDealerScreenProps {
    onBack: () => void;
}

const LocateDealerScreen: React.FC<LocateDealerScreenProps> = ({ onBack }) => {
    return (
        <div>
            <Header title="Locate a Dealer" onBack={onBack} />
            <main className="container mx-auto px-4 py-8">
                 <div className="flex items-center justify-center h-96 bg-slate-800/50 rounded-lg border-2 border-dashed border-slate-700">
                    <div className="text-center">
                        <h3 className="mt-2 text-2xl font-medium text-white">Feature Coming Soon</h3>
                        <p className="mt-1 text-lg text-slate-400">An interactive map to find dealers in U.P. will be here.</p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default LocateDealerScreen;
