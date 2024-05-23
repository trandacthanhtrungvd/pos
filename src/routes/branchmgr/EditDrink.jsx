import { MenuContext } from "@context/MenuContext";
import axios from "axios";
import { Button, Label, TextInput } from "flowbite-react";
import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditDrink = () => {
  const navigate = useNavigate();

  const menuData = useContext(MenuContext);
  const { drinks, setDrinks } = menuData;

  const { drinkId } = useParams();
  const currentDrink = drinks.find((drink) => drink.id == drinkId);

  const [info, setInfo] = useState({
    name: currentDrink.name,
    price: currentDrink.price,
    img: currentDrink.img,
  });

  const handleUpdateMenu = (event) => {
    event.preventDefault();
    axios
      .put(`http://localhost:8080/menu/update/${drinkId}`, {
        Item: info.name,
        Cost: info.price,
        Item_photo: info.img,
      })
      .then(() => {
        setDrinks((prev) =>
          prev.map((drink) => {
            if (drink.id == drinkId) {
              drink.name = info.name;
              drink.price = info.price;
              drink.img = info.img;
            }
            return drink;
          }),
        );
        navigate("/branchmgr/drinks");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="mx-auto w-1/2 py-8">
      <form action="#">
        <div className="mb-2 block">
          <Label htmlFor="name" value="Tên món" />
        </div>
        <TextInput
          id="name"
          type="text"
          sizing="md"
          defaultValue={currentDrink.name}
          onChange={(event) => {
            setInfo((prev) => ({
              ...prev,
              name: event.target.value,
            }));
          }}
        />
        <div className="mb-2 block">
          <Label htmlFor="price" value="Giá" />
        </div>
        <TextInput
          id="price"
          name="price"
          type="number"
          sizing="md"
          defaultValue={currentDrink.price}
          onChange={(event) => {
            setInfo((prev) => {
              return {
                ...prev,
                price: event.target.value,
              };
            });
          }}
        />
        <div className="mb-2 block">
          <Label htmlFor="img" value="Hình ảnh" />
        </div>
        <TextInput
          id="img"
          type="text"
          sizing="md"
          defaultValue={currentDrink.img}
          onChange={(event) => {
            setInfo((prev) => ({
              ...prev,
              img: event.target.value,
            }));
          }}
        />
        <Button className="mt-2" onClick={handleUpdateMenu}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default EditDrink;
