import React, { useState, useEffect } from "react";

import saveUs from '../img/saveUs.png'

const Menu = ({ data, selectedData }) => {
    const [globalCoords, setGlobalCoords] = useState({x: 0, y: 0});

    const MenuEvent = (projet) => {
        console.log(projet)
        const event = new CustomEvent('MenuEvent', {
            detail: { projet}
        });
        document.dispatchEvent(event)
    }

    return (
        <div className="d-flex w-100 flex-column">
            <div className="title d-flex flex-wrap justify-content-between m-5 mb-4 mt-4">
                <div>
                    GWENDAL LE FLOCH
                </div>
                <div>
                    ABOUT
                </div>
            </div>
            <div className="d-flex flex-wrap justify-content-center">
                {data.map(projet => {
                    return(
                        <div className="m-2 p-1" onClick={() => MenuEvent(projet)}>
                            <div className="rounded-circle border border-2 border-dark bullet position-relative overflow-hidden">
                                <div className={selectedData === projet ? "bulletAnimated bg-dark position-absolute" : ""}>

                                </div>
                            </div>
                            <span className=""></span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};

export default props => <Menu {...props} />;