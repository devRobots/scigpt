import { generateThesis } from '@/app/lib/thesis';
import { useCallback, useState } from 'react';

export function useThesis() {
    const [thesis, setThesis] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getThesis = useCallback(async (topics: string[], fieldOfStudy: string) => {
        try {
            setLoading(true);
            setError(null);
            const newPapers = await generateThesis(topics, fieldOfStudy);
            setThesis(newPapers);
        } catch (e: any) {
            setError(e.message);
        } finally {
            setLoading(false);
        }
    }, []);

    return { thesis, loading, error, getThesis };
}