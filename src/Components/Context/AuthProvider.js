import React from 'react'
import {useHistory} from 'react-router-dom';
import { auth } from '../firebase/config';
function AuthProvider() {

      /* //TODO bước 6.1----> khởi tạo useHistory*/
      const history = useHistory();

    React.useEffect(() => {
        /* //TODO bước 4.3---->Nếu đã đăng nhập thì lắng nghe lưu trữ thông tin người dùng*/
       const unSubcriber =  auth.onAuthStateChanged((user) => {
            if (user) 
            {
                /* //TODO bước 6.2----> Điều hướng đến chatRom nếu điều kiện đúng là có người dùng*/
                history.push('/');
            }
        });

      
       /* //TODO bước 7----> Hàm Clearn này tương đương với componenWillUnMount cái dependency nó nhận history vì history
       là than số bên ngoài
       */

        return () => {
            unSubcriber();
        }
    },[history])

    return (<></>)
}

export default AuthProvider
