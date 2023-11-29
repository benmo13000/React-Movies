// import React from 'react';

// const ActorCard = ({ actor }) => {
//   // You can use the Lorem Picsum service for background images
//   const backgroundImageUrl = `https://picsum.photos/200/300?random=${actor}`;

//   return (
//     <div style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
//       <div>
//         <h3>{actor}</h3>
//       </div>
//     </div>
//   );
// };

// export default ActorCard;


function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

export default function ActorCard({ actor }) {
  let num = getRandomNumber(250, 400);

  return (
    <div
      style={{
        background: `url(https://picsum.photos/${num}) no-repeat center center`,
        WebkitBackgroundSize: "cover"
      }}
      className="item-card"
    >
      <div className="title">
        <h1>{actor}</h1>
      </div>
    </div>
  );
}
