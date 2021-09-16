import React from 'react';
import TypeLoop from './TypeLoop';
import Typing from './Typing';


const Mynameis = ({ title }) => (
    <div className="mynameis-container">
        <h2>
            buenas, soy {title}
        </h2>
        <style jsx>{`
            .mynameis-container{
                display:flex;
            }
        `}</style>
    </div>
    
)

Mynameis.displayName = 'Mynameis';



Mynameis.defaultProps = {
    title: '',
}

export default Mynameis;