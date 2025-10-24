
import React from 'react';

interface WelcomeScreenProps {
    onNavigate: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onNavigate }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 to-black p-4">
            <div className="text-center">
                <div className="mb-8 animate-fade-in-down">
                    {/* Placeholder for a logo */}
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full mx-auto flex items-center justify-center shadow-2xl">
                        <h1 className="text-white text-4xl font-bold">R</h1>
                    </div>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-3 animate-fade-in">
                    Welcome to Resinex
                </h2>
                <p className="text-slate-300 text-lg mb-12 max-w-xl mx-auto animate-fade-in-up">
                    The premium digital catalog for high-quality water tanks in Uttar Pradesh. Built for dealers, retailers, and customers.
                </p>
                <button 
                    onClick={onNavigate}
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:from-cyan-600 hover:to-blue-700 transition duration-300 shadow-lg transform hover:scale-105 animate-bounce"
                >
                    Get Started
                </button>
            </div>
        </div>
    );
};

export default WelcomeScreen;
