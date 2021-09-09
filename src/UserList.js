import React from "react";

function UserList(){
    const users = [
        {
            id: 1,
            username: 'veloport',
            email: 'public.velopert@gmail.com'
        },
        {
            id: 2,
            username: 'tester',
            email: 'tester@example.com'   
        },
        {
            id: 3,
            username: 'liz',
            email: 'liz@example.com'
        }
    ];


return (
    <div>
        <div>
            <b>{users[0].username}</b> <br/>
            <span>{users[0].email}</span>
        </div>
        <div>
            <b>{users[1].username}</b> <br/>
            <span>{users[1].email}</span>
        </div>
        <div>
            <b>{users[2].username}</b> <br/>
            <span>{users[2].email}</span>
        </div>
    </div>
)
}

export default UserList;