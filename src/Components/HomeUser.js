import styled from 'styled-components';
import UserContext from '../context/UserContext';
import { useContext, useState, useEffect } from 'react';
import  { Link } from 'react-router-dom';
import { ThreeDots } from "react-loader-spinner";
import axios from 'axios';

export default function HomeUser() {
    const [loading, setLoading] = useState(false);
    const {headers, name} = useContext(UserContext);
    // const [data, setData] = useState(null);

    useEffect(()=> {
        console.log("passei por aqui")
        const required = axios.get("http://localhost:5000/home-user", headers);
        required.then((response)=> {
            setLoading(true); 
            // setData(response.data);
            console.log(response.data)
            
        })
        required.catch((request) => {alert("Erro no servidor, tela do plano!"); setLoading(true); console.log(request)}) // eslint-disable-next-line
    }, []) 


    return loading === false ? (
        <section>
            <p className="p">loading...</p>
            <ThreeDots color="#FFFFFF" width={298} height={15} />
        </section>
    ) : (
        <HomeUserStyled>
            <header>
                <h1>Olá, {name}</h1>
            </header>
            <section>
                <p>Não há regristo de entrada ou saída</p>
            </section>
            <div className='buttons'>
                <Link to="/add-positive-value">
                    <div>
                        <p>+</p>
                        <p>Nova entrada</p>
                    </div>
                </Link>
                <Link to="/add-negative-value">
                    <div>
                        <p>-</p>
                        <p>Nova saída</p>
                    </div>
                </Link>
            </div>
        </HomeUserStyled>    
    )
}

const HomeUserStyled = styled.main`
header {
    display: flex;
    align-items: center;
    height: 78px;
    width: 326px;
    margin: auto;

    h1 {
    width: 326px;
    height: 31px;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    color: #FFFFFF;
    }
}

section {
    margin: auto;
    width: 326px;
    height: 446px;
    background: #FFFFFF;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        text-align: center;
        width: 180px;
        height: 46px;
        color: #868686;
    }
}

.buttons {
    display: flex;
    width: 326px;
    margin: auto;
    justify-content: space-between;
    margin-top: 13px;

    div {
        padding: 10px;
        width: 155px;
        height: 114px;
        background: #A328D6;
        border-radius: 5px;
        
        p:first-child {
            font-size: 30px;
            font-weight: normal;
            border-radius: 36px;
            border: 1px solid #FFFFFF;
            width: 21.88px;
            height: 22.88px;
            text-align: center;
            margin-bottom: 30px;
        }
        
        p {
            width: 64px;
            height: 40px;
            font-weight: 700;
            font-size: 17px;
            line-height: 20px;
            color: #FFFFFF;
        }
    }
}

`