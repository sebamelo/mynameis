import React from 'react';


const Mynameis = ({ title }) => (
    
        <div>
            <h2>
                {title}
            </h2>
           
            <style jsx global>{`
                
            `}</style>
        </div>
    
)

Mynameis.displayName = 'Mynameis';



Mynameis.defaultProps = {
    title: '',
}

export default Mynameis;