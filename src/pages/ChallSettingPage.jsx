import ChallengeList from '../components/ChallengeList';
import '../styles/ChallSettingPage.css';

const ChallSettingPage = () =>{
    return(
        <div className='challenges-settings'>
            <div className='settings-header'>
                <h1>Challenges</h1>     
            </div>
            <div className='settings-contents'>
                <ChallengeList/>
            </div>
        </div>
    );
};

export default ChallSettingPage;