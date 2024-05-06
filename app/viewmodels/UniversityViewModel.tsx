import { useState, useEffect } from 'react';
import { UniversityRepository } from '../repositories/universityRepository';
import { University } from '../data/models/university';

export const useUniversityViewModel = () => {
    const [universities, setUniversities] = useState<University[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const repository = new UniversityRepository();

        const loadData = async () => {
            setLoading(true);
            setError(null);

            try {
                const data = await repository.getUniversities();
                setUniversities(data);
            } catch (error) {
                setError('Failed to load universities');
            } finally {
                setLoading(false);
            }
        };

        loadData(); // Fetch data on component mount
    }, []);

    const refresh = async () => {
        setLoading(true);

        try {
            const repository = new UniversityRepository();
            const data = await repository.getUniversities();
            setUniversities(data);
        } catch (error) {
            setError('Failed to refresh universities');
        } finally {
            setLoading(false);
        }
    };

    return { universities, loading, error, refresh };
};
