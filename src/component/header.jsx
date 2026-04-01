import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../style/header-footer.css";
import logo from "../assets/logo1.png";
import mobilelogo from "../assets/mobile-logo.jpeg";
import { changeLanguage } from "./changelanguage";

const Header = () => {
    const [langOpen, setLangOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const langRef = useRef(null);

    // Close when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (langRef.current && !langRef.current.contains(e.target)) {
                setLangOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    return (
        <header>
            {/* Top Bar */}
            <div className="header-top d-flex gap-5 justify-content-end">
                <div className="header-top-gmail header-top-social d-flex gap-2 align-items-center">
                    <i className="fa-solid fa-envelope"></i>
                    <span className="lang" data-key="topheader_mail_text">Myfest.co.in</span>
                </div>

                <div className="header-top-number header-top-social d-flex gap-2 align-items-center">
                    <i className="fa-solid fa-phone"></i>
                    <span className="lang" data-key="topheader_phone_text">9324505363</span>
                </div>

                {/* LANGUAGE DROPDOWN */}
                <div
                    className="header-top-language header-top-social d-flex gap-2 align-items-center lang"
                    ref={langRef}
                    onClick={() => setLangOpen(!langOpen)}
                >
                    <i className="fa-solid fa-globe"></i>
                    <i className="bi bi-caret-down-fill"></i>

                    <div className={`header-top-language-option ${langOpen ? "show" : ""}`}>
                        <span onClick={() => changeLanguage("en")} className="lang pb-2" data-key="language_english">English</span>
                        <span onClick={() => changeLanguage("mr")} className="lang" data-key="language_marathi">Marathi</span>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <Link className="navbar-brand pc" to="/" data-key="navbar_brand">
                        <img src={logo} alt="Logo" className="header-logo" />
                    </Link>
                    <Link className="navbar-brand mobile" to="/" data-key="navbar_brand">
                        <img src={mobilelogo} alt="Logo" className="header-logo" />
                    </Link>

                    <div className="manu-icon">
                        <span className="navbar-toggler-icon" onClick={() => setMenuOpen(!menuOpen)}></span>
                    </div>

                    <div className={`navbar-btn-hlp gap-3 ${menuOpen ? "show" : ""}`}>
                        <button type="button" className="btn btn-primary navbar-btn lang" data-key="nav_silver_plan">
                            Silver Plan
                        </button>
                        <button type="button" className="btn btn-primary navbar-btn lang" data-key="nav_gold_plan">
                            Gold Plan
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
