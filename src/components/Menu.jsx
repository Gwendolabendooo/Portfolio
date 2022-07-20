import React, { useState, useEffect } from "react";

import saveUs from '../img/saveUs.png'

const Menu = ({ data, selectedData }) => {
    const [globalCoords, setGlobalCoords] = useState({x: 0, y: 0});
    
    return (
        <div className="d-flex">
            {data.map(projet => {
                return(
                    <div className="m-2 p-1">
                        <div className={selectedData === projet ? "rounded-circle bg-dark bullet": "rounded-circle border border-2 border-dark bullet"}>
                        </div>
                        <span className=""></span>
                    </div>
                )
            })}
        </div>
    )
};

export default props => <Menu {...props} />;