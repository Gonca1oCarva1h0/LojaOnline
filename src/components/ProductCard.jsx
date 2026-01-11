import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Star } from 'lucide-react';

export default function ProductCard({ product }) {
    const { addToCart } = useCart();
    return (
        <div style={{ background: 'var(--card-bg)', padding: '15px', borderRadius: '12px', border: '1px solid var(--border)', display: 'flex', flexDirection: 'column' }}>
            <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="img-wrapper"><img src={product.image} alt="" /></div>
                <h3 style={{ fontSize: '0.9rem', height: '40px', overflow: 'hidden', margin: '10px 0' }}>{product.title}</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '10px' }}>
                    <Star size={14} fill="#fbbf24" color="#fbbf24" />
                    <span style={{ fontSize: '12px', opacity: 0.7 }}>{product.rating.rate}</span>
                </div>
                <div style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '15px' }}>
                    {product.price.toFixed(2)}€
                </div>
            </Link>
            <button onClick={() => addToCart(product)} className="btn-primary">Adicionar</button>
        </div>
    );
}