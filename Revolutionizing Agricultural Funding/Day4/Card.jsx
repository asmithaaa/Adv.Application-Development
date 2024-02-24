
 // Import CSS file

// eslint-disable-next-line react/prop-types
const Card = ({ imageUrl, buttonText}) => {
  return (
    <div className="card">
      <img src={imageUrl} alt="Image" />
      <button><a href="https://www.hdfcbank.com/agri">{buttonText}</a></button>
    </div>
  );
};

export default Card;
