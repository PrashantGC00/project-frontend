import React from "react";
import ReactDOM from 'react-dom';

import './SideDraw.css'

const SideDraw = props =>{
    const content = <aside className="side-drawer">{props.children}</aside>

    return ReactDOM.createPortal(content, document.getElementById('drawer-hook'))
}

export default SideDraw