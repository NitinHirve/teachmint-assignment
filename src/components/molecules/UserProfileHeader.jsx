import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import CountriesDropdown from '../atoms/CountriesDropdown'


const StyledUserProfileHeader = styled.section`
display:flex;
align-items:center;
justify-content:space-between;
@media (max-width: 550px){
    flex-direction:column;
    align-items:start;
    gap:10px;
}
`;

const StyledBackButton = styled.div`
cursor:pointer;
border-radius:5px;
width:80px;
display:flex;
align-items:center;
justify-content:center;
height:30px;
background-color:#deedff;
`;

const StyledHeaderRightSection = styled.section`
display:flex;
flex-wrap:wrap;
align-items:center;
gap:20px;
@media (max-width: 900px){
    gap:10px;
}
`;

const StyledTimer = styled.div`
color:#dbdbff;
border-radius:1px;
width:100px;
display:flex;
align-items:center;
justify-content:center;
height:30px;
background-color:#0b0b12;
`;

const StyledPauseStartButton = styled.div`
cursor:pointer;
border-radius:5px;
width:100px;
display:flex;
align-items:center;
justify-content:center;
height:30px;
background-color:#b6e69e;
`;


const UserProfileHeader = ({ countries, fetchCountryDetails, countryTime, togglePause }) => {
    return (
        <>
            <StyledUserProfileHeader>
                <Link to="/">
                    <StyledBackButton>
                        Back
                    </StyledBackButton>
                </Link>
                <StyledHeaderRightSection>
                    <CountriesDropdown
                        fetchCountryDetails={fetchCountryDetails}
                        countries={countries}
                    />
                    <StyledTimer>{countryTime}</StyledTimer>
                    <StyledPauseStartButton onClick={togglePause}>
                        Pause/Start
                    </StyledPauseStartButton>
                </StyledHeaderRightSection>
            </StyledUserProfileHeader>
        </>
    )
}

export default UserProfileHeader