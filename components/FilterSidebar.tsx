
import React from 'react';
import { FilterState, Quality, Technology } from '../types';
import { ALL_PRODUCTS } from '../constants';

interface FilterSidebarProps {
    filters: FilterState;
    setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ filters, setFilters }) => {

    const allQualities = [...new Set(ALL_PRODUCTS.map(p => p.quality))] as Quality[];
    const allTechnologies = [...new Set(ALL_PRODUCTS.map(p => p.technology))] as Technology[];
    const allLayers = [...new Set(ALL_PRODUCTS.map(p => p.layers).filter(l => l !== null))] as number[];
    const allColors = [...new Set(ALL_PRODUCTS.flatMap(p => p.colors))];

    const handleCheckboxChange = <K extends keyof FilterState,>(
        field: K,
        value: FilterState[K][number]
    ) => {
        setFilters(prev => {
            const currentValues = prev[field] as typeof value[];
            const newValues = currentValues.includes(value)
                ? currentValues.filter(v => v !== value)
                : [...currentValues, value];
            return { ...prev, [field]: newValues };
        });
    };
    
    const handleRangeChange = (field: 'capacity' | 'price', value: [number, number]) => {
        setFilters(prev => ({...prev, [field]: value}));
    };
    
    return (
        <aside className="lg:w-1/4 xl:w-1/5 bg-slate-800/50 p-6 rounded-lg shadow-xl border border-slate-700 self-start">
            <h2 className="text-2xl font-bold mb-6 text-cyan-300 border-b-2 border-slate-600 pb-2">Filters</h2>

            <div className="mb-6">
                <label htmlFor="search" className="block text-sm font-medium text-slate-300 mb-2">Search Product</label>
                <input
                    type="text"
                    id="search"
                    placeholder="e.g., Super Star"
                    value={filters.searchTerm}
                    onChange={e => setFilters(prev => ({ ...prev, searchTerm: e.target.value }))}
                    className="w-full bg-slate-700 border border-slate-600 rounded-md py-2 px-3 text-white placeholder-slate-400 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition"
                />
            </div>
            
            <FilterSection title="Quality">
                {allQualities.map(q => (
                    <Checkbox key={q} label={q} checked={filters.quality.includes(q)} onChange={() => handleCheckboxChange('quality', q)} />
                ))}
            </FilterSection>

            <FilterSection title="Technology">
                 {allTechnologies.map(t => (
                    <Checkbox key={t} label={t} checked={filters.technology.includes(t)} onChange={() => handleCheckboxChange('technology', t)} />
                ))}
            </FilterSection>

            <FilterSection title="Layers">
                 {allLayers.sort((a,b) => a-b).map(l => (
                    <Checkbox key={l} label={`${l} Layer`} checked={filters.layers.includes(l)} onChange={() => handleCheckboxChange('layers', l)} />
                ))}
            </FilterSection>

             <FilterSection title="Color">
                 {allColors.map(c => (
                    <Checkbox key={c} label={c} checked={filters.colors.includes(c)} onChange={() => handleCheckboxChange('colors', c)} />
                ))}
            </FilterSection>

            <div className="mb-6">
                 <h3 className="text-lg font-semibold text-slate-200 mb-3">Capacity (Liters)</h3>
                 <div className="text-center text-cyan-400 font-mono mb-2">{filters.capacity[0]}L - {filters.capacity[1]}L</div>
                 <input
                    type="range"
                    min="200"
                    max="5000"
                    step="100"
                    value={filters.capacity[1]}
                    onChange={(e) => handleRangeChange('capacity', [filters.capacity[0], Number(e.target.value)])}
                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
                 />
            </div>
            
             <div className="mb-6">
                 <h3 className="text-lg font-semibold text-slate-200 mb-3">Price (₹/Ltr)</h3>
                 <div className="text-center text-cyan-400 font-mono mb-2">₹{filters.price[0].toFixed(2)} - ₹{filters.price[1].toFixed(2)}</div>
                 <input
                    type="range"
                    min="3"
                    max="8"
                    step="0.25"
                    value={filters.price[1]}
                    onChange={(e) => handleRangeChange('price', [filters.price[0], Number(e.target.value)])}
                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
                 />
            </div>

        </aside>
    );
};

const FilterSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="mb-6">
        <h3 className="text-lg font-semibold text-slate-200 mb-3">{title}</h3>
        <div className="space-y-2">{children}</div>
    </div>
);

const Checkbox: React.FC<{ label: string; checked: boolean; onChange: () => void }> = ({ label, checked, onChange }) => (
    <label className="flex items-center space-x-3 cursor-pointer text-slate-300 hover:text-white">
        <input
            type="checkbox"
            checked={checked}
            onChange={onChange}
            className="h-4 w-4 rounded bg-slate-700 border-slate-500 text-cyan-600 focus:ring-cyan-500"
        />
        <span>{label}</span>
    </label>
);

export default FilterSidebar;
