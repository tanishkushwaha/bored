import { useState, useEffect } from 'react';
import './App.css'

const App = () => {

    const [url, setUrl] = useState('');

    const customHeaders = {
        'ngrok-skip-browser-warning': 'true'
      };

    const nextActivity = () => {
        
        fetch('https://www.boredapi.com/api/activity', { headers: customHeaders })
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
