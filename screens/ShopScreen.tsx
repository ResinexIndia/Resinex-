
import React, { useState, useMemo } from 'react';
import { Product, FilterState } from '../types';
import Header from '../components/Header';
import FilterSidebar from '../components/FilterSidebar';
import ProductList from '../components/ProductList';
import ProductDetailModal from '../components/ProductDetailModal';
import EnquiryFormModal from '../components/EnquiryFormModal';
import Footer from '../components/Footer';

interface ShopScreenProps {
    products: Product[];
    title: string;
    onBack: () => void;
}

const ShopScreen: React.FC<ShopScreenProps> = ({ products, title, onBack }) => {
    const [filters, setFilters] = useState<FilterState>({
        searchTerm: '',
        quality: [],
        technology: [],
        layers: [],
        colors: [],
        capacity: [200, 5000],
        price: [3, 8],
    });
    
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [isEnquiryFormOpen, setIsEnquiryFormOpen] = useState(false);
    const [productToEnquire, setProductToEnquire] = useState<Product | null>(null);

    const filteredProducts = useMemo(() => {
        return products.filter(product => {
            const searchMatch = product.name.toLowerCase().includes(filters.searchTerm.toLowerCase());
            const qualityMatch = filters.quality.length === 0 || filters.quality.includes(product.quality);
            const technologyMatch = filters.technology.length === 0 || filters.technology.includes(product.technology);
            const layerMatch = filters.layers.length === 0 || (product.layers && filters.layers.includes(product.layers));
            const colorMatch = filters.colors.length === 0 || product.colors.some(color => filters.colors.includes(color));
            
            const capacityMatch = product.capacities.some(c => c >= filters.capacity[0] && c <= filters.capacity[1]);
            const priceMatch = product.pricePerLiter >= filters.price[0] && product.pricePerLiter <= filters.price[1];

            return searchMatch && qualityMatch && technologyMatch && layerMatch && colorMatch && capacityMatch && priceMatch;
        });
    }, [filters, products]);

    const handleEnquire = (product: Product) => {
        setProductToEnquire(product);
        setSelectedProduct(null);
        setIsEnquiryFormOpen(true);
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Header title={title} subtitle="Filter and find the perfect tank" onBack={onBack} />
            <main className="flex-grow container mx-auto px-4 py-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    <FilterSidebar filters={filters} setFilters={setFilters} />
                    <div className="w-full">
                        <ProductList products={filteredProducts} onProductClick={setSelectedProduct} />
                    </div>
                </div>
            </main>
            <Footer />
            {selectedProduct && (
                <ProductDetailModal
                    product={selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                    onEnquire={handleEnquire}
                />
            )}
            {isEnquiryFormOpen && productToEnquire && (
                 <EnquiryFormModal
                    product={productToEnquire}
                    onClose={() => setIsEnquiryFormOpen(false)}
                />
            )}
        </div>
    );
};

export default ShopScreen;
