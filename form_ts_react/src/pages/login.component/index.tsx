import React from 'react';
import { LoginEntity } from '../../model/login';

interface PropsForm {
    onLogin: (login: LoginEntity) => void ;
}

const LoginComponent:React.FC<PropsForm> = ({onLogin}) => {
    return (
        <div>
            LoginComponent
        </div>
    )
}

export default LoginComponent;