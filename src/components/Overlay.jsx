import React, { useState, useEffect } from "react";

import saveUs from '../img/saveUs.png'

const Overlay = ({ name }) => {
    const [globalCoords, setGlobalCoords] = useState({x: 0, y: 0});
    const [latest, setLatest] = useState(name);

    useEffect(() => {
        if (latest !== name) {
            document.getElementById("overlayTitle").animate([
                // étapes/keyframes
                { transform: 'rotateX(0deg)' },
                { transform: 'rotateX(90deg)' }
              ], {
                // temporisation
                duration: 250,
                iterations: 1
            });
    
            setTimeout(function(){
                setLatest(name)
                document.getElementById("overlayTitle").animate([
                    // étapes/keyframes
                    { transform: 'rotateX(90deg)' },
                    { transform: 'rotateX(0deg)' }
                  ], {
                    // temporisation
                    duration: 250,
                    iterations: 1
                });
            },250);  
        }
    })
    
    return (
        <div className="overlay position-absolute text-white w-100" style={{fontSize: 100+"px", zIndex: 100}}>   
            <div className="position-absolute" id="overlayTitle" style={{left: window.innerWidth / 6, top: - window.innerWidth / 9}}>
                {latest}
            </div>
            <img src={saveUs} className="border-primary miniVideo position-absolute border border-4" style={{top: window.innerWidth / 6}} alt="" />
        </div>
    )
};

export default props => <Overlay {...props} />;