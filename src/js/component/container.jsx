import React, {useState} from "react";

const Container = ()=>{
    const [color,setColor] = useState(undefined);
    const [hidden,setHidden] = useState(true);

    const handleChange = () =>{
        let colors =["red","yellow","green","purple"]
        let i = 0; 
        setInterval(()=>{
            setColor(colors[i%4])
            i++
        },1000)
    }
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
        <div>
                <button
                onClick={() => setHidden(!hidden)}
                className="boton"
                ></button>
                <button
                    onClick={() => handleChange()}
                    className="segundoBoton"
                ></button>
                
        </div>

    </div>
    )
}

export default Container