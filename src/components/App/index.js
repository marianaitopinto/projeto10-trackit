import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Login";
import Register from "../Register";
import Habits from "../Habits";
import Today from "../Today";
import Historic from "../Historic";
import Header from "../Header";
import Footer from "../Footer";

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/habits" element={<Habits />} />
                    <Route path="/today" element={<Today />} />
                    <Route path="/historic" element={<Historic />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}