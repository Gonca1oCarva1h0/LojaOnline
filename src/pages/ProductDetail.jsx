import { useParams, useNavigate } from 'react-router-dom';
import { getProduct } from '../services/api';
import { useFetch } from '../hooks/useFetch';
import { useCart } from '../context/CartContext';
import { ArrowLeft, ShoppingCart, Star, ShieldCheck, Truck, RotateCcw } from 'lucide-react';

export default function ProductDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const { data: product, loading, error } = useFetch(getProduct, id);

    if (loading) return <div className="container">A carregar detalhes do produto...</div>;
    if (error) return <div className="container" style={{ color: '#ef4444' }}>Erro ao carregar produto: {error}</div>;
    if (!product) return <div className="container">Produto não encontrado.</div>;

    return (
        <div className="container">
            <button onClick={() => navigate(-1)} style={{ background: 'none', border: 'none', color: 'var(--text)', display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', marginBottom: 30, padding: 0, opacity: 0.8 }}>
                <ArrowLeft size={20} /> Voltar à lista
            </button>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: '60px',
                background: 'var(--card-bg)',
                padding: '40px',
                borderRadius: '16px',
                border: '1px solid var(--border)',
                boxShadow: 'var(--shadow)'
            }}>
                {/* Coluna da Imagem */}
                <div style={{ background: 'white', padding: '40px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '400px' }}>
                    <img src={product.image} alt={product.title} style={{ maxWidth: '100%', maxHeight: '500px', objectFit: 'contain' }} />
                </div>

                {/* Coluna de Informação */}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>
                        {product.category}
                    </span>

                    <h1 style={{ fontSize: '2.2rem', margin: '15px 0', lineHeight: '1.2' }}>{product.title}</h1>

                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 25 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={18} fill={i < Math.round(product.rating.rate) ? "#fbbf24" : "none"} color="#fbbf24" />
                            ))}
                        </div>
                        <span style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{product.rating.rate}</span>
                        <span style={{ opacity: 0.6 }}>({product.rating.count} avaliações)</span>
                    </div>

                    <div style={{ fontSize: '3rem', fontWeight: '900', color: 'var(--primary)', marginBottom: 25 }}>
                        {product.price.toFixed(2)}€
                    </div>

                    <p style={{ lineHeight: '1.8', opacity: 0.8, fontSize: '1.05rem', marginBottom: 35 }}>
                        {product.description}
                    </p>

                    {/* Vantagens */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '15px',
                        marginBottom: 35,
                        padding: '20px',
                        background: 'var(--bg)',
                        borderRadius: '12px'
                    }}>
                        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                            <Truck size={20} color="#22c55e" />
                            <span style={{ fontSize: '0.85rem', fontWeight: '500' }}>Entrega Grátis</span>
                        </div>
                        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                            <ShieldCheck size={20} color="#6366f1" />
                            <span style={{ fontSize: '0.85rem', fontWeight: '500' }}>Garantia 3 Anos</span>
                        </div>
                        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                            <RotateCcw size={20} color="#f59e0b" />
                            <span style={{ fontSize: '0.85rem', fontWeight: '500' }}>Devolução 30 dias</span>
                        </div>
                    </div>

                    <button
                        onClick={() => addToCart(product)}
                        className="btn-primary"
                        style={{ padding: '20px', fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12 }}
                    >
                        <ShoppingCart size={24} /> Adicionar ao Carrinho
                    </button>
                </div>
            </div>
        </div>
    );
}