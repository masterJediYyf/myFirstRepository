import React from 'react';
import { Link, Outlet} from 'react-router-dom';

const User = () => {
    return (
        <div>
            <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="add">添加用户</Link></li>
                <li><Link to="user">用户列表</Link></li>
            </ul>
            <Outlet />
        </div>
    )
}

export default User;