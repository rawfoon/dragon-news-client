import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditons = () => {
    return (
        <div>
            <h3>Here is our Terms and Conditions</h3>
            <p>Go bact to <Link to='/register'>Registrations</Link></p>
            
        </div>
    );
};

export default TermsAndConditons;