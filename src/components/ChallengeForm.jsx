import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import '../styles/ChallengeForm.css';

const ChallengeForm = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const challenge = location.state?.challenge || null;

    const [title, setTitle] = useState(challenge ? challenge.title : "");
    const [category, setCategory] = useState(challenge ? challenge.category : "");
    const [description, setDescription] = useState(challenge ? challenge.description : "");
    const [flag, setFlag] = useState(challenge ? challenge.flag : "");
    const [tag, setTag] = useState(challenge ? challenge.tag : "");
    const [value, setValue] = useState(challenge ? challenge.value : "0");
    // const [state, setState] = useState(challenge ? challenge.state : "");
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
            // setState(challenge.state);
            setFileName(challenge.fileName);
        }
    }, [challenge]);

    const handleSubmit = (e) => {
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
            // state,
            fileName
        };


        setTitle("");
        setCategory("");
        setDescription("");
        setFlag("");
        setTag("");
        setValue("");
        // setState("visible");
        setFileName("");

        navigate("/ChallSettingPage");
    };

    return (
        <div className="chall-info-edit">
            <h1>Challenges</h1>
            <div className="challenge-container">
                <form action="#" className="challenge-form" onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="input-box">
                            <label>Title</label>
                            <input placeholder="Type the challenge's title" value={title} onChange={(e) => setTitle(e.target.value)} />
                        </div>
                        <div className="input-box category">
                            <label>Category</label>
                            <input placeholder="Type the challenge's category" value={category} onChange={(e) => setCategory(e.target.value)} />
                        </div>
                    </div>
                    <div className="input-box description">
                        <label>Description</label>
                        <textarea placeholder="Type the description" value={description} onChange={(e) => setDescription(e.target.value)} />
                    </div>
                    <div className="input-box">
                        <label>Flag</label>
                        <input placeholder="The flag is SSSP{}" value={flag} onChange={(e) => setFlag(e.target.value)} />
                    </div>
                    <div className="row">
                        <div className="input-box">
                            <label>Tag</label>
                            <input type="text" placeholder="tag" value={tag} onChange={(e) => setTag(e.target.value)} />
                        </div>
                        <div className="input-box">
                            <label>Value</label>
                            <input type="number" value={value} onChange={(e) => setValue(e.target.value)} />
                        </div>
                        <div className="input-box"> {/*state 였던 것*/}
                            {/* <label>State</label>
                            <select value={state} onChange={(e) => setState(e.target.value)}>
                                <option value="visible">visible</option>
                                <option value="hidden">hidden</option>
                            </select> */}
                        </div>
                    </div>
                    <div className="input-box file-upload">
                        <label htmlFor="file">File</label>
                        <div className="row" style={{alignItems:'center'}}>
                            {fileName && <div className="uploaded-file">{fileName}</div>}
                            <input type="file" id="file" style={{ display: 'none' }} onChange={handleFileChange} />
                            <button type="button" className="file-upload-button" onClick={handleFileUpload}>upload file →</button>
                        </div>
                    </div>
                    <button type='button' className="submit-button">submit →</button>
                </form>
            </div>
        </div>
    );
};

export default ChallengeForm;
