import React from 'react'
import { useAuth } from '../../contexts/authContext'
import NavBar from '../../assets/components/NavBar/NavBar'
import ChatWindow from '../../assets/components/ChatWindow/ChatWindow'

const Home = () => {
    const { currentUser } = useAuth()
    return (
     <>
        <div className='text-2xl font-bold pt-14'>Hello {currentUser.displayName ? currentUser.displayName : currentUser.email}, you are now logged in.</div>
    
        <div className='flex h-screen'>
          <NavBar />
          <ChatWindow />
        </div>
     
     </>
    )
}

export default Home