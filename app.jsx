import React from "https://cdn.skypack.dev/react";
import {render} from "https://cdn.skypack.dev/react-dom";


function Navbar() {
    return <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Koba Production</a>
            <button className="navbar-toggler button-sm" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/index.html">Home</a>
                    </li>

                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarOrganizationDropdown" role="button"
                           data-bs-toggle="dropdown" aria-expanded="false">
                            Organization
                        </a>
                        <ul className="dropdown-menu p-2" aria-labelledby="navbarOrganizationDropdown">
                            <li className="nav-item">
                                <a target="_blank" href="https://github.com/KobaProduction/">Page on GitHub</a>
                            </li>
                            <li className="nav-item">
                                <a target="_blank" href="https://t.me/koba_production">Telegram Channel</a>
                            </li>
                            <li className="nav-item">
                                <a target="_blank" href="https://t.me/koba_production_chat">Telegram Chat</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
}


function App() {
    return <div className="container-fluid p-0">
        <Navbar/>
        <h1>Hello World</h1>
        <p>I'm hosted with GitHub Pages.</p>
    </div>;
}

render(<App/>, document.getElementById('root'));
