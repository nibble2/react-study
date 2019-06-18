import React from 'react' ;

function User({ user }) {
    return (
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    ) ;
}

function UserList() {
    const users = [
        {
            id: 1,
            username: 'dana' ,
            email: 'dana@gmail.com'
        },
        {
            id: 2,
            username: 'ilhan',
            email: 'ilhan@gmail.com'
        },
        {
            id: 3,
            username: 'kanghee',
            email: 'kanghee@gmail.com'
        }
    ] ;

    return (
        <div>
            {users.map(user => (
                <User user={user} key={user.id} />
            ))}
        </div>
    );
}

export default UserList ;