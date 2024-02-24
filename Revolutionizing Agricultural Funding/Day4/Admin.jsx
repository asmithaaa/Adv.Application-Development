
import'../assets/css/Admin.css'
import { FaUserShield } from "react-icons/fa";
import image from'../assets/images/green logo.jpg'
 import video from'../assets/videos/Admins.mp4'
import {BsShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Admin = () => {
return (
    <div className='adminPage flex'>
        <div className='container flex'>

         <div className='videoDiv'>
            <video src={video} autoPlay muted loop></video>

            <div className='textDiv'>
              <h2 className='title'>
              Revolutionizing Agricultural Funding!
              </h2>
              <p>Make a change with a Vision.</p>
            </div>
           <div>
             
            </div>
          </div>
         <div className='formDiv flex'>
           <div className='headerDiv'>
                <img src={image} alt="Logo Image"/>
                <h3>Welcome Back Admin!</h3>
            </div>
            <form action='' className='form grid'>
              <span className='showMessage'>Login Status will go here</span>
                <div className='inputDiv'>
                    <lable htmlFor='adminname'>Admin-name</lable>
                  <div className='input flex'>
                       < FaUserShield className='icon'/>
                        <input type="text" id='adminname' placeholder='Enter Admin-name'/>
                    </div>
                </div>

                <div className='inputDiv'>
                   <lable htmlFor='adminpassword'>Admin-Password</lable>
                    <div className='input flex'>
                        <BsShieldLockFill className='icon'/>
                        <input type="text" id='adminpassword' placeholder='Enter Admin-Password'/>
                    </div>
                </div>
                <Link to="/AdminDashboard">
                  <button type='submit' className='btn flex'>
                  <span>Login</span>
                    <AiOutlineSwapRight className='icon' />
                  </button>
                </Link>
                <span className='icon'>
                 Forget your password?
                 <a href = ''>Click Here</a>
               </span>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Admin;

