import React, { useEffect, useState, useContext, useRef } from 'react'
import { useParams } from 'react-router-dom';
import { DateTime } from 'luxon';
import styled from 'styled-components'

import UserPostList from '../organisms/UserPostList'
import UserProfile from '../molecules/UserProfile'
import UserProfileHeader from '../molecules/UserProfileHeader'
import PostPopUp from '../molecules/PostPopUp'

import { POSTS, USERS } from '../../App'


const StyledProfileSection = styled.section`
  padding: 20px;
  @media (max-width:768px){
    padding:0px;
  }
`;

const StyledUserNotFound = styled.div`
  font-weight:300;
  font-size:20px;
  padding:20px;
  width:100%;
  height:300px;
  display:flex;
  align-items:center;
  justify-content:center;
`;


const UserDetails = () => {

    const [countries, setCountries] = useState([])
    const [countryTime, setCountryTime] = useState('00:00:00');
    const [isPaused, setIsPaused] = useState(false);
    const [user, setUser] = useState({});
    const [posts, setPosts] = useState([]);
    const [isPopupVisible, setPopupVisible] = useState(false);
    const [currentPost, setCurrentPost] = useState({});

    const popupRef = useRef(null);

    let users = useContext(USERS)
    let postsContext = useContext(POSTS)

    const { id } = useParams();

    useEffect(() => {
        let allPosts = postsContext;
        let postsSliced;

        if (allPosts.length <= 0) {
            allPosts = JSON.parse(localStorage.getItem('posts'))
        }
        if (allPosts) {
            const filteredPosts = allPosts.filter(post => post.userId === Number(id))
            // postsSliced = filteredPosts.slice(0, 3)
            setPosts(filteredPosts)
        }

    }, [])


    useEffect(() => {

        let allUsers = users;

        if (allUsers.length <= 0) {
            allUsers = JSON.parse(localStorage.getItem('users'))
        }
        if (allUsers) {
            const filteredUserDetails = allUsers.filter(user => {
                return user.id === Number(id)
            })
            setUser(filteredUserDetails[0])
        }

    }, [])



    const fetchAllCountries = async () => {
        try {
            const response = await fetch('http://worldtimeapi.org/api/timezone');
            if (response.ok) {
                const data = await response.json()
                setCountries(data)
            }
            else {
                throw new Error('Network error in fetchPostDetails ')
            }
        } catch (err) {
            console.log(err.message)
        }
    }

    useEffect(() => {
        fetchAllCountries()
    }, [])

    const fetchCountryDetails = async (e) => {
        const selectedCountry = e ? e.target.value : 'Asia/Dubai'
        try {
            const response = await fetch(`http://worldtimeapi.org/api/timezone/${selectedCountry}`);
            if (response.ok) {

                const data = await response.json()
                const datetimeString = data.datetime;
                const timezone = data.timezone;
                const dateTime = DateTime.fromISO(datetimeString, { zone: timezone });
                const formattedTime = dateTime.toFormat('HH:mm:ss');

                setCountryTime(formattedTime)
                setIsPaused(false)
            }
            else {
                throw new Error('Network Error')
            }
        } catch (err) {
            console.log(err.message)
        }
    }

    const togglePause = () => {
        setIsPaused(!isPaused);
    };

    useEffect(() => {
        fetchCountryDetails()
    }, [])

    useEffect(() => {
        let timer;
        if (!isPaused) {
            timer = setInterval(() => {
                const dateTime = DateTime.fromFormat(countryTime, 'HH:mm:ss').plus({ seconds: 1 });
                const newTime = dateTime.toFormat('HH:mm:ss');
                setCountryTime(newTime);
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [isPaused, countryTime]);

    const togglePopup = () => {
        setPopupVisible(!isPopupVisible);
    };

    const closePopup = (e) => {
        if (popupRef.current && !popupRef.current.contains(e.target)) {
            setPopupVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', closePopup);

        return () => {
            document.removeEventListener('mousedown', closePopup);
        };
    }, []);

    return (
        <>
            <section>
                <UserProfileHeader
                    countries={countries}
                    fetchCountryDetails={fetchCountryDetails}
                    countryTime={countryTime}
                    togglePause={togglePause}
                />
                {
                    user ? (
                        <>
                            <StyledProfileSection >
                                <UserProfile user={user} />
                                <UserPostList setCurrentPost={setCurrentPost} togglePopup={togglePopup} posts={posts} />
                            </StyledProfileSection>
                            {
                                isPopupVisible && <PostPopUp currentPost={currentPost} popupRef={popupRef} togglePopup={togglePopup} />
                            }
                        </>
                    ) :
                        (<StyledUserNotFound > User not found</StyledUserNotFound>)
                }

            </section>
        </>
    )
}

export default UserDetails