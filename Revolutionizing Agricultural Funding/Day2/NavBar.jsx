import'../assets/css/NavBar.css'
import logo from '../assets/images/green logo.jpg'
import { IoMdSpeedometer } from "react-icons/io";
import { HiHome } from "react-icons/hi2";
import { HiInformationCircle } from "react-icons/hi";
import { PiPiggyBankFill } from "react-icons/pi";
import { MdPlaylistAddCheckCircle } from "react-icons/md";
import { FaBlog } from "react-icons/fa";
import { AiOutlineSolution } from "react-icons/ai";
import { FaChartPie } from "react-icons/fa6";
import { MdContactMail } from "react-icons/md";



const NavBar = () => {
  return (
    <div className="sideBar grid">
        <div className="logoDiv flex">
            <img src={logo} alt="Image Name" />
               <h2>Agr.Revo</h2> 
        </div>
        <div className="menuDiv">
            <h3 className="divTitle">
                QUICK MENU
            </h3>
            <ul className='menuLists grid'>
                <li className="listItem">
                    <a href='#' className='menuLink flex'>
                    <IoMdSpeedometer className='icon'/>
                    <span className="smallText">
                        DashBoard
                    </span>

                    </a>
                </li>

                <li className="listItem">
                    <a href='#' className='menuLink flex'>
                    <HiHome  className='icon'/>
                    <span className="smallText">
                        Home
                    </span>

                    </a>
                </li>

                <li className="listItem">
                    <a href='#' className='menuLink flex'>
                    < HiInformationCircle className='icon'/>
                    <span className="smallText">
                        About
                    </span>

                    </a>
                </li>

                <li className="listItem">
                    <a href='#' className='menuLink flex'>
                    < PiPiggyBankFill className='icon'/>
                    <span className="smallText">
                        Fund Terms
                    </span>

                    </a>
                </li>

                <li className="listItem">
                    <a href='#' className='menuLink flex'>
                    < MdPlaylistAddCheckCircle className='icon'/>
                    <span className="smallText">
                        Privacy & Policies
                    </span>

                    </a>
                </li>

                <li className="listItem">
                    <a href='#' className='menuLink flex'>
                    < FaBlog className='icon'/>
                    <span className="smallText">
                        Blog
                    </span>

                    </a>
                </li>

                <li className="listItem">
                    <a href='#' className='menuLink flex'>
                    < AiOutlineSolution className='icon'/>
                    <span className="smallText">
                        Solution
                    </span>

                    </a>
                </li>

            </ul>
        </div>

        <div className="menuDiv">
            <h3 className="divTitle">
                SETTINGS
            </h3>
            <ul className='menuLists grid'>
                <li className="listItem">
                    <a href='#' className='menuLink flex'>
                    <FaChartPie className='icon'/>
                    <span className="smallText">
                        Charts
                    </span>

                    </a>
                </li>

                <li className="listItem">
                    <a href='#' className='menuLink flex'>
                    <MdContactMail  className='icon'/>
                    <span className="smallText">
                        Contact
                    </span>
                    </a>
                </li>

            </ul>
        </div>
    
    </div>
  )
}

export default NavBar;