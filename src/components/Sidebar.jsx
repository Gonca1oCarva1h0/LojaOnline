import { Search, ChevronDown } from 'lucide-react';

export default function Sidebar({
    categories,
    selectedCats,
    onCatChange,
    onSearchChange,
    search,
    sortBy,
    onSortChange
}) {
    return (
        <aside style={{ background: 'var(--card-bg)', padding: '25px', borderRadius: '12px', border: '1px solid var(--border)', height: 'fit-content', position: 'sticky', top: '100px' }}>

            {/* Pesquisa */}
            <h4 style={{ marginBottom: '15px' }}>Pesquisar</h4>
            <div style={{ position: 'relative', marginBottom: '30px' }}>
                <input
                    type="text"
                    value={search}
                    placeholder="O que procuras?"
                    onChange={(e) => onSearchChange(e.target.value)}
                    style={{ width: '100%', padding: '12px 12px 12px 40px', borderRadius: '8px', border: '1px solid var(--border)', background: 'var(--bg)', color: 'var(--text)', boxSizing: 'border-box' }}
                />
                <Search size={18} style={{ position: 'absolute', left: 12, top: 12, opacity: 0.5 }} />
            </div>

            {/* Ordenação */}
            <h4 style={{ marginBottom: '15px' }}>Ordenar por</h4>
            <div style={{ position: 'relative', marginBottom: '30px' }}>
                <select
                    value={sortBy}
                    onChange={(e) => onSortChange(e.target.value)}
                    style={{
                        width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--border)',
                        background: 'var(--bg)', color: 'var(--text)', appearance: 'none', cursor: 'pointer'
                    }}
                >
                    <option value="default">Sugestões</option>
                    <option value="price-asc">Preço: Menor para Maior</option>
                    <option value="price-desc">Preço: Maior para Menor</option>
                    <option value="rating">Melhor Avaliado</option>
                </select>
                <ChevronDown size={16} style={{ position: 'absolute', right: 12, top: 14, opacity: 0.5, pointerEvents: 'none' }} />
            </div>

            {/* Categorias */}
            <h4 style={{ marginBottom: '15px' }}>Categorias</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {categories.map(cat => (
                    <label key={cat} style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', textTransform: 'capitalize' }}>
                        <input
                            type="checkbox"
                            checked={selectedCats.includes(cat)}
                            onChange={() => onCatChange(cat)}
                            style={{ width: '18px', height: '18px', accentColor: 'var(--primary)' }}
                        />
                        <span style={{ fontSize: '0.95rem' }}>{cat}</span>
                    </label>
                ))}
            </div>
        </aside>
    );
}