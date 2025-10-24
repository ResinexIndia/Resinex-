
import React from 'react';
import { User } from '../types';

interface HeaderProps {
    title?: string;
    subtitle?: string;
    user?: User | null;
    onBack?: () => void;
    onLogout?: () => void;
}

const Header: React.FC<HeaderProps> = ({ title = "Resinex Water Tank Catalog", subtitle = "Premium Digital Catalog for Uttar Pradesh", user, onBack, onLogout }) => {
    return (
        <header className="bg-gradient-to-r from-slate-800 to-slate-900 shadow-lg sticky top-0 z-40">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center gap-4">
                    {onBack && (
                         <button onClick={onBack} className="text-slate-300 hover:text-white transition-colors p-2 rounded-full bg-slate-700/50 hover:bg-slate-700">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                         </button>
                    )}
                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                            {title}
                        </h1>
                        <p className="text-xs text-slate-400 mt-1">{subtitle}</p>
                    </div>
                </div>
                 {user && (
                    <div className="flex items-center gap-3">
                        <div className="text-right">
                            <p className="font-semibold text-white">{user.name}</p>
                            <p className="text-xs text-cyan-400">{user.role}</p>
                        </div>
                         <button onClick={onLogout} className="text-slate-300 hover:text-white transition-colors p-2 rounded-full bg-red-500/20 hover:bg-red-500/40" title="Logout">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
                            </svg>
                         </button>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
