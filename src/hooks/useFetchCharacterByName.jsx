import { useEffect, useState } from "react";
import { characters } from '../utils/data';

export const useFetchCharacterByName = (slug) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        const fetchData = () => {
            try {
                const res = characters?.find(character => character.slug === slug);

                if (!res) throw new Error("Character not found");

                setData(res);
            } catch (error) {   
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [slug]);

    return { data, error, isLoading };
}   