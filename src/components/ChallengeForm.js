import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function ChallengeForm() {
    const navigate = useNavigate();
    const location = useLocation();
    const challenge = location.state?.challenge || null;
    const [isUploadHovered, setIsUploadHovered] = useState(false);
    const [isSubmitHovered, setIsSubmitHovered] = useState(false);

    const [title, setTitle] = useState(challenge ? challenge.title : "");
    const [category, setCategory] = useState(challenge ? challenge.category : "");
    const [description, setDescription] = useState(challenge ? challenge.description : "");
    const [flag, setFlag] = useState(challenge ? challenge.flag : "");
    const [tag, setTag] = useState(challenge ? challenge.tag : "");
    const [value, setValue] = useState(challenge ? challenge.value : "");
    const [state, setState] = useState(challenge ? challenge.state : "");
    const [fileName, setFileName] = useState(challenge ? challenge.file : '');

    const handleFileUpload = () => {
        document.getElementById('file').click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFileName(file.name);
        }
    };

    useEffect(() => {
        if (challenge) {
            setTitle(challenge.title);
            setCategory(challenge.category);
            setDescription(challenge.description);
            setFlag(challenge.flag);
            setTag(challenge.tag);
            setValue(challenge.value);
            setState(challenge.state);
            setFileName(challenge.fileName);
        }
    }, [challenge]);

    const handleSubmitClick = (e) => {
        e.preventDefault();
        if (!title || !category || !description || !flag) {
            alert("모든 필드를 채워주세요.");
            return;
        }

        const updatedChallenge = {
            id: challenge ? challenge.id : Date.now(),
            title,
            category,
            description,
            flag,
            tag,
            value,
            state,
            fileName
        };


        setTitle("");
        setCategory("");
        setDescription("");
        setFlag("");
        setTag("");
        setValue("");
        setState("visible");
        setFileName("");

        navigate("/ChallSettingPage");
    };

    return (
        <div style={mainContainerStyle}>
            <div style={titleContainerStyle}>
                <h1 style={headerTextStyle}>Challenge</h1>
            </div>
            <div style={contentContainerStyle}>
                <form style={formContainerStyle} onSubmit={handleSubmitClick}>
                    <div style={rowformFieldStyle}>
                        <div style={formFieldStyle}>
                            <label style={labelStyle}>Title</label>
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                style={inputStyle}
                            />
                        </div>
                        <div style={formFieldStyle}>
                            <label style={labelStyle}>Category</label>
                            <input
                                type="text"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                style={inputStyle}
                            />
                        </div>
                    </div>
                    <div style={rowformFieldStyle}>
                        <div style={formFieldStyle}>
                            <label style={labelStyle}>Description</label>
                            <textarea
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                style={textareaStyle}
                            />
                        </div>
                    </div>
                    <div style={rowformFieldStyle}>
                        <div style={formFieldStyle}>
                            <label style={labelStyle}>Value</label>
                            <input 
                                type="number" 
                                value={value} 
                                onChange={(e) => setValue(e.target.value)}
                                style={inputStyle} 
                            />
                        </div>
                        <div style={formFieldStyle}>
                            <label style={labelStyle}>State</label>
                            <select value={state} 
                                onChange={(e) => setState(e.target.value)}
                                style={selectStyle}
                            >
                                <option value="visible">visible</option>
                                <option value="hidden">hidden</option>
                            </select>
                        </div>
                    </div>
                    <div style={formFieldStyle}>
                        <label style={labelStyle}>File</label>
                        <div style={rowformFieldStyle}>
                            {fileName && <span>Selected file: {fileName}</span>}
                            <input type="file" id="file" style={{ display: 'none' }} onChange={handleFileChange} />
                            <div style={buttonContainerStyle}>
                                <button
                                    style={uploadButtonStyle(isUploadHovered)}
                                    onMouseEnter={() => setIsUploadHovered(true)}
                                    onMouseLeave={() => setIsUploadHovered(false)}
                                    onClick={handleFileUpload}
                                    type="button" // type을 "button"으로 수정
                                >
                                    Upload file →
                                </button>
                            </div>
                        </div>
                    </div>
                    <div style={buttonContainerStyle}>
                        <button
                            style={submitButtonStyle(isSubmitHovered)}
                            onMouseEnter={() => setIsSubmitHovered(true)}
                            onMouseLeave={() => setIsSubmitHovered(false)}
                            type="submit"
                        >
                            Submit →
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ChallengeForm;

const mainContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    top: 0,
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 80px',
};

const titleContainerStyle = {
    marginTop: '12vh',
    textAlign: 'center',
    padding: '20px 0',
};

const headerTextStyle = {
    color: 'var(--dark-blue)',
    marginBottom: '2px',
};

const contentContainerStyle = {
    marginTop: '20px',
    position: 'relative',
    backgroundColor: 'transparent',
    width: 'fit-content',
    padding: '24px',
    borderRadius: '8px',
    boxShadow: '0 0 8px lightgray',
    height: 'fit-content',
};

const formContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    width:'600px',
    padding: '12px',
};

const rowformFieldStyle = {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    gap: '12px',
    alignItems: 'center',
}

const formFieldStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
};

const labelStyle = {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#006e93',
    marginBottom: '5px',
    textAlign: 'left',
};

const inputStyle = {
    padding: '12px',
    fontSize: '16px',
    borderRadius: '8px',
    border: '1px solid #D1D5DB',
    backgroundColor: 'white',
    color: '#707070',
    outline: 'none',
};

const textareaStyle = {
    padding: '12px',
    fontSize: '16px',
    borderRadius: '8px',
    border: '1px solid #D1D5DB',
    backgroundColor: 'white',
    color: '#707070',
    outline: 'none',
    height: '120px',
    resize: 'none',
};

const selectStyle = {
    padding: '12px',
    fontSize: '16px',
    borderRadius: '8px',
    border: '1px solid #D1D5DB',
    backgroundColor: 'white',
    color: '#707070',
    outline: 'none',
};

const buttonContainerStyle = {
    display: 'flex',
    gap: '10px',
    justifyContent: 'flex-start',
    alignItems: 'center',
};

const uploadButtonStyle = (isHovered) => ({
    color: isHovered ? 'white' : '#006e93',
    border: '1px',
    padding: '8px 16px',
    fontSize: '16px',
    borderRadius: '6px',
    cursor: 'pointer',
    textAlign: 'center',
    transition: 'background-color 0.3s',
    backgroundColor: isHovered ? '#006e93' : 'transparent',
});

const submitButtonStyle = (isHovered) => ({
    color: 'white',
    border: 'none',
    padding: '8px 16px',
    fontSize: '16px',
    borderRadius: '6px',
    cursor: 'pointer',
    textAlign: 'center',
    transition: 'background-color 0.3s',
    backgroundColor: isHovered ? '#005f7f' : '#006e93',
});
