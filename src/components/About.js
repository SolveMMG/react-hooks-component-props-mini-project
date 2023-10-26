import React from "react";


function About({ image, about }) {
  const defaultImg = image || "https://via.placeholder.com/215";
  return (
    <aside>
      <img src={defaultImg} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}

export default About;
