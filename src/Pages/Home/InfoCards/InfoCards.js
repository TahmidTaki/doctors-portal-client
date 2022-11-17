import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";

const InfoCards = () => {
  const cardData = [
    {
      id: 1,
      name: "Opening Hour",
      description: "Open 9.00 am to 5.00 pm everyday",
      icon: clock,
      bgClass: "bg-gradient-to-r from-primary to-secondary",
    },
    {
      id: 2,
      name: "Our Locations",
      description: "Open 9.00 am to 5.00 pm everyday",
      icon: marker,
      bgClass: "bg-accent",
    },
    {
      id: 3,
      name: "Contact Us",
      description: "+60102812636",
      icon: phone,
      bgClass: "bg-gradient-to-r from-primary to-secondary",
    },
  ];

  return (
    <div className="grid mx-auto mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
      {cardData.map((cd) => (
        <InfoCard key={cd.id} cd={cd}></InfoCard>
      ))}
    </div>
  );
};

export default InfoCards;
