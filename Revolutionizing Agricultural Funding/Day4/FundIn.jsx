import'../assets/css/Card.css'
import Card from './Card';

function FundIn() {
  return (
    <div className="App">
      <Card
        imageUrl="https://img.freepik.com/free-photo/plants-with-coins-stacked-dirt-banknote_23-2148803946.jpg"
        buttonText="Crop Fund"
        
        />
      <Card
        imageUrl="https://www.hdfcsales.com/blog/wp-content/uploads/2019/02/SIP-Scheme-OPTION-2.jpg"
        buttonText="Land Fund"
        
      />
      <Card
        imageUrl="https://t4.ftcdn.net/jpg/05/74/46/31/360_F_574463118_GxUQA3wKqlukib2Ry1bq57oJgMm89OB0.jpg"
        buttonText="Water Fund"
        
      />
      <Card
        imageUrl="https://navi.com/blog/wp-content/uploads/2022/01/saving-tips.jpg"
        buttonText="Efficient Funds "
      />
    </div>
  );
}

export default FundIn;
