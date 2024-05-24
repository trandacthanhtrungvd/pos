import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "flowbite-react";
import { HiShoppingCart } from "react-icons/hi";
import { OrderContext } from "@context/OrderContext";
import { MenuContext } from "@context/MenuContext";

const DrinkDetails = () => {
  const navigate = useNavigate();
  const menuData = useContext(MenuContext);
  const { drinks } = menuData;

  const { drinkId } = useParams();
  const drink = drinks.find((drink) => drink.id == drinkId);

  const { orderedDrinks, setOrderedDrinks } = useContext(OrderContext);
  const [amount, setAmount] = useState(1);

  console.log(orderedDrinks);

  return (
    <div className="flex flex-col gap-8 pt-4">
      <div className="flex gap-8">
        <img src="/img/drinks/1.jpg" alt="Drink Image" className="rounded-lg" />
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <div className="text-4xl font-semibold">{drink.name}</div>
            <div className="text-xl font-semibold text-blue-500">
              {drink.price} VND
            </div>
            <div>
              <div className="text-lg font-semibold">Số lượng</div>
              <input
                className="rounded-lg"
                type="number"
                name="amount"
                id="amount"
                value={amount}
                onChange={(e) => {
                  setAmount(e.target.value);
                }}
              />
            </div>
          </div>
          <Button
            color="blue"
            onClick={() => {
              setOrderedDrinks((prev) => {
                let curr = [];
                let found = false;
                prev.forEach((drink) => {
                  if (drink.id == drinkId) {
                    drink.amount = Number(drink.amount) + Number(amount);
                    found = true;
                  }
                  curr.push(drink);
                });

                if (!found) {
                  curr.push({
                    id: drinkId,
                    name: drink.name,
                    price: drink.price,
                    amount: amount,
                  });
                }

                return curr;
              });
              navigate("/customer/drinks");
            }}
          >
            <HiShoppingCart className="mr-2 h-5 w-5" />
            Thêm vào giỏ hàng
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-2xl font-semibold">Mô tả sản phẩm</div>
        <div>Mô tả sản phẩm</div>
      </div>
    </div>
  );
};

export default DrinkDetails;
