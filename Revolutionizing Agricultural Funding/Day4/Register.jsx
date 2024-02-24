import { Link } from 'react-router-dom';
import'../assets/css/Register.css'
import { MdEmail  } from "react-icons/md";
import video from'../assets/videos/Garden.mp4'
import image from'../assets/images/logo.jpg'
import {BsShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";

const Register = () => {
  return (
    <div className='registerPage flex'>
        <div className='container flex'>

          <div className='videoDiv'>
          <video src={video} autoPlay muted loop></video>
            <div className='textDiv'>
              <h2 className='title'>
              Revolutionizing Agricultural Funding!
              </h2>
              <p>Make a change with a Vision.</p>
            </div>
            <div className='footerDiv flex'>
              <span className='text'>Have an account?</span>
              <button className='btn'><Link to='/Login'>Sign In</Link></button>
            </div>
            <div>
          
            </div>
          </div>
          <div className='formDiv flex'>
            <div className='headerDiv'>
                <img src={image} alt="Logo Image"/>
                <h3>Let Us Know You!</h3>
            </div>
            <form action='' className='form grid'>
                
            <div className='inputDiv'>
                    <lable htmlFor='username'>Username</lable>
                    <div className='input flex'>
                        < MdEmail  className='icon'/>
                        <input type="username" id='username' placeholder='Enter Username'/>
                    </div>
                </div>


                <div className='inputDiv'>
                    <label htmlFor='email'>Email</label>
                    <div className='input flex'>
                        < MdEmail  className='icon'/>
                        <input type="email" id='email' placeholder='Enter Email'/>
                    </div>
                </div>

                <div className='inputDiv'>
                    <lable htmlFor='password'>Password</lable>
                    <div className='input flex'>
                        <BsShieldLockFill className='icon'/>
                        <input type="text" id='password' placeholder='Enter Password'/>
                    </div>
                </div>

                <div className='inputDiv'>
                    <lable htmlFor='acer'>Acer</lable>
                    <div className='input flex'>
                        <BsShieldLockFill className='icon'/>
                        <input type="text" id='acer' placeholder='Enter no of acer'/>
                    </div>
                </div>
                <div className='inputDiv'>
                    <lable htmlFor='monthly income'>Monthly Income certificate</lable>
                    <div className='input flex'>
                        <BsShieldLockFill className='icon'/>
                        <input type="text" id='monthly income' placeholder='Enter Monthly Income'/>
                    </div>
                </div>
                <Link to='/Login'>
                  <button type='submit' className='btn flex'>
                    <span>Register</span>
                    <AiOutlineSwapRight className='icon' />
                  </button>
                </Link>
            </form>
          </div>
        </div>
    </div>
  )
}
export default Register;