import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AddButton.css";


const AddButton = ({element}) => {

    const navigate = useNavigate();

    return (
        <button className="add-button" onClick={() => navigate(`/add-${element}`)}>
                <span className="plus-icon">+</span>
        </button>
    )
}

export default AddButton;

