import React, { useState, useEffect } from "react";

import saveUs from '../img/saveUs.png'

const Overlay = ({ name }) => {
    const [globalCoords, setGlobalCoords] = useState({x: 0, y: 0});
    
    return (
        <div className="overlay position-absolute text-white w-100" style={{fontSize: 100+"px", zIndex: 100}}>   
            <div className="position-absolute" style={{left: window.innerWidth / 6, top: - window.innerWidth / 6}}>
                {name}
            </div>
            <img src={saveUs} className="border-primary miniVideo position-absolute border border-4" style={{top: window.innerWidth / 10}} alt="" />
        </div>
    )
};

export default props => <Overlay {...props} />;