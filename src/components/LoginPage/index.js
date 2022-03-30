import styled from "styled-components";
import logo from "../../assets/logo.png";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function LoginPage() {
    const [userData, setUserData] = useState({ email: "", password: "" })
    const navigate = useNavigate();
    console.log(userData)

    function Login(e) {
        e.preventDefault();
        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', userData);
        promise.then((response) => {
            const dados = response.data;
            console.log(dados);
            navigate("/today");
        })
        promise.catch(err => console.log(err.response));
    }

    return (
        <>
            <BodyCss>
                <img src={logo} alt="logo" />
                <Form onSubmit={Login}>
                    <input placeholder="   email" type='text' onChange={(e) => setUserData({ ...userData, email: e.target.value })} value={userData.email} required></input>
                    <input placeholder="   senha" type='password' onChange={(e) => setUserData({ ...userData, password: e.target.value })} value={userData.password} required></input>
                    <button type="submit">Entrar</button>
                </Form>
                <p onClick={() => navigate("/register")}>Não tem uma conta? Cadastre-se!</p>
            </BodyCss>
        </>
    )
}

const BodyCss = styled.div`
    background: #E5E5E5;
    width: 375px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 180px;
        height: 178.38px;
        margin-top: 88px;
        margin-bottom: 60px;
    }

    input {
        width: 303px;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        box-sizing: border-box;
        border-radius: 5px;
        font-size: 19.976px;
        line-height: 25px;
        color: #DBDBDB;
        margin-bottom: 6px;
    }

    button {
        width: 303px;
        height: 45px;

        background: #52B6FF;
        border-radius: 4.63636px;
        border: none;
        font-size: 20.976px;
        line-height: 26px;
        text-align: center;
        margin-top: 70px;
        color: #FFFFFF;
    }

    p {
        font-size: 13.976px;
        line-height: 17px;
        text-align: center;
        text-decoration-line: underline;
        margin-top: 10px;
        color: #52B6FF;
        :hover{
                cursor: pointer;
                filter: brightness(0.9);
        }
    }
`

const Form = styled.form`
display:flex;
flex-direction: column;
justify-content: center`