import { PagerContext } from '@/app/writer/PagerProvider';
import { useContext } from 'react';

export function usePager() {
    const context = useContext(PagerContext);
    const { page, setPage } = context;
    return { page, setPage };
}