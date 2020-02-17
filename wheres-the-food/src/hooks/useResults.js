import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {

    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        setResults([]);
        setErrorMessage('');
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'providence'
                }
            });
            setResults(response.data.businesses);
        } catch (err) {
            console.log('Error:', err);
            setErrorMessage('Uh oh! Something went wrong...');
        }
    };

    useEffect(() => {
        searchApi('pasta').catch(err => err);
    }, []);

    return [searchApi, results, errorMessage];
}
