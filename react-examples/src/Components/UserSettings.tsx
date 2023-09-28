import React, { useState } from 'react';

const UserSettings = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [notifications, setNotifications] = useState(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Notifications:', notifications);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <br />
            <label>
                Email:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <br />
            <label>
                Password:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <br />
            <label>
                Notifications:
                <input type="checkbox" checked={notifications} onChange={(e) => setNotifications(e.target.checked)} />
            </label>
            <br />
            <button type="submit">Save</button>
        </form>
    );
};

export default UserSettings;
