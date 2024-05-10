import React, { useState, useEffect } from 'react';
import '../../styles/bookComponents/Listing.css';

const Listing = () => {

    const [entities, setEntities] = useState([]);
    const [newEntityName, setNewEntityName] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        // Fetch entities from the database when the component mounts
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            // Fetch entities from the database
            const response = [
                { "id": 1, "name": "Entity 1" },
                { "id": 2, "name": "Entity 2" },
                { "id": 3, "name": "Entity 3" },
                { "id": 4, "name": "Entity 4" },
                { "id": 5, "name": "Entity 5" }
            ];
            // const response = await fetch('/api/entities');
            //const data = await response.json();
            setEntities(response);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const addEntity = () => {
        // Add new entity to the list
        newEntityName === '' ? setShowPopup(true) : setShowPopup(false) ;
        if (newEntityName !== '' ) {
        const newEntity = { id: entities.length + 1, name: newEntityName };
        setEntities([...entities, newEntity]);
        setNewEntityName('');
    }
    };    

    return (

        <div>
            <div className='listing'>
                <h2>Entity List</h2>
                <div className="add-entity">

                    <button onClick={addEntity}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M11 2v9H2v2h9v9h2v-9h9v-2h-9V2h-2z" fill="rgba(0, 0, 0, 0.54)" />
                        </svg>
                    </button>
                </div>
            
            </div>
            {showPopup && (
                    <div className="popup">
                        <div className="popup-content">
                            <span className="close" onClick={() => setShowPopup(false)}>&times;</span>
                            <h3>Enter New Entity Name:</h3>
                            <input
                                type="text"
                                value={newEntityName}
                                onChange={(e) => setNewEntityName(e.target.value)}
                                placeholder="Enter new entity name"
                            />
                            <button onClick={addEntity}>Submit</button>
                        </div>
                    </div>
                )}
            <ol>
                {entities.map((entity, index) => (
                    <li key={index}>{entity.name}</li>
                    // <div> </div>
                ))}
            </ol>


        </div>

    );
    
};
export default Listing;