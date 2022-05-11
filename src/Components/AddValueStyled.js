import styled from "styled-components";

const AddValue = styled.main`
width: 326px;
margin: auto;
h1 {
    width: 168px;
    height: 31px;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    color: #FFFFFF;
    margin-bottom:40px;
    padding-top: 25px;
}


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
`

export default AddValue;