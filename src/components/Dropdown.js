import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(null);
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
        <div style={mainContainerStyle} ref={dropdownRef}>
            <button style={settingsButtonStyle} onClick={toggleDropdown}>
                Settings<span style={dropdownArrowStyle}>{isOpen ? "▲" : "▼"}</span>          
            </button>
            {isOpen && (
                <div style={dropdownBoxStyle}>
                    {pages.map((page, index) => (
                        <Link 
                            key={index} 
                            to={page.link} 
                            style={dropdownMenuLinkStyle(hoveredIndex === index)}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {page.value}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Dropdown;

const mainContainerStyle = {
    position: 'relative',
    backgroundColor: 'transparent',
};

const settingsButtonStyle = {
    border: 'none',
    textDecoration: 'none',
    backgroundColor: 'transparent',
    fontSize: '16px',
    cursor: 'pointer'
};

const dropdownArrowStyle = {
    backgroundColor: 'transparent',
};

const dropdownBoxStyle = {
    position: 'absolute',
    top: '100%',
    backgroundColor: 'white',
    borderRadius: '5px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    zIndex: 'inherit',
    minWidth: '150px',
    marginTop: '5px',
};

const dropdownMenuLinkStyle = (isHovered) => ({
    display: 'block',
    padding: '10px 16px',
    margin: '4px',
    textDecoration: 'none',
    color: isHovered ? '#006e93' : '#333',
    transition: 'background-color 0.2s',
    borderRadius: '8px',
    backgroundColor: isHovered ? '#f1f3f7' : 'transparent',
});
