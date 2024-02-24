// FundsPage.js
import '../assets/css/FundTerms.css';
import { Link } from 'react-router-dom';
import image from'../assets/images/riceField.jpg'

function Funds() {
  return (
    <div className="funds-page">
      <div className="background-image">
        <img src={image} alt="Image"/>
        <h1 className="heading">HELPING FARMERS WIN 
        what is right for them
        ITS OUR RIGHT TO PROVIDE YOU THE SOURCE!</h1>
        <button className="fund-requirements-btn"><Link to='/Login'>Fund Requirements</Link></button>
      </div>
      <div className="investors-section">
        <h2>Major Investors</h2>
        <div className="cards-container">
      
          <div className="card">
            <img src="https://streetfins.com/wp-content/uploads/2023/05/merlin_168487071_758ee693-dee1-4a5d-bb72-61d989164577-superJumbo.jpg" alt="Card" />
          </div>

          <div className="card">
            <img src="https://static.javatpoint.com/top10-technologies/images/top-10-mnc-companies-in-india6.png" alt="Card" />
            
          </div>

          <div className="card">
            <img src="https://img.etimg.com/thumb/width-1200,height-900,imgsize-312755,resizemode-75,msid-49330399/news/company/corporate-trends/indian-companies-fail-to-find-a-place-in-top-25-mnc-to-work-with-google-tops-list.jpg" alt="Card" />
          </div>

          <div className="card">
            <img src="https://static.javatpoint.com/top10-technologies/images/top-10-mnc-companies-in-india4.png" alt="Card" />
            
          </div>

          {/* Repeat for other cards */}
        </div>
      </div>
    </div>
  );
}

export default Funds;
