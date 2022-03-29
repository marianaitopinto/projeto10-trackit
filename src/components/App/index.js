import ReactDOM from "react-dom";
import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Login";
import Register from "../Register";
import Habits from "../Habits";
import Today from "../Today";
import Historic from "../Historic";
import Header from "..Header"
import Footer from "../Footer"

export default function App() {
    return (
        <>
        <Header/>
        <Login></Login>
        <Register></Register>
        <Habits></Habits>
        <Today></Today>
        <Historic></Historic>
        <Footer/>
        </>
    )
}