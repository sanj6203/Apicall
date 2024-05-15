import React from "react";
import "./RandomUser.css";

const RandomUser = (userData) => {
  console.log(userData.data);

  return (
    <>
      <div className="random-user">
        <img src={userData.data.picture.large} alt="" />
        <h3>{userData.data.name.first}</h3>
        <p>{userData.data.email}</p>
        <p>
          {userData.data.location.city}, {userData.data.location.state}
        </p>
      </div>
    </>
  );
};

export default RandomUser;
