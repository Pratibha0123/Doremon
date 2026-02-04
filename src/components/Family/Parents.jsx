import React from 'react';
import TamakoImg from "../../assets/tamako.png";
import FamilyTree from './FamilyTree';

const Parents = () => {
    return (
        <div className="min-h-screen bg-light py-24">
            <div className="container mx-auto px-4 max-w-4xl">
                <FamilyTree />
            </div>
        </div>
    );
};

export default Parents;
