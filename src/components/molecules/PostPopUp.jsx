import React from 'react'
import styled from 'styled-components';

const PopupWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledUserPost = styled.div`
  background-color:#e3fcf4;
  border-radius:6px;
  padding:30px;
  min-height:250px;
  width:350px;
  cursor:pointer;
  @media (max-width: 768px){
    width:85%;
    min-height:0px; 
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


const PostPopUp = ({ currentPost, popupRef, togglePopup }) => {
    return (
        <>
            <PopupWrapper>
                <StyledUserPost ref={popupRef}>
                    <StyledPostTitle>{currentPost?.title}</StyledPostTitle>
                    <StyledPostBody>{currentPost?.body}</StyledPostBody>
                </StyledUserPost>
            </PopupWrapper>
        </>
    )
}

export default PostPopUp