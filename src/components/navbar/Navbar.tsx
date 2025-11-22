import { useState } from "react";


export default function Navbar() {

    const [expanded, setExpanded] = useState(false);
    return (
        <header>
            <nav className={`nav collapsible ${expanded ? 'collapsible--expanded' : ''}`}>
                <a aria-label="Moshify" className="nav__brand" href="/">
                    <img src="/images/logo.svg" alt="" />
                </a>
                <svg onClick={() => setExpanded(!expanded)} className="icon icon--white nav__toggler">
                    <use href="/images/sprite.svg#menu"></use>
                </svg>
                <ul className="list nav__list collapsible__content">
                    <li className="nav__item">
                        <a target="_blank" href="https://codewithmosh.com">Hosting</a>
                    </li>
                    <li className="nav__item">
                        <a target="_blank" href="https://codewithmosh.com">VPS</a>
                    </li>
                    <li className="nav__item">
                        <a target="_blank" href="https://codewithmosh.com">Domain</a>
                    </li>
                    <li className="nav__item">
                        <a target="_blank" href="https://codewithmosh.com">Pricing</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}