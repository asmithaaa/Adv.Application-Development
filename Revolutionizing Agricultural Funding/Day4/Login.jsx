
 import'../assets/css/Login.css'
 import { Link } from 'react-router-dom';
 import { FaUserShield } from "react-icons/fa";
 import image from'../assets/images/green logo.jpg'
  import video from'../assets/videos/Garden.mp4'
 import {BsShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";

const Login = () => {
 return (
     <div className='loginPage flex'>
         <div className='container flex'>

          <div className='videoDiv'>
             <video src={video} autoPlay muted loop></video>

             <div className='textDiv'>
               <h2 className='title'>
               Revolutionizing Agricultural Funding !
               </h2>
               <p>Make a change with a Vision.</p>
             </div>
             <div className='footerDiv flex'>
               <span className='text'>Do not have an account?</span>
               <button className='btn'><Link to='/Register'>Sign Up</Link></button>
             </div>
            <div>
              
          
             </div>
           </div>
          <div className='formDiv flex'>
            <div className='headerDiv'>
                 <img src={image} alt="Logo Image"/>
                 <h3>Welcome Back!</h3>
             </div>
             <form action='' className='form grid'>
               <span className='showMessage'>Login Status will go here</span>
                 <div className='inputDiv'>
                     <lable htmlFor='username'>Username</lable>
                   <div className='input flex'>
                        < FaUserShield className='icon'/>
                         <input type="text" id='username' placeholder='Enter Username'/>
                     </div>
                 </div>

                 <div className='inputDiv'>
                    <lable htmlFor='password'>Password</lable>
                     <div className='input flex'>
                         <BsShieldLockFill className='icon'/>
                         <input type="text" id='password' placeholder='Enter Password'/>
                     </div>
                 </div>
                 <Link to='/FundIn'>
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

 export default Login

