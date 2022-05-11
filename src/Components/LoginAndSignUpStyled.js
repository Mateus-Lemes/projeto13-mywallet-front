import styled from 'styled-components'

const LoginAndSignUp = styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

img {
    margin-bottom: 24px;
}

form {
    width:330px;


    input {
        width: 326px;
        height: 58px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        margin-bottom: 13px;
        font-size: 19px;
        font-weight: 400;
        padding-left: 11px;
        font-family: 'Raleway', sans-serif;

        &::placeholder {
            width: 300px;
            height: 23px;
            font-weight: 400;
            font-size: 20px;
            line-height: 23px;
            color: #000000;
        }

        &:focus {
            outline: 0;
        }

    }

    button{
        font-family: 'Raleway', sans-serif;
        width: 326px;
        height: 46px;
        background: #A328D6;
        border-radius: 5px;
        border: 0;
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;
        color: #FFFFFF;
        margin-bottom: 36px;
    }
}

p {
    width: 227px;
    height: 18px;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    text-align: center;
    color: #FFFFFF;
}

.opacity {
    opacity: 0.7;

    input {
        background: #f2f2f2;
        color: #AFAFAF;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
    }
}
a {
    text-decoration: none;
}
`

export default LoginAndSignUp