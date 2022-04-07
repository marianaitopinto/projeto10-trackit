import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "../../context/UserContext";
import LoginPage from "../LoginPage";
import Register from "../Register";
import Habits from "../Habits";
import Today from "../Today";
import Historic from "../Historic";

import { GlobalStyle } from "../App/styles.js"

export default function App() {
    const [token, setToken] = useState("");
    const [photo, setPhoto] = useState();
    const [habitsCompleted, setHabitsCompleted] = useState(0);
    
    return (
        <>
            <UserContext.Provider value={{ token, setToken, photo, setPhoto, habitsCompleted, setHabitsCompleted }}>
                <GlobalStyle />
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<LoginPage />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/habits" element={<Habits />} />
                        <Route path="/today" element={<Today />} />
                        <Route path="/historic" element={<Historic />} />
                    </Routes>
                </BrowserRouter>
            </UserContext.Provider>
        </>
    )
}