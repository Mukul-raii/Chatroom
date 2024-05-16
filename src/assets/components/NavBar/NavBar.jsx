import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../../contexts/authContext'
import { doSignOut } from '../../../firebase/auth'



function NavBar() {

  const navigate = useNavigate()
  const { userLoggedIn } = useAuth()
  return (
    <>
      <div className="bg-purple-700 flex  flex-col items-center justify-between m-2 w-20">
        <div className='p-2 m-8  h-screen '>
          
          <div className=' p-3'>
            <img className="w-10 h11" src="home.png" alt="" />
              <a className='mt-3' href="">Home</a> 
           </div>

           <div className=' p-3'>
            <img className="w-10 h11" src="user.png" alt="" />
              <a className='mt-3' href="">Profile</a> 
           </div>
            
           <div className=' p-3'>
            <img className="w-10 h11" src="logout.png" alt="" />
         

            {
                userLoggedIn
                    ?
                    <>
                        <button onClick={() => { doSignOut().then(() => { navigate('/login') }) }} className=''>Logout</button>
                    </>
                    :
                    <>
                        <Link className='text-sm text-blue-600 underline' to={'/login'}>Login</Link>
                        <Link className='text-sm text-blue-600 underline' to={'/register'}>Register New Account</Link>
                    </>
            }

           </div>
       
        </div>

          
        
      </div>
    </>
  );
}

export default NavBar;
