
import React, { useState } from 'react';
import { User, UserRole } from '../types';

interface LoginScreenProps {
    onLogin: (user: User) => void;
}

const ROLES: UserRole[] = ['Guest', 'Retailer', 'Dealer', 'Distributor', 'Plumber'];

const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
    const [name, setName] = useState('');
    const [role, setRole] = useState<UserRole>('Guest');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name.trim()) {
            onLogin({ name, role });
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-slate-900 p-4">
            <div className="w-full max-w-md mx-auto bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl shadow-2xl border border-slate-700 p-8">
                <div className="text-center mb-8">
                     <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                        Sign In or Continue
                    </h2>
                    <p className="text-slate-400 mt-2">Select your role to get started.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Your Name</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            placeholder="e.g., John Doe"
                            className="w-full bg-slate-700 border border-slate-600 rounded-md py-2 px-3 text-white placeholder-slate-400 focus:ring-2 focus:ring-cyan-500 transition"
                        />
                    </div>
                    <div>
                        <label htmlFor="role" className="block text-sm font-medium text-slate-300 mb-2">I am a...</label>
                        <select
                            id="role"
                            value={role}
                            onChange={(e) => setRole(e.target.value as UserRole)}
                            className="w-full bg-slate-700 border border-slate-600 rounded-md py-2 px-3 text-white focus:ring-2 focus:ring-cyan-500 transition"
                        >
                            {ROLES.map(r => <option key={r} value={r}>{r}</option>)}
                        </select>
                    </div>
                    <button 
                        type="submit"
                        className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition duration-300 shadow-lg"
                    >
                        Proceed
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginScreen;
