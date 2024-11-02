import React, { useState } from 'react';
import ChallengeCard from '../components/ChallengeCard';
import FilterSidebar from '../components/FilterSidebar';
import Footer from '../components/Footer';

function ChallengesPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedState, setSelectedState] = useState("All");

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    };

    const handleStateSelect = (state) => {
        setSelectedState(state);
    };

    const challenges = [
        { title: "Unsolved Challenge", description: "This challenge has not been solved.", tag: "Pwn", isSolved: false },
        { title: "Solved Challenge", description: "This challenge has been solved.", tag: "Web", isSolved: true },
        { title: "Another Challenge", description: "This is a miscellaneous challenge.", tag: "Misc", isSolved: false },
        { title: "Reversing Challenge", description: "Reverse engineering required.", tag: "Reversing", isSolved: true },
    ];

    const filteredChallenges = challenges.filter((challenge) => {
        const categoryMatches = selectedCategory === "All" || challenge.tag === selectedCategory;
        
        const stateMatches =
            selectedState === "All" ||
            (selectedState === "Solved" && challenge.isSolved) ||
            (selectedState === "Unsolved" && !challenge.isSolved);

        return categoryMatches && stateMatches;
    });

    return (
        <div style={mainContainerStyle}>
            <div style={titleContainerStyle}>
                <h1 style={headerTextStyle}>Challenges</h1>
            </div>
            <div style={contentWrapperStyle}>
                <FilterSidebar 
                    selectedCategory={selectedCategory}
                    onSelectCategory={handleCategorySelect}
                    selectedState={selectedState}
                    onSelectState={handleStateSelect}
                />
                <div style={contentContainerStyle}>
                    {filteredChallenges.map((challenge, index) => (
                        <ChallengeCard 
                            key={index}
                            title={challenge.title}
                            description={challenge.description}
                            tag={challenge.tag}
                            isSolved={challenge.isSolved}
                        />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

const mainContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: '100vh',
    textAlign: 'center',
    margin: 0,
};

const titleContainerStyle = {
    marginTop: '12vh',
    marginBottom: '30px',
    width: '100%',
    textAlign: 'center',
    padding: '20px 0',
};

const headerTextStyle = {
    color: 'var(--dark-blue)',
    marginBottom: '2px',
};

const contentWrapperStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    paddingLeft: '100px',
    width: '100%',
    padding: '20px',
    boxSizing: 'border-box',
    flexGrow: 1,
};

const contentContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    rowGap: '10px',
    columnGap: '10px',
    width: '100%',
    marginLeft: '300px',
    marginRight: '100px',
    boxSizing: 'border-box',
    justifyItems: 'center',
    alignItems: 'start',
};


export default ChallengesPage;
