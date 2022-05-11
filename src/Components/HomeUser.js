import styled from 'styled-components';
import UserContext from '../context/UserContext';
import { useContext, useState, useEffect } from 'react';
import  { Link } from 'react-router-dom';
import { ThreeDots } from "react-loader-spinner";
import axios from 'axios';

export default function HomeUser() {
    const [loading, setLoading] = useState(false);
    const {headers, name} = useContext(UserContext);
    const [deposits, setDeposits] = useState([]);
    const [withdrawals, setWithdrawals] = useState([]);
    let total = 0;

    useEffect(()=> {
        console.log("passei por aqui")
        const required = axios.get("http://localhost:5000/home-user", headers);
        required.then((response)=> {
            setLoading(true);
            setDeposits(response.data.deposits);
            setWithdrawals(response.data.withdrawals);
            console.log(response.data);
        })
        required.catch((request) => {alert("Erro no servidor!"); setLoading(true); console.log(request)}) // eslint-disable-next-line
    }, [])



    return loading === false ? (
            <Loading>
                <p>loading...</p>
                <ThreeDots color="#FFFFFF" width={298} height={15} />
            </Loading>
    ) : withdrawals.length === 0 && deposits.length === 0 ? (
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
    ) : (
        <HomeUserStyled>
            <header>
                <h1>Olá, {name}</h1>
            </header>
            <article className='section'>
                <h2>Depósitos</h2>
                {deposits.map((deposit)=> {
                    total += parseInt(deposit.value);
                    return <div key={deposit._id} className='description'>
                                <p><span className='date'> {deposit.date}   </span> {deposit.description}</p> <span className='green'>{deposit.value}</span>
                            </div>
                })}
                <h2>Retiradas</h2>
                {withdrawals.map((withdrawal)=> {
                    total -= parseInt(withdrawal.value);
                    return <div key={withdrawal._id} className='description'>
                                <p><span className='date'> {withdrawal.date}   </span>{withdrawal.description}</p> <span className='red'>{withdrawal.value}</span>
                            </div>
                })}
                <Div total = {total} className='total'>
                    <p>Total:</p> <span>{Math.abs(total)}</span>
                </Div>
            </article>
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

function totalColor(p) {
    if (p >= 0) {
        return '#03AC00';
    } else if (p < 0) {
        return '#C70000';
    }
}

const Div = styled.div`
    span {
        color: ${({total}) => totalColor(total)};
    }
`

const Loading = styled.section`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
        margin-bottom: 10px;
        font-size: 40px;
        color: #FFFFFF;
    }
`
const HomeUserStyled = styled.main`

.green {
    color: #03AC00;
}

.red {
    color: #C70000;
}

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

.section {
    position:relative;
    overflow-y: scroll;
    padding: 10px;
    margin: auto;
    width: 326px;
    height: 446px;
    background: #FFFFFF;
    border-radius: 5px;
    display: flex;
    flex-direction:column;
    h2 {
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 5px;
    }
    
    div {
        display: flex;
    }

    p {
        font-weight: 400;
        font-size: 16px;
        line-height: 23px;
        width: 270px;
        height: 46px;
        color: #000000;

        .date {
            color: #C6C6C6;
        }
    }
    .total {
    position: absolute;
    bottom: 0;
}
}

section {
    margin: auto;
    width: 326px;
    height: 446px;
    background: #FFFFFF;
    border-radius: 5px;
    display: flex;
    flex-direction:column;
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