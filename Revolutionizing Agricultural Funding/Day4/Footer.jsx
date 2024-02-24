
import'../assets/css/Footer.css'
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { BiLogoInstagramAlt } from "react-icons/bi";

const Footer = () => {
  return (
       <div className="footer">
        <div className="sb_footer section_padding">
            <div className="sb_footer-Links">
                <div className="sb_footer_links-div">
                    <h4> For Business</h4>
                    <a href="/employee">
                        <p>Employee</p>
                    </a>

                    <a href="/health of Plants">
                        <p>Health of Plants</p>
                    </a>

                    <a href="/individual">
                        <p>Individual</p>
                    </a>
                </div>
                <div className="sb_footer-links_div">
                    <h4>Resources</h4>
                    <a href="/resoure">
                        <p>Resource Center</p>
                    </a>

                    <a href="/resoure">
                        <p>Testimonials</p>
                    </a>

                    <a href="/resoure">
                        <p>STV</p>
                    </a>
                </div>
                <div className="sb_footer-links_div">
                    <h4>Patners</h4>
                    <a href="/about">
                        <p>About</p>
                    </a>

                    <a href="/press">
                        <p>Press</p>
                    </a>
                    
                    <a href="/career">
                        <p>Career</p>
                    </a>

                    <a href="/contact">
                        <p>Contact</p>
                    </a>
                </div>
                <div className="sb_footer-links_div">
                    <h4>Coming soon on </h4>
                    <button><a href="https://www.facebook.com/asmithaa.asmithaa"><FaFacebook /></a></button>
                    <button><a href="https://twitter.com/home"><FaTwitter /></a></button>
                    <button><a href="https://www.linkedin.com/feed/"><FaLinkedin /></a></button>
                    <button><a href="https://www.instagram.com/melodies_of_melora/"><BiLogoInstagramAlt /></a></button>
                </div>
            </div>
            </div>
            <hr></hr>
            <div className="sb_footer_below">
                <div className="sb_footer-copyright">
                    <p>
                        @{new Date().getFullYear()} codeInn. All right reserved.
                    </p>
                </div>
                <div className="sb_footer-below-links">
                    <a href="/terms"><div><p>Terms & Conditions</p></div></a>
                    <a href="/terms"><div><p>Privacy</p></div></a>
                    <a href="/terms"><div><p>Security</p></div></a>
                    <a href="/terms"><div><p>Cookies Declaration</p></div></a>
                </div>
            </div>
        </div> 
  )
}

export default Footer;