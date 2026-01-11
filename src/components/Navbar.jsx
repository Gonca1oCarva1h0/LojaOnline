import { Link } from 'react-router-dom';
import { ShoppingBag, Moon, Sun } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

export default function Navbar() {
    const { totalItems } = useCart();
    const [isDark, setIsDark] = useLocalStorage('dark-mode', true);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', isDark);
    }, [isDark]);

    return (
        <nav style={{
            background: 'var(--card-bg)',
            padding: '10px 40px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '1px solid var(--border)',
            position: 'sticky',
            top: 0,
            zIndex: 1000
        }}>
            <Link to="/" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', lineHeight: '1' }}>
                <span className="logo-main">ROTATION</span>
                <span className="logo-sub">EVERYTHING SHOP</span>
            </Link>

            <div style={{ display: 'flex', alignItems: 'center', gap: '25px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Sun size={18} color={isDark ? '#94a3b8' : '#f59e0b'} />
                    <label className="switch">
                        <input type="checkbox" checked={isDark} onChange={() => setIsDark(!isDark)} />
                        <span className="slider"></span>
                    </label>
                    <Moon size={18} color={isDark ? '#ffffff' : '#94a3b8'} />
                </div>

                <Link to="/cart" style={{ position: 'relative', color: 'var(--text)', display: 'flex' }}>
                    <ShoppingBag size={28} />
                    {totalItems > 0 && <span className="nav-badge">{totalItems}</span>}
                </Link>
            </div>
        </nav>
    );
}