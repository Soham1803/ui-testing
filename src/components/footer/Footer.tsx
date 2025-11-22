
import Collapsible from "./Collapsible";

export default function Footer() {
    return (
        <footer className="block block--dark footer">
            <div className="container grid footer__sections">
                <Collapsible title="Products">
                    <ul className="list">
                        <li><a href="#">Website Hosting</a></li>
                        <li><a href="#">Free Automated Wordpress</a></li>
                        <li><a href="#">Migrations</a></li>
                    </ul>
                </Collapsible>
                <Collapsible title="Company">
                    <ul className="list">
                        <li><a href="#">About</a></li>
                        <li><a href="#">Affiliates</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </Collapsible>
                <Collapsible title="Support">
                    <ul className="list">
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Knowledge Base</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </Collapsible>
                <Collapsible title="Domains">
                    <ul className="list">
                        <li><a href="#">Domain Checker</a></li>
                        <li><a href="#">Domain Transfer</a></li>
                        <li><a href="#">Free Domain</a></li>
                    </ul>
                </Collapsible>
                <div className="footer__brand">
                    <img src="images/logo.svg" alt="" />
                    <p className="footer__copyright">Copyright 2020 Mosh Hamedani</p>
                </div>
            </div>
        </footer>

    );
}