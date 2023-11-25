import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import UserCard from '../molecules/UserCard'
import { USERS, POSTS } from '../../App'

const StyledTitle = styled.div`
  font-weight:300;
  font-size:20px;
  padding:20px;
  width:100%;
  height:80px;
  display:flex;
  align-items:center;
  justify-content:center;
`;

const UserCardList = () => {

    const users = useContext(USERS)
    const posts = useContext(POSTS)

    return (
        <>
            <StyledTitle>Directory</StyledTitle>
            {
                users.length > 0 && (
                    users.map((userDetails, i) => (
                        <>
                            <Link key={i} to={`/users/${userDetails.id}`}>
                                <UserCard key={userDetails.id} userDetails={userDetails} posts={posts} />
                            </Link>
                        </>
                    ))
                )
            }

        </>
    )
}

export default UserCardList