import React from 'react';
import './errors.css'

const errors = () => {
    return (
        <div className="alert alert-light" role="alert">
            <i className="fas fa-search-location"></i> City not found! Please try again!
        </div>
)
};

export default errors;