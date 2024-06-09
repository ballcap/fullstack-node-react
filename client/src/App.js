import React, { useEffect, useState } from 'react';
import { fetchMessage } from './api';

const App = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        const getMessage = async () => {
            const msg = await fetchMessage();
            setMessage(msg);
        };

        getMessage();
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <h1>{message}</h1>
            </header>
        </div>
    );
};

export default App;