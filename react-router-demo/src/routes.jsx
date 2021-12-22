import Home from './Home';
import User from './User';
import Profile from './Profile';
import UserAdd from './UserAdd';
import UserList from './UserList';

const routes = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/profile',
        element: <Profile />
    },
    {
        path: '/user',
        element: <User />,
        children: [
            {
                path: 'add',
                element: <UserAdd />
            },
            {
                path: 'user',
                element: <UserList />
            },
        ]
    },
]

export default routes;