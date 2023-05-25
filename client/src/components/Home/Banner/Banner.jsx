import "./Banner.scss";
import BannerImg from "../../../assets/banner-img old.png";
const Banner = () => {
  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          <h1>SALES</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus impedit quis magnam doloremque fugit debitis ex,
            minima tempora. Veniam quasi commodi possimus maxime similique
            necessitatibus qui consequatur perferendis sequi itaque.
          </p>
          <div className="ctas">
            <div className="banner-cta">Read More</div>
            <div className="banner-cta v2 ">Shop Now</div>
          </div>
        </div>

        <img className="banner-img" src={BannerImg} alt="Image" />
      </div>
    </div>
  );
};

export default Banner;
