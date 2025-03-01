import React, { useEffect, useState } from 'react';
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import { apiLogin } from '../../api/auth';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [name, setName] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()


    useEffect(() => {
        const userId = localStorage.getItem("userId")
        if (userId) navigate('/')
    }, [])


    const handleLogin = async() => {
        const result = await apiLogin({ name, password })
        if (!result.success) {
            setName('')
            setPassword('')
            alert("Tài khoản hoặc mật khẩu không chính xác!")
        } else {
            localStorage.setItem('userId', result.userId);
            navigate('/')
        }




    }
    return ( <
        MDBContainer fluid className = "p-3 my-5 h-custom" >
        <
        MDBRow >
        <
        MDBCol col = '10'
        md = '6' >
        <
        img src = "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
        class = "img-fluid"
        alt = "Sample image" / >
        <
        /MDBCol> <
        MDBCol col = '4'
        md = '6'
        style = {
            { alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }
        } > { /* Your content here */ } <
        MDBInput wrapperClass = 'mb-4'
        label = 'Name'
        id = 'formControlLg'
        type = 'text'
        value = { name }
        required onChange = { e => setName(e.target.value) }
        /> <
        MDBInput wrapperClass = 'mb-4'
        label = 'Password'
        id = 'formControlLg'
        type = 'password'
        value = { password }
        required onChange = { e => setPassword(e.target.value) }
        /> <
        div className = 'text-center text-md-start mt-4 pt-2'
        onClick = { handleLogin } >
        <
        MDBBtn className = "mb-0 px-5"
        size = 'lg' > Login < /MDBBtn> < /
        div > <
        /MDBCol> < /
        MDBRow >

        <
        /MDBContainer>
    );
}

export default Login;