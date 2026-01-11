import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus, ArrowLeft, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Cart() {
    const { cart, updateQty, remove, clearCart, totalValue } = useCart();
    const [isFinished, setIsFinished] = useState(false);

    const handleCheckout = () => {
        setIsFinished(true);
        clearCart();
    };

    if (isFinished) {
        return (
            <div className="container" style={{ textAlign: 'center', padding: '80px 20px' }}>
                <CheckCircle size={80} color="#22c55e" style={{ marginBottom: '20px' }} />
                <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Encomenda Confirmada!</h1>
                <p style={{ opacity: 0.7, fontSize: '1.2rem', marginBottom: '30px' }}>
                    Obrigado pela sua compra. Receberá um e-mail em breve.
                </p>
                <Link to="/" className="btn-primary" style={{ textDecoration: 'none', padding: '15px 40px' }}>
                    Voltar à Loja
                </Link>
            </div>
        );
    }

    return (
        <div className="container">
            <Link to="/" style={{ color: 'var(--text)', display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none', marginBottom: 20, opacity: 0.8 }}>
                <ArrowLeft size={20} /> Continuar a comprar
            </Link>

            <h1 style={{ marginBottom: 30 }}>O meu Carrinho</h1>

            {cart.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '50px', background: 'var(--card-bg)', borderRadius: '12px', border: '1px solid var(--border)' }}>
                    <p>O seu carrinho está vazio.</p>
                    <Link to="/" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-block', marginTop: '10px' }}>Ir para a Loja</Link>
                </div>
            ) : (
                <div className="cart-layout">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        {cart.map(item => (
                            <div key={item.id} style={{
                                display: 'flex',
                                gap: '20px',
                                background: 'var(--card-bg)',
                                padding: '15px',
                                borderRadius: '12px',
                                border: '1px solid var(--border)',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                            }}>
                                <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                    <div className="cart-item-img-box">
                                        <img src={item.image} alt={item.title} />
                                    </div>
                                    <div>
                                        <h4 style={{ margin: '0 0 10px', fontSize: '1rem', maxWidth: '300px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                            {item.title}
                                        </h4>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.05)', padding: '5px 12px', borderRadius: '8px', border: '1px solid var(--border)' }}>
                                                <button onClick={() => updateQty(item.id, -1)} style={{ background: 'none', border: 'none', color: 'var(--text)', cursor: 'pointer' }}><Minus size={14} /></button>
                                                <span style={{ fontWeight: 'bold' }}>{item.qty}</span>
                                                <button onClick={() => updateQty(item.id, 1)} style={{ background: 'none', border: 'none', color: 'var(--text)', cursor: 'pointer' }}><Plus size={14} /></button>
                                            </div>
                                            <button onClick={() => remove(item.id)} style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer' }}>
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ fontWeight: '800', fontSize: '1.2rem', color: '#6366f1' }}>
                                    {(item.price * item.qty).toFixed(2)}€
                                </div>
                            </div>
                        ))}
                    </div>

                    <aside style={{ background: 'var(--card-bg)', padding: '25px', borderRadius: '12px', border: '1px solid var(--border)', height: 'fit-content' }}>
                        <h3 style={{ marginTop: 0 }}>Resumo</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', margin: '20px 0' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', opacity: 0.7 }}>
                                <span>Subtotal</span>
                                <span>{totalValue.toFixed(2)}€</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', opacity: 0.7 }}>
                                <span>Portes</span>
                                <span style={{ color: '#22c55e', fontWeight: 'bold' }}>Grátis</span>
                            </div>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.5rem', fontWeight: '900', borderTop: '1px solid var(--border)', paddingTop: 20 }}>
                            <span>Total</span>
                            <span style={{ color: '#6366f1' }}>{totalValue.toFixed(2)}€</span>
                        </div>

                        <button
                            className="btn-primary"
                            onClick={handleCheckout}
                            style={{ width: '100%', marginTop: '20px', background: '#22c55e', padding: '15px' }}
                        >
                            Finalizar Encomenda
                        </button>
                    </aside>
                </div>
            )}
        </div>
    );
}