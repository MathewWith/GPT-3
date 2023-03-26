import React from "react"

import { Header, Footer, Possibility, Blog, WhatGPT3, Features } from "./containers";
import { CTA, Brand, Navbar } from './components';
import './App.css';

export const App = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatGPT3 />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
        </div>
    )
}
