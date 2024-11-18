import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import '../styles/Dropdown.css';

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const pages = [
        { value: "Users", link: "/UserSettingPage" },
        { value: "Challenges", link: "/ChallSettingPage" },
        { value: "Notifications", link: "/NotiSettingPage" },
    ];

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="dropdown" ref={dropdownRef}>
            <button onClick={toggleDropdown}>Settings
                <span className="dropdown-arrow">{isOpen ? "▲" : "▼"}</span>
            </button>
            {isOpen && (
                <div className="dropdown-box">
                    {pages.map((page, index) => (
                        <Link key={index} to={page.link} className="dropdown-item">
                            {page.value}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dropdown;
