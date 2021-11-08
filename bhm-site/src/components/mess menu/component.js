import './component.css'
import './script'
import { ReactDOM } from 'react';
import ScriptTag from 'react-script-tag';
import { Link } from 'react-router-dom';
function Messmenu(){
    const script=document.createElement("script"); script.async=true; script.src="./script";
    return <div>
        <div class="menu">
    <div id="marker"></div>
    <Link to="#">Monday</Link>
    <Link to="#">Monday</Link>
    <Link to="#">Monday</Link>
    <Link to="#">Monday</Link>
    <Link to="#">Monday</Link>
    <Link to="#">Monday</Link>
    <Link to="#">Monday</Link>
</div>
</div>
}

export default Messmenu;