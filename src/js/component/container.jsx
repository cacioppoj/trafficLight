import React, {useState} from "react";

const Container = ()=>{
    const [color,setColor] = useState(undefined);
    const [hidden,setHidden] = useState(true);
    return(
        <div className="container">
        <div 
            onClick={() => setColor("red")} 
            className={"light red" + (color ==="red" ? " glow " :"") 				
        }></div>
        <div
            onClick={() => setColor("yellow")}  
            className={"light yellow" + (color ==="yellow" ? " glow " :"") 
        }></div>
        <div
            onClick={() => setColor("green")}  
            className={"light green" + (color ==="green" ? " glow " :"") 
        }></div>
         <div
            onClick={() => setColor("purple")}
            className={"light purple" +(color === "purple" ? " glow " :"") + (hidden === true    ?  " ocultar " :"")        
        }></div>
        <button
        onClick={() => setHidden((hidden=== true ? false : true))}
        className="boton"
        ></button>
    </div>
    )
}

export default Container