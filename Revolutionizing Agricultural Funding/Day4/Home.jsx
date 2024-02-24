import video from'../assets/videos/rice.mp4'
import '../assets/css/Home.css';

const Home = () => {
  const handlePlayButtonClick = (videoUrl) => {
    window.open(videoUrl, '_blank');
  };

  const cards = [
    {
      imageUrl: 'https://jayaagri.edu.in/wp-content/uploads/2023/04/shutterstock_742659817_one-photo.jpg',
      title: 'Agriculture Statistics',
      description: 'Crop area statistics of the temporarily settled areas are comprehensive, being based on the complete enumeration method',
      videoUrl: 'https://www.youtube.com/watch?v=TqVhY8wNhQ0',
    },
    {
      imageUrl: 'https://www.completecontroller.com/wp-content/uploads/Agricultural-Profit-101-Complete-Controller.jpg',
      title: 'Investors',
      description: 'By leveraging innovative technologies and financial models, agricultural funding platforms can reach a wider range of stakeholders',
      videoUrl: 'https://www.youtube.com/watch?v=MJVL9HegCr4',
    },
    {
      imageUrl: 'https://images.indianexpress.com/2018/01/indian-farmer.jpg',
      title: 'Farmers',
      description: 'Thoughts and their vision on life is just to be pleased! to get fruit of their hardwork while the happy tears of joy. This gives a big smile in our faces.',
      videoUrl: 'https://www.youtube.com/watch?v=OHfUOB6Fe48',
    },
  ];

  return (
    <div className="home">
      <div className="video-background">
        <video src={video} autoPlay muted loop/>
        <div className="video-text">
          <h1>Revolutionizing agricultural funding is to address longstanding challenges and inefficiencies 
            within the agricultural finance sector while unlocking new opportunities for farmers, agribusinesses
            , and agricultural projects !</h1>
        </div>
      </div>
      <div className="card-container">
        <h1>Recent News :</h1>
        {cards.map((card, index) => (
          <div className="card1" key={index}>
            <img src={card.imageUrl} alt={card.title} />
            <h2>{card.title}</h2>
            <p>{card.description}</p>
            <button onClick={() => handlePlayButtonClick(card.videoUrl)}><h2>Play</h2></button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;