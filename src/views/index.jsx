import React from 'react';

import Carousel from '../components/carousel'
import Cursor from '../components/cursor'
import Overlay from '../components/Overlay';

class index extends React.Component {
    render() {
        return (
            <body className="pt-2">
                index test
                <Carousel/>
                <Cursor/>
            </body>
        )
    }

}

export default index;