import React from 'react';

import UsersList from '../components/UsersList';


const Users = () => {
    const USERS = [
        {
        id:'u1',
        name: 'gon',
        image: 
            'https://i.pinimg.com/236x/71/7c/2d/717c2dc3b9d7557e2f9253fc766f499d.jpg',
        places: 2
    }
];

return <UsersList items={USERS} />;
}

export default Users