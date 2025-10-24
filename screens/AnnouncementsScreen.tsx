
import React from 'react';
import Header from '../components/Header';

interface AnnouncementsScreenProps {
    onBack: () => void;
}

const AnnouncementsScreen: React.FC<AnnouncementsScreenProps> = ({ onBack }) => {
    return (
        <div>
            <Header title="Announcements" onBack={onBack} />
            <main className="container mx-auto px-4 py-8">
                 <div className="flex items-center justify-center h-96 bg-slate-800/50 rounded-lg border-2 border-dashed border-slate-700">
                    <div className="text-center">
                        <h3 className="mt-2 text-2xl font-medium text-white">Feature Coming Soon</h3>
                        <p className="mt-1 text-lg text-slate-400">Stay tuned for the latest news and updates from Resinex.</p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AnnouncementsScreen;
