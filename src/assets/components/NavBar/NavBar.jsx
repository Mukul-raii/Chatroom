function NavBar() {
  return (
    <>
      <div className="bg-purple-700 flex  flex-col items-center justify-between m-2 w-20">
        <div className='p-2 m-8  h-screen '>
          
          <div className=' p-3'>
            <img className="w-10 h11" src="home.png" alt="" />
              <a href="">Home</a> 
           </div>

           <div className=' p-3'>
            <img className="w-10 h11" src="user.png" alt="" />
              <a href="">Profile</a> 
           </div>
            
           <div className=' p-3'>
            <img className="w-10 h11" src="logout.png" alt="" />
         

              <a href="">Logout</a> 
           </div>
       
        </div>

          
        
      </div>
    </>
  );
}

export default NavBar;
