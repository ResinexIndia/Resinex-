
export type Quality = 'Eco' | 'Premium' | 'Improved' | 'ISI Weight';
export type Technology = 'BLOW' | 'ROTO';

export interface Product {
  id: number;
  name: string;
  quality: Quality;
  technology: Technology;
  layers: number | null;
  colors: string[];
  capacities: number[];
  features: string[];
  guarantee: string;
  pricePerLiter: number;
  imageUrl: string;
  notes?: string[];
}

export interface FilterState {
    searchTerm: string;
    quality: Quality[];
    technology: Technology[];
    layers: number[];
    colors: string[];
    capacity: [number, number];
    price: [number, number];
}

export type UserRole = 'Guest' | 'Retailer' | 'Dealer' | 'Distributor' | 'Plumber';

export interface User {
    name: string;
    role: UserRole;
}
