import React from "react";
import './Header.css';

const Header = () => {
    return <div>
        <header className="header">
            <h1>React Meals</h1>
            <button>
                <h2>Your Cart <span>0</span></h2>
            </button>
        </header>
        <img src="https://i.pinimg.com/736x/06/ed/42/06ed4211eff090878101f035a02a9e31.jpg" />
    </div>
}

export default Header;