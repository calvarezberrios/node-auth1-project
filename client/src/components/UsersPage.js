import React, { useState, useEffect } from 'react';
import axios from "axios";

const UsersPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/users")
            .then(res => {
                console.log(res);
                setUsers(res.data);
            })
            .catch(err => console.log(err.response.data));
    }, []);
    return (
        <div>
            <h2>List of Users:</h2>
            {users.length > 0 && (
                users.map(user => (
                    <div key = {user.id}>
                        <li className = "user-card-title">{`${user.lname}, ${user.fname}`}</li>
                        <li>{user.username}</li>
                        <li>Password --- "Wouldn't youn like to know?"</li>
                    </div>
                ))
            )}
        </div>
    );
};

export default UsersPage;