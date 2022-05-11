import AddValue from "./AddValueStyled"
import { useState, useContext } from "react"
import axios from "axios";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";

export default function AddPositiveValue() {
    const [value, setValue] = useState("");
    const [description, setDescription] = useState("");
    const {headers} = useContext(UserContext);
    const navigate = useNavigate();

    function sendPositiveValue(e) {
        e.preventDefault()

        const body = {
            value,
            description
        }

        const required = axios.post("http://localhost:5000/add-positive-value", body, headers);
        required.then(()=> {
            navigate("/home-user");
        })

        required.catch(()=> alert("erro no servidor"));
    }

    return (
        <AddValue>
            <h1>Nova Entrada</h1>
            <form onSubmit={sendPositiveValue}>
                <input type="number" placeholder='Valor' value = {value} onChange={(e) => setValue(e.target.value)} required/>
                <input type="text" placeholder='Descrição' value = {description} onChange={(e) => setDescription(e.target.value)} required/>
                <button type="submit">Salvar entrada</button>
            </form>
        </AddValue>
    )
}