import React from 'react'
import styled from 'styled-components';

const StyledUserPost = styled.div`
  flex: 0 0 calc(33.33% - 20px);
  background-color:#e3fcf4;
  border-radius:6px;
  padding:30px;
  min-height:250px;
  cursor:pointer;
  @media (max-width: 900px){
    width:100%;
    min-height:0px;
    height:auto;
    padding:20px;
}
`;

const StyledPostTitle = styled.div`
  color:#3b3a3a;
  font-weight:500;
  min-height:50px;
  margin-bottom:10px;
`;

const StyledPostBody = styled.div`
  color:#484a49;
`;

const UserPost = ({ setCurrentPost, togglePopup, post }) => {

    const handlePostClick = () => {
        setCurrentPost(post)
        togglePopup();
    }

    return (
        <>
            <StyledUserPost onClick={handlePostClick} >
                <StyledPostTitle>{post?.title}</StyledPostTitle>
                <StyledPostBody>{post?.body}</StyledPostBody>
            </StyledUserPost>
        </>
    )
}

export default UserPost