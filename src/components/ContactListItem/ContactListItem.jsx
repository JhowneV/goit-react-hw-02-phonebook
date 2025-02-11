import React from 'react'
import PropTypes from 'prop-types';


export const ContactListItem = ({ filteredContact, deleteContact }) => {
    const handleDelete = () => {
        deleteContact(filteredContact.id);
    };

    return (
        <>
            <li>
                <p>{filteredContact.name}:</p>
                <p>{filteredContact.number}:</p>
                <button onClick={handleDelete}>Delete</button>
            </li>
        </>
    );
};

ContactListItem.propTypes = {
    filteredContact: PropTypes.object.isRequired,
    deleteContact: PropTypes.func.isRequired,
};
