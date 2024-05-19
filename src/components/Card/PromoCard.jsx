import React from "react";
import { Link } from "react-router-dom";

const PromoCard = ({imgSrc, title, content}) => {
  return (
    <Link className="flex gap-8 rounded-xl" to={"#"}>
      <img
        className="rounded-xl"
        src={imgSrc}
        alt="Promo Image"
        width={250}
        height={250}
      />
      <div className="flex flex-col gap-2">
        <div className="text-2xl font-semibold">{title}</div>
        <div className="text-base">{content}</div>
      </div>
    </Link>
  );
};

export default PromoCard;
