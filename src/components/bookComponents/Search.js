import React, { useState } from 'react';
import '../../styles/bookComponents/Search.css';

const Search = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async (event) => {
        event.preventDefault();
        try {
            // Perform search in the database using searchTerm
            const results = await fetch(`/api/search?term=${searchTerm}`);
            const data = await results.json();
            setSearchResults(data);
        } catch (error) {
            console.error('Error searching in the database:', error);
        }
    };
    return (
        <div>
            <h2>Search</h2>
            <form onSubmit={handleSearch}>
                <div>
                    <label htmlFor="searchTerm">Search_Entity:</label>
                    <input
                        type="text"
                        id="searchTerm"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <button type="submit">Search</button>
                </div>
            </form>
            {searchResults.length > 0 &&
                <div>
                    <h3>Search Results:</h3>
                    <ul>
                        {searchResults.map((result, index) => (
                            <li key={index}>{result}</li>
                        ))}
                    </ul>
                </div>
            }
        </div>
    );
};

export default Search;