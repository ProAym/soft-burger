import { useState, useEffect } from 'react';
import foodMenus from '../components/Food Showcase/foodMenus';

const useFetch = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulating data fetching with a delay
        setTimeout(() => {
            const fetchedData = foodMenus
            setData(fetchedData);
            setLoading(false);
        }, 1000); // Simulated delay of 1 second
    }, []);

    return [data, loading];
};

export default useFetch;
