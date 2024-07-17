import { searchPapers } from '@/lib/papers';
import { Paper } from '@/types/paper';
import { useCallback, useState } from 'react';

export function usePapers() {
    const [papers, setPapers] = useState<Paper[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getPapers = useCallback(async (query: string) => {
        try {
            setLoading(true);
            setError(null);
            const newPapers = await searchPapers(query);
            setPapers(newPapers);
        } catch (e: any) {
            setError(e.message);
        } finally {
            setLoading(false);
        }
    }, []);

    return { papers, loading, error, getPapers };
}