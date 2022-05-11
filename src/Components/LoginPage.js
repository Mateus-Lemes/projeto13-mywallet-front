import LoginAndSignUp from "./LoginAndSignUpStyled";
import logo from "../Img/MyWallet.png"
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import UserContext from "../context/UserContext";


export default function LoginPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const object = useContext(UserContext);

    const body = {
        email,
        password
    }

    function Login(event){
        event.preventDefault();
        
        const promise = axios.post("http://localhost:5000/", body);
        promise.then((response)=> {
            const {token, name} = response.data
            object.setToken(token);
            object.setName(name);
            localStorage.setItem("token", token);
            localStorage.setItem("name", name);
            navigate("/home-user");
        })
        
        promise.catch(() => {alert("Email e/ou senha inválido(s), tente novamente!")});
    }
        
    return (
        <LoginAndSignUp>
            <img src={logo} alt=""/>
            <form onSubmit={Login}>
                <input type="email" placeholder='E-mail' value = {email} onChange={(e) => setEmail(e.target.value)} required/>
                <input type="password" placeholder='Senha' value = {password} onChange={(e) => setPassword(e.target.value)} required/>
                <button type="submit">Entrar</button>
            </form>
            <Link to="/sign-up"><p>Primeira vez? Cadastre-se!</p></Link>
        </LoginAndSignUp>
    )
}