import React from "react";
import logo from '../logo.svg'

export default function Header(){
    return (
        <header className="App-header">
            <div className="nav">
                <div className="navigation">
                    <img src={logo}  className="mb-3 nav-logo App-logo" alt="logo" />
                    <h2 className="nav-logo_text">React Facts</h2>
                </div>
                <div>
                    <h3 className="nav-title">React Course - Project 1</h3>
                </div>
            </div>
            </header>
    )
}