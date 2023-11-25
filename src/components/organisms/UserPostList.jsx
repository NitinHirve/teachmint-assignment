import React from 'react'
import styled from 'styled-components';

import UserPost from '../molecules/UserPost'

const StyledUserPostList = styled.section`
gap:20px;
min-height:250px;
margin-top:40px;
width:100%;
display:flex;
flex-wrap: wrap;
justify-content:space-between;

@media (max-width: 900px){
    flex-direction:column;
    width:100%;
    height:auto;
}
`;

const UserPostList = ({ setCurrentPost, togglePopup, posts }) => {
    return (
        <>
            <StyledUserPostList>
                {
                    posts.length > 0 && (
                        posts.map((post, i) => (
                            <UserPost setCurrentPost={setCurrentPost} togglePopup={togglePopup} key={i} post={post} />
                        ))
                    )
                }
            </StyledUserPostList>
        </>
    )
}

export default UserPostList