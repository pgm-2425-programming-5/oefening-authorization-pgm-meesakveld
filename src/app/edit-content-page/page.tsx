import React from 'react';

const EditContentPage: React.FC = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Edit Content Page</h1>
            <p>Oops! Looks like you have to edit some content. Don't worry, it's not as scary as it sounds!</p>
            <img 
                src="https://media.giphy.com/media/3o6Zt481isNVuQI1l6/giphy.gif" 
                alt="Funny gif" 
                style={{ width: '300px', marginTop: '20px' }}
            />
            <p>Remember, with great power comes great responsibility. So, edit wisely!</p>
        </div>
    );
};

export default EditContentPage;