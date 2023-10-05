import { useState, useEffect } from 'react';
import './App.css'

const App = () => {

    const [url, setUrl] = useState('');

    const nextActivity = () => {
        
        fetch('https://www.boredapi.com/api/activity')
        .then(res => res.json())
        .then(data => {

            console.log(data);
            setUrl(data.activity);
        })
        .catch(err => console.log(err));
    }

    useEffect(() => {

        nextActivity();
        
        document.addEventListener('click', nextActivity);

        return () => document.body.removeEventListener('click', nextActivity);

    }, []);

    return (
        <>
            <span key={url}>{url}</span>
        </>
    );
}

export default App
