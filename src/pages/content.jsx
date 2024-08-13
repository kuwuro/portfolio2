import React from "react";
import Projects from "./projects";

function Content({ darkMode }) {    
    return (
        <div>
            <Projects darkMode={darkMode}/>
        </div>
    );
}

export default Content;