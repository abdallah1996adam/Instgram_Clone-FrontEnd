import React from "react";
import "./profile.scss";

const Profile = () => {
  return (
    <div className="conatiner">
      <div className="wrapper">
        <div className="profile">
          <img
            className="profile-pic"
            alt="harlyqueen"
            src="https://www.repliquemangacine.fr/4019-home_default/harley-quinn-batte-de-baseball.jpg"
          />
        </div>
        <div>
          <h4>harly queen</h4>
          <div className="posts">
            <h6>20 posts </h6>
            <h6>20 M followers </h6>
            <h6>6 following </h6>
          </div>
        </div>
      </div>
      <div className="gallery">
        <img
          className="photos"
          src="https://www.tomsguide.fr/content/uploads/sites/2/2017/12/harley-quinn.jpg"
          alt="harly"
        />
        <img
          className="photos"
          src="https://www.tomsguide.fr/content/uploads/sites/2/2017/12/harley-quinn.jpg"
          alt="harly"
        />
        <img
          className="photos"
          src="https://www.tomsguide.fr/content/uploads/sites/2/2017/12/harley-quinn.jpg"
          alt="harly"
        />
        <img
          className="photos"
          src="https://www.tomsguide.fr/content/uploads/sites/2/2017/12/harley-quinn.jpg"
          alt="harly"
        />
        <img
          className="photos"
          src="https://www.tomsguide.fr/content/uploads/sites/2/2017/12/harley-quinn.jpg"
          alt="harly"
        />
        <img
          className="photos"
          src="https://www.tomsguide.fr/content/uploads/sites/2/2017/12/harley-quinn.jpg"
          alt="harly"
        />
      
      
      </div>
    </div>
  );
};

export default Profile;
