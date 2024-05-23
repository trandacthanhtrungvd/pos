import PromoCard from "@components/Card/PromoCard";
import React from "react";

const promos = [
  {
    id: 0,
    imgSrc: "/img/promos/0.webp",
    title: "Combo siêu hot, giá chỉ tử 50K",
    content: "Thời gian diễn ra: 17/05/2024 - 19/05/2024",
  },
  {
    id: 1,
    imgSrc: "/img/promos/1.webp",
    title: "Giảm giá 25% cho hoá đơn từ 200K",
    content: "Thời gian diễn ra: 01/05/2024 - 31/05/2024",
  },
  {
    id: 2,
    imgSrc: "/img/promos/2.jpg",
    title: "Đổi vỏ chai lấy đồ uống miễn phí",
    content: "Thời gian diễn ra: 01/05/2024 - 31/05/2024",
  },
  {
    id: 3,
    imgSrc: "/img/promos/3.jpg",
    title: "Up size miễn phí mỗi thứ tư hàng tuần",
    content: "Thời gian diễn ra: 01/05/2024 - 31/05/2024",
  },
];

const Promos = () => {
  return (
    <div className="flex flex-col gap-8 py-4">
      {promos.map((promo) => (
        <PromoCard
          key={promo.id}
          imgSrc={promo.imgSrc}
          title={promo.title}
          content={promo.content}
        />
      ))}
    </div>
  );
};

export default Promos;
