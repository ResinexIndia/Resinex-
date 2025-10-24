
import React, { useState } from 'react';
import { Product, User } from './types';
import { BLOW_MOULD_TANKS, ROTO_MOULD_TANKS } from './constants';

import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import ShopScreen from './screens/ShopScreen';
import MyOrdersScreen from './screens/MyOrdersScreen';
import LocateDealerScreen from './screens/LocateDealerScreen';
import DownloadsScreen from './screens/DownloadsScreen';
import AnnouncementsScreen from './screens/AnnouncementsScreen';
import OffersScreen from './screens/OffersScreen';

type View = 'welcome' | 'login' | 'home' | 'shop' | 'orders' | 'locate' | 'downloads' | 'announcements' | 'offers';

interface ShopState {
    products: Product[];
    title: string;
}

function App() {
    const [view, setView] = useState<View>('welcome');
    const [user, setUser] = useState<User | null>(null);
    const [shopState, setShopState] = useState<ShopState | null>(null);

    const handleLogin = (loggedInUser: User) => {
        setUser(loggedInUser);
        setView('home');
    };

    const handleLogout = () => {
        setUser(null);
        setView('login');
    };

    const navigate = (newView: View, data?: any) => {
        if (newView === 'shop') {
            const products = data.category === 'blow' ? BLOW_MOULD_TANKS : ROTO_MOULD_TANKS;
            const title = data.category === 'blow' ? 'Blow Mould Tanks' : 'Roto Mould Tanks';
            setShopState({ products, title });
        }
        setView(newView);
    };

    const renderContent = () => {
        switch (view) {
            case 'welcome':
                return <WelcomeScreen onNavigate={() => setView('login')} />;
            case 'login':
                return <LoginScreen onLogin={handleLogin} />;
            case 'home':
                return <HomeScreen user={user} onNavigate={navigate} onLogout={handleLogout} />;
            case 'shop':
                if (shopState) {
                    return <ShopScreen products={shopState.products} title={shopState.title} onBack={() => setView('home')} />;
                }
                return null; // Or some fallback
            case 'orders':
                return <MyOrdersScreen onBack={() => setView('home')} />;
            case 'locate':
                return <LocateDealerScreen onBack={() => setView('home')} />;
            case 'downloads':
                return <DownloadsScreen onBack={() => setView('home')} />;
            case 'announcements':
                return <AnnouncementsScreen onBack={() => setView('home')} />;
            case 'offers':
                return <OffersScreen onBack={() => setView('home')} />;
            default:
                return <WelcomeScreen onNavigate={() => setView('login')} />;
        }
    };
    
    return (
        <div className="min-h-screen bg-slate-900 font-sans text-gray-100">
            {renderContent()}
        </div>
    );
}

export default App;
