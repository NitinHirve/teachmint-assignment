import React from 'react'
import styled from 'styled-components';

const StyledProfilePageTitle = styled.div`
  font-weight:300;
  font-size:20px;
  padding:20px;
  width:100%;
  height:80px;
  display:flex;
  align-items:center;
  justify-content:center;
`;

const StyledUserProfile = styled.section`
  padding:0px 30px;
  background-color:#f7fffd;
  border-radius:5px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  width:100%;
  height:120px;

  @media (max-width:768px){
    padding:15px;
    flex-direction:column;
    align-items:start;
    justify-content:center;
    gap:15px;
    height:auto;

  }
`;

const StyledUserName = styled.div`
  font-size:19px;
  font-weight:500;
  color:#343635;
`;

const StyledCatchPhrase = styled.div`
  color: #8c8f8d;
`;

const StyledSubDetails = styled.div`
  color: #484a49;
`;


const UserProfile = ({ user }) => {
    return (
        <>
            <StyledProfilePageTitle>
                Profile Page
            </StyledProfilePageTitle>
            <StyledUserProfile>
                <section>
                    <StyledUserName>{user?.name}</StyledUserName>
                    <StyledCatchPhrase>{user?.username} | {user?.company?.catchPhrase}</StyledCatchPhrase>
                </section>
                <section>
                    <StyledSubDetails>{user?.address?.suite}, {user?.address?.street}, {user?.address?.city}, {user?.address?.zipcode}</StyledSubDetails>
                    <StyledSubDetails>{user?.email} | {user?.phone}</StyledSubDetails>
                </section>
            </StyledUserProfile>
        </>
    )
}

export default UserProfile