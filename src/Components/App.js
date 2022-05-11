import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage";
import GlobalStyle from "./GlobalStyle";
import SignUpPage from "./SignUpPage";
import HomeUser from "./HomeUser";
import AddPositiveValue from "./AddPositiveValue";
import AddNegativeValue from "./AddNegativeValue";
import UserContext from "../context/UserContext";
import { useState } from "react";

export default function App() {
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [name, setName] = useState(localStorage.getItem("name"))
    const headers = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }


        return (
            <UserContext.Provider value={{token, setToken, name, setName, headers}}>
                <BrowserRouter>
                    <GlobalStyle />
                    <Routes>
                        <Route path="/" element={<LoginPage />} />
                        <Route path="/sign-up" element={<SignUpPage />} />
                        <Route path="/home-user" element={<HomeUser />} />
                        <Route path="/add-positive-value" element={<AddPositiveValue />} />
                        <Route path="/add-negative-value" element={<AddNegativeValue />} />
                    </Routes>
                </BrowserRouter>
            </UserContext.Provider>
        )
}