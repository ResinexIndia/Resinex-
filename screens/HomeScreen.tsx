
import React from 'react';
import { User } from '../types';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface HomeScreenProps {
    user: User | null;
    onNavigate: (view: any, data?: any) => void;
    onLogout: () => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ user, onNavigate, onLogout }) => {
    
    const menuItems = [
        { title: 'Shop Blow Mould Tanks', view: 'shop', data: { category: 'blow' }, icon: '💧'},
        { title: 'Shop Roto Mould Tanks', view: 'shop', data: { category: 'roto' }, icon: '🔄'},
        { title: 'My Purchase / Orders', view: 'orders', icon: '🛒'},
        { title: 'Locate Nearby Dealer', view: 'locate', icon: '📍'},
        { title: 'Product Catalogue & Pricelist', view: 'downloads', icon: '📄'},
        { title: 'Latest Announcements', view: 'announcements', icon: '📢'},
        { title: 'Running Schemes & Offers', view: 'offers', icon: '🎉'},
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <Header user={user} onLogout={onLogout} subtitle={`Welcome, ${user?.name || 'Guest'}`} />
            <main className="flex-grow container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {menuItems.map(item => (
                        <div 
                            key={item.title}
                            onClick={() => onNavigate(item.view, item.data)}
                            className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg shadow-lg p-6 border border-slate-700 cursor-pointer transition-all duration-300 hover:shadow-cyan-500/20 hover:border-cyan-500 hover:-translate-y-1 flex flex-col items-center text-center"
                        >
                            <div className="text-4xl mb-4">{item.icon}</div>
                            <h3 className="text-lg font-bold text-white">{item.title}</h3>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default HomeScreen;
