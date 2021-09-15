import React from 'react';


const Title = ({ title }) => (
    
        <div>
            <h2 className='title-content desktop'>
                {title}
            </h2>
           
            <style jsx global>{`
                
            `}</style>
        </div>
    
)

Title.displayName = 'Title';



Title.defaultProps = {
    title: '',
}

export default Title;