import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ChallengeInfoCard from "./ChallengeInfoCard";
import "../styles/ChallengeList.css";
import SearchBar from "./SearchBar";
import AddButton from "./AddButton";
import axios from "axios";

const ChallengeList = () => {
    // const [challenges, setChallenges] = useState([]);
    const [challenges, setChallenges] = useState([
        { id: 1, name: "chall 1", category: "category 1", tag: "tag1", state: "visible" },
        { id: 2, name: "chall 2", category: "category 2", tag: "tag2", state: "visible" },
        { id: 3, name: "chall 3", category: "category 3", tag: "tag3", state: "hidden" },
    ]);

    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    // const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhc2RmIiwiZXhwIjoxNzMxOTMzNTA0fQ.4GrjryrG6ZCsWXPN4aZf4tsAlZMnfPvb2QUv3SeTjmM";


    // useEffect(() => {
    //     const fetchChallenges = async () => {
    //         try {
    //             const response = await axios.get("https://sssp.live/api/v1/challenges/get_all_challenge", {
    //                 headers: {
    //                     'Authorization': `Bearer ${token}`
    //                 }
    //             });
    //             setChallenges(response.data);
    //         } catch (error) {
    //             console.error("API 요청 오류:", error.response ? error.response.data : error.message);
    //         }
    //     };

    //     fetchChallenges();
    // }, []);

    const handleEdit = (challengeId) => {
        const challengeToEdit = challenges.find(challenge => challenge.id === challengeId);
        navigate(`/edit-challenge/${challengeId}`, { state: { challenge: challengeToEdit } });
    };

    const handleDelete = (challengeId) => {
        if (window.confirm("정말로 이 챌린지를 삭제하시겠습니까?")) {
            const updatedChallenges = challenges.filter(challenge => challenge.id !== challengeId);
            setChallenges(updatedChallenges);
        }
    };

    const filteredChallenges = challenges.filter(challenge =>
        (challenge.name && challenge.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (challenge.category && challenge.category.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (challenge.tag && challenge.tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <div className="challenge-list">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <div style={{ padding: '6px 6px', width: '100%' }}>
                <AddButton element="challenge" />
            </div>
            <div style={{ padding: '6px 6px', width: '100%', overflowY: 'auto', maxHeight: '400px' }}>
                {filteredChallenges.map(challenge => (
                    <ChallengeInfoCard
                        key={challenge.id}
                        title={challenge.name}
                        category={challenge.category}
                        tag={challenge.tag}
                        state={challenge.state}
                        onEdit={() => handleEdit(challenge.id)}
                        onDelete={() => handleDelete(challenge.id)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ChallengeList;
