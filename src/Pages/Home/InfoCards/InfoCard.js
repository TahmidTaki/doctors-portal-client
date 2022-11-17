import React from "react";

const InfoCard = ({ cd }) => {
  const { name, description, icon, bgClass } = cd;
  return (
    <div className={`card text-center p-6 shadow-xl ${bgClass} flex md:flex-row`}>
      <figure className="flex">
        <img src={icon} alt="Shoes" />
      </figure>
      <div className="card-body text-white">
        <h2 className="text-2xl font-bold">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
