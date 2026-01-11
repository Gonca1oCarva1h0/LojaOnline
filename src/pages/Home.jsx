import { useState, useEffect } from 'react';
import { getProducts, getCategories } from '../services/api';
import { useFetch } from '../hooks/useFetch';
import ProductCard from '../components/ProductCard';
import Sidebar from '../components/Sidebar';

export default function Home() {
    const { data: products, loading } = useFetch(getProducts);
    const [categories, setCategories] = useState([]);
    const [selectedCats, setSelectedCats] = useState([]);
    const [search, setSearch] = useState('');
    const [sortBy, setSortBy] = useState('default');

    useEffect(() => {
        getCategories().then(res => setCategories(res.data));
    }, []);

    const handleCatChange = (cat) => {
        setSelectedCats(prev => prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]);
    };

    // Lógica de Filtro e Ordenação
    const getProcessedProducts = () => {
        if (!products) return [];

        let filtered = products.filter(p => {
            const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase());
            const matchesCat = selectedCats.length === 0 || selectedCats.includes(p.category);
            return matchesSearch && matchesCat;
        });

        // Ordenação
        switch (sortBy) {
            case 'price-asc':
                return filtered.sort((a, b) => a.price - b.price);
            case 'price-desc':
                return filtered.sort((a, b) => b.price - a.price);
            case 'rating':
                return filtered.sort((a, b) => b.rating.rate - a.rating.rate);
            default:
                return filtered;
        }
    };

    const displayProducts = getProcessedProducts();

    if (loading) return <div className="container">A carregar produtos...</div>;

    return (
        <div className="container">
            <div className="main-layout">
                <Sidebar
                    categories={categories}
                    selectedCats={selectedCats}
                    onCatChange={handleCatChange}
                    search={search}
                    onSearchChange={setSearch}
                    sortBy={sortBy}
                    onSortChange={setSortBy}
                />
                <main>
                    <p style={{ marginBottom: '20px', opacity: 0.7 }}>Resultados: <strong>{displayProducts.length}</strong></p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '20px' }}>
                        {displayProducts.map(p => <ProductCard key={p.id} product={p} />)}
                    </div>
                </main>
            </div>
        </div>
    );
}