import React from 'react'
import styled from 'styled-components';

const StyledUserCardSection = styled.section`
  margin-bottom:30px;
  cursor:pointer;
  padding:15px 25px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  width:100%;
  background-color:lightblue;
  height:70px;
  border-radius:10px;
  @media (max-width: 768px){
    height:auto;
    padding:15px 15px;
    margin-bottom:15px;
}
`;

const StyledTitle = styled.div`
  font-size:18px;
  @media (max-width: 768px){
    font-size:15px;
}
`;

const UserCard = ({ userDetails, posts }) => {

    const { id } = userDetails;
    const userPosts = posts.filter(post => post.userId === id)

    return (
        <>
            <StyledUserCardSection >
                <StyledTitle >Name : {userDetails.name}</StyledTitle>
                <StyledTitle >Posts : {userPosts.length}</StyledTitle>
            </StyledUserCardSection>
        </>
    )
}

export default UserCard