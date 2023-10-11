import { useState, useEffect } from 'react';
import './App.css'

const App = () => {

    const [url, setUrl] = useState('');
    const [loading, setLoading] = useState(false);

    const nextActivity = () => {
        setLoading(true);
        fetch('https://www.boredapi.com/api/activity')
        .then(res => res.json())
        .then(data => {
            setLoading(false);
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
            {loading ? (
                <div className="loader-container">
                    <div className="loadingio-spinner-eclipse-kganed8ra7">
                        <div className="ldio-d8rv4bk8fds">
                            <div></div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="activity-container">
                <span key={url}>{url}</span>    
            </div>
            )}
        </>
    );
}

export default App
