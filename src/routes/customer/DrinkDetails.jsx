import React from "react";
import { useParams } from "react-router-dom";
import { getDrinks } from "../../../api";
import { Button } from "flowbite-react";
import { HiShoppingCart } from "react-icons/hi";

const DrinkDetails = () => {
  const { drinkId } = useParams();
  const drinks = getDrinks();
  const drink = drinks.find((drink) => drink.id == drinkId);
  console.log(drinks);
  console.log(drinkId);
  console.log(drink);
  return (
    <div className="flex flex-col gap-8 pt-4">
      <div className="flex gap-8">
        <img src="/img/drinks/1.jpg" alt="Drink Image" className="rounded-lg" />
        <div className="flex flex-col justify-between">
          <div>
            <div className="text-4xl font-semibold">{drink.name}</div>
            <div className="text-xl font-semibold text-blue-500">
              {drink.price} VND
            </div>
          </div>
          <Button color="blue">
            <HiShoppingCart className="mr-2 h-5 w-5"/>
            Thêm vào giỏ hàng
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-2xl font-semibold">Mô tả sản phẩm</div>
        <div>Mô tả sản phẩm các thứ</div>
      </div>
    </div>
  );
};

export default DrinkDetails;
