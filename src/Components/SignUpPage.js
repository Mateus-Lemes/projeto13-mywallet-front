import LoginAndSignUp from "./LoginAndSignUpStyled";
import logo from "../Img/MyWallet.png"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


export default function SignUpPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmed, setPasswordConfirmed] = useState("");
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const body = {
        name,
        email,
        password,
        passwordConfirmed
    }

    function sendData(e) {
        e.preventDefault();

        const promise = axios.post("http://localhost:5000/sign-up", body);
        promise.then(()=> {
            console.log("foi")
            navigate("/");
        })

        promise.catch(()=> {
            console.log("Erro ao cadastrar-se")
        })

    }

    return (
        <LoginAndSignUp>
            <img src={logo} alt=""/>
            <form onSubmit={sendData}>
                <input type="text" placeholder="Nome" value = {name} onChange={(e) => setName(e.target.value)} required/>
                <input type="email" placeholder='E-mail' value = {email} onChange={(e) => setEmail(e.target.value)} required/>
                <input type="password" placeholder='Senha' value = {password} onChange={(e) => setPassword(e.target.value)} required/>
                <input type="password" placeholder='Confirme a Senha' value = {passwordConfirmed} onChange={(e) => setPasswordConfirmed(e.target.value)} required/>
                <button type="submit">Cadastrar</button>
            </form>
            <Link to="/"><p>Já tem uma conta? Entre agora!</p></Link>
        </LoginAndSignUp>
    )
}