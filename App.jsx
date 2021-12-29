import React from 'react'
import NavbarCss from '../../my-app/NavbarCSS'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return
    (
        <div className='hooks-app'>
            <NavbarCss />
            <ItemCount min={1} max={10} />
        </div>
    )
}

export default App