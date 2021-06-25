import React from 'react'
import {Row , Col , Button , Typography} from 'antd';
import  firebase , { auth } from '../firebase/config';
import {useHistory} from 'react-router-dom';

const {Title} = Typography;

 /* //TODO bước 4.1---->Cấu hình cho việc đăng nhập đăng ký nhanh bằng facebook*/
const gbProvider = new firebase.auth.GithubAuthProvider();



function Login() {
  

    /* //TODO bước 4.2---->Cấu hình cho việc đăng nhập đăng ký nhanh bằng facebook*/
    const handleFacebookLogin = () => {
        auth.signInWithPopup(gbProvider)
    }
  

    return (
       <div>
           {/* //TODO bước 1---->cấu hình giao diện*/ }
           <Row justify="center" style={{height: 800}}>
               <Col span="8">
                    {/* // TODO Title ở đây nó giống với thẻ heading và level=3 tương đương H3 */}
                   <Title style={{textAlign: 'center' }} level={3}>Fun chat</Title>
                   <Button style={{width: '100%', marginBottom: 5}}>
                       Đăng nhập bằng google
                   </Button>
                   <Button style={{width: '100%', marginBottom: 5}} onClick={handleFacebookLogin}>
                       Đăng nhập bằng Github
                   </Button>
               </Col>
           </Row>
       </div>
    )
}

export default Login
