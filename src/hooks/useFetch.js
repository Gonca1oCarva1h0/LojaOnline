import { useState, useEffect } from 'react';

export function useFetch(apiFunction, params = null) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Adicionei params como dependência segura (JSON.stringify)
        setLoading(true); // Garante que loading reseta ao mudar params
        apiFunction(params)
            .then(res => setData(res.data))
            .catch(err => setError(err.message))
            .finally(() => setLoading(false));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [apiFunction, JSON.stringify(params)]); // Comparação por string evita loop

    return { data, loading, error };
}