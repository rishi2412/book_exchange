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
        newEntityName === '' ? setShowPopup(true) : setShowPopup(false);
        if (newEntityName !== '') {
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
                        <h3>Enter New Entity Name:</h3>
                        <input
                            type="text"
                            value={newEntityName}
                            onChange={(e) => setNewEntityName(e.target.value)}
                            placeholder="Enter new entity name"
                        />
                        <button onClick={addEntity}>Submit</button>
                        <span className="close" onClick={() => setShowPopup(false)}>&times;</span>
                    </div>
                </div>
            )}
            <ol>
                {entities.map((entity, index) => (
                    <div className='listing'>
                        <li key={index}>{entity.name  }</li>
                        <button className="exchange-button">
                            <svg fill="#000000" width="15px" height="15px" viewBox="0 0 16 16" id="request-send-16px" xmlns="http://www.w3.org/2000/svg">
                                <path id="Path_44" data-name="Path 44" d="M-18,11a2,2,0,0,0,2-2,2,2,0,0,0-2-2,2,2,0,0,0-2,2A2,2,0,0,0-18,11Zm0-3a1,1,0,0,1,1,1,1,1,0,0,1-1,1,1,1,0,0,1-1-1A1,1,0,0,1-18,8Zm2.5,4h-5A2.5,2.5,0,0,0-23,14.5,1.5,1.5,0,0,0-21.5,16h7A1.5,1.5,0,0,0-13,14.5,2.5,2.5,0,0,0-15.5,12Zm1,3h-7a.5.5,0,0,1-.5-.5A1.5,1.5,0,0,1-20.5,13h5A1.5,1.5,0,0,1-14,14.5.5.5,0,0,1-14.5,15ZM-7,2.5v5A2.5,2.5,0,0,1-9.5,10h-2.793l-1.853,1.854A.5.5,0,0,1-14.5,12a.493.493,0,0,1-.191-.038A.5.5,0,0,1-15,11.5v-2a.5.5,0,0,1,.5-.5.5.5,0,0,1,.5.5v.793l1.146-1.147A.5.5,0,0,1-12.5,9h3A1.5,1.5,0,0,0-8,7.5v-5A1.5,1.5,0,0,0-9.5,1h-7A1.5,1.5,0,0,0-18,2.5v3a.5.5,0,0,1-.5.5.5.5,0,0,1-.5-.5v-3A2.5,2.5,0,0,1-16.5,0h7A2.5,2.5,0,0,1-7,2.5Zm-7.854,3.646L-12.707,4H-14.5a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.191.038.506.506,0,0,1,.271.271A.5.5,0,0,1-11,3.5v3a.5.5,0,0,1-.5.5.5.5,0,0,1-.5-.5V4.707l-2.146,2.147A.5.5,0,0,1-14.5,7a.5.5,0,0,1-.354-.146A.5.5,0,0,1-14.854,6.146Z" transform="translate(23)" />
                            </svg>
                        </button>
                    </div>
                ))}
            </ol>


        </div>

    );

};
export default Listing;