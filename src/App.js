import React, { useEffect, useState, createContext } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import UserCardList from './components/containers/UserCardList'
import UserDetails from './components/containers/UserDetails'

const StyledApp = styled.div`
  padding: 20px 100px;
  @media (max-width: 768px){
    padding: 20px 20px;
  }
`;


const USERS = createContext()
const POSTS = createContext()

const App = () => {

  const [users, setUsers] = useState([])
  const [posts, setPosts] = useState([])

  const fetchUserDetails = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');

      if (response.ok) {
        const data = await response.json()
        setUsers(data)
        localStorage.setItem('users', JSON.stringify(data))
      }
      else {
        throw new Error('Network error in fetchUserDetails')
      }
    } catch (err) {
      console.log(err.message)
    }
  }

  const fetchPostDetails = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (response.ok) {
        const data = await response.json()
        setPosts(data)
        localStorage.setItem('posts', JSON.stringify(data))
      }
      else {
        throw new Error('Network error in fetchPostDetails')
      }
    } catch (err) {
      console.log(err.message)
    }
  }



  useEffect(() => {
    fetchUserDetails()
    fetchPostDetails()
  }, [])


  return (
    <>
      <USERS.Provider value={users}>
        <POSTS.Provider value={posts}>
          <StyledApp >
            <Router>
              <Routes>
                <Route path="/" element={<UserCardList />} />
                <Route path="/users" element={<UserCardList />} />
                <Route path="/users/:id" element={<UserDetails />} />
              </Routes>
            </Router>
          </StyledApp>
        </POSTS.Provider>
      </USERS.Provider>
    </>
  )
}

export { USERS, POSTS };

export default App