import { useState, useEffect } from 'react';
export function useFetch(apiFunction, params = null) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        apiFunction(params).then(res => setData(res.data)).catch(err => setError(err.message)).finally(() => setLoading(false));
    }, [params]);
    return { data, loading, error };
}