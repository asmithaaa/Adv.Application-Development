import'../assets/css/NavBar.css'
import image from'../assets/images/green logo.jpg'
import  { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <div className='navbar'>
        <img src={image} alt='' className='logo'/> 

        <ul>
            <li><Link to='/Home'>Home</Link></li>
            <li><Link to='/FundTerms'>Fund Terms</Link></li>
            <li><Link to='/blogs'>Blogs</Link></li>
            <li><Link to='/privacy'>Privacy & Policies</Link></li>
            <li><Link to='/Dashboard'>DashBoard</Link></li>
            <li><Link to='/contact'>Contact Us</Link></li>
            <li><Link to='/Admin'><button className='btn'><a href='#'>ADMIN LOGIN</a></button></Link></li>
        </ul>
    </div>
  )
}

export default NavBar;
