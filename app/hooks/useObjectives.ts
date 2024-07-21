import { generateObjectives } from '@/app/lib/writer/ai';
import { useCallback, useState } from 'react';

export function useObjectives() {
    const [objectives, setObjectives] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getObjectives = useCallback(async (thesis: string, topics: string[], fieldOfStudy: string) => {
        try {
            setLoading(true);
            setError(null);
            const newObjectives = await generateObjectives(thesis, topics, fieldOfStudy);
            console.log(newObjectives);
            setObjectives(newObjectives);
        } catch (e: any) {
            setError(e.message);
        } finally {
            setLoading(false);
        }
    }, []);

    return { objectives, loading, error, getObjectives };
}