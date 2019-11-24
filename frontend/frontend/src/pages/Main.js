import React from 'react';

import logo from '../assets/logo.svg';

export default function Main({ match }) {
return (
    <div className="main-container">
        <img src={logo} alt="Tindev" />
        <ul>
            <li>
                <img src="https://www.papagaiosempenas.pt/wp-content/uploads/2019/02/Cabeleira-de-Palha%C3%A7o-Multicolor-1-600x471.jpg" alt="" />
                <footer>
                    <strong>Palhaco</strong>
                    <p>Palhaco Palhaco Palhaco Palhaco Palhaco Palhaco Palhaco</p>
                </footer>

                <div className="buttons">
                    <button type="button">
                        
                    </button>
                </div>
            </li>
        </ul>
    </div>
)
}