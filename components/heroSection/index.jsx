const HeroSection = ({ imgUrl, title }) => {
  return (
    <>
    <div className="hero-image" 
    style={{ backgroundImage: `linear-gradient(rgb(20 16 16 / 50%), rgb(188 109 109 / 50%)), url("${imgUrl}")` }}>
          <div className="hero-text">
            <h2 style={{fontSize: "60px", fontWeight: "600"}}>{title}</h2>
          </div>
        </div>
    </>
  );
};

export default HeroSection;
