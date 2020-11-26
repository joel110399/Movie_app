import React from "react";

const Holamundo = () => {

    const Hello = "Hola mundo JSX";
    const isTrue = true;

    return(
        <div className="holamundo">
            <h1>{Hello}</h1>
            <h2>Cusrso Basico de React</h2>
            <img src="https://arepa.s3.amazonaws.com/react.png" alt="React"/>
            {isTrue ? <h4>Esto es verdadero</h4> : <h5>soy falso</h5>} 
        </div>
    );
};

export default Holamundo;