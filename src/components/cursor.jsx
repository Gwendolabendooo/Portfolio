import React, { useState, useEffect } from "react";

const Cursor = ({ name }) => {
    const [globalCoords, setGlobalCoords] = useState({x: 0, y: 0});

    useEffect(() => {
        // 👇️ get global mouse coordinates
        const handleWindowMouseMove = event => {
          setGlobalCoords({
            x: event.clientX,
            y: event.clientY,
          });
          console.log(event)
        };
        window.addEventListener('mousemove', handleWindowMouseMove);
    
        return () => {
          window.removeEventListener('mousemove', handleWindowMouseMove);
        };
      }, []);
    
    return (
        <div>    
        </div>
    )
};

export default props => <Cursor {...props} />;