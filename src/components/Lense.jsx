import React, { useState } from 'react'

//components
import Features from './Features';

function Lense({ lense }) {

    const [featuresOpen, setFeaturesOpen] = useState(false);

    const toggleFeatures = () => {
        setFeaturesOpen(!featuresOpen);
    }

    return (
        <div className="lensebox">

            <Features
                features={lense.features}
                toggle={toggleFeatures}
                isOpen={featuresOpen}

            />


            <div className="icon" />



            <div className="details">
                <div className="info">
                    <div className="title">Length</div>
                    <div className="value">{lense.length}</div>
                </div>
                <div className="info">
                    <div className="title">Apperture</div>
                    <div className="value">{lense.apperture}</div>
                </div>

                <div className="info">
                    <div className="title">Type</div>
                    <div className="value">{lense.type}</div>
                </div>

                <div className="info">
                    <button onClick={toggleFeatures}>⭐ FEATURES</button>
                </div>
            </div>
        </div>
    )
}

export default Lense