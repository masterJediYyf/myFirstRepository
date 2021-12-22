import Reactm,{ useEffect } from 'react'
import { LoginEntity } from '../../model/login';
import { isValidLogin } from '../../api/login';
import { useHistory } from 'react-router-dom';
// 移动端两种风格  apple system 苹果,  material-ui 安卓
import { Card, CardHeader, CardContent } from '@material-ui/core';
import makeStyle from '@material-ui/styles/makeStyles';
import createStyles from "@material-ui/styles/createStyles";
import LoginComponent from '../login.component';


const useFormStyle = makeStyle((theme) => 
    createStyles({
        card: {
            maxWidth: 400,
            margin: "0 auto"
        }
    })
)

const LoginContainer = () => {
    // 单页应用接管路由的一切
    const history = useHistory();
    const classes = useFormStyle();

    useEffect(() => {
        // handleLogin({
        //     login: 'admin',
        //     password: '123456' 
        // });
    },[]);

    const loginSuccessed= (isValid:boolean) => {
        if (isValid) {
            history.push('/pageB');
        } else {
            console.log('出错了');
        }
    }

    const handleLogin = (login:LoginEntity) => {
        // let loginSuccessed = isValidLogin(login);
        isValidLogin(login)
            .then(loginSuccessed);
    };

    return (
        <div>
            <Card className={classes.card}>
                <CardHeader title="Login"/>
                <CardContent>
                    <LoginComponent onLogin={ handleLogin } />
                </CardContent>
            </Card>
        </div>
    )
};

export default LoginContainer;