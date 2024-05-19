import { Edit, Trash } from "@icons";
import React, { useState } from "react";

const EditDrinkCard = ({ id, name, price, image_url }) => {
  // type: details, edit?     
  const [details, setDetails] = useState(true);

  const [data, setData] = useState({
    id: id,
    name: name,
    price: price,
    image_url: image_url,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  var detailsCard = (
    <div className="flex h-[332px] flex-col justify-between rounded-lg border border-base-dark-line bg-base-dark-bg-2">
      <div className="mx-auto flex w-36 flex-col">
        <div className="flex flex-col items-center gap-4 pb-4 pt-6">
          <img
            src={image_url}
            alt="drink-img"
            className="h-36 w-36 rounded-full"
          />
          <div className="flex flex-col text-center">
            <div>{data.name}</div>
            <div>$ {data.price}</div>
          </div>
        </div>
      </div>
      <button
        onClick={() => setDetails(false)}
        className="flex w-full justify-center gap-2 bg-primary bg-opacity-25 py-4 text-center text-primary"
      >
        <Edit />
        Edit
      </button>
    </div>
  );

  var editCard = (
    <div className="flex h-[332px] flex-col rounded-lg border border-base-dark-line bg-base-dark-bg-2">
      <form className="flex flex-grow flex-col gap-2 p-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="name">Name</label>
          <input
            className="border border-base-dark-line bg-base-dark-bg-2 pl-2"
            type="text"
            name="name"
            id="name"
            value={data.name}
            onInput={handleInputChange}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="price">Price</label>
          <input
            className="border border-base-dark-line bg-base-dark-bg-2 pl-2"
            type="number"
            name="price"
            id="price"
            value={data.price}
            onInput={handleInputChange}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="image_url">Image</label>
          <input
            className="border border-base-dark-line bg-base-dark-bg-2 pl-2"
            type="text"
            name="image_url"
            id="image_url"
            value={data.image_url}
            onInput={handleInputChange}
          />
        </div>
      </form>
      <div className="flex">
        <button
          className="flex w-full justify-center gap-2 bg-accents-red bg-opacity-25 py-4 text-center text-accents-red"
          onClick={() => {
            // TODO: Handle delete drink -> Send data to API

            // Change back to details
            setDetails(true);
          }}
        >
          <Trash />
          Delete
        </button>
        <button
          className="flex w-full justify-center gap-2 bg-accents-green bg-opacity-25 py-4 text-center text-accents-green"
          onClick={() => {
            // TODO: Handle edit drink -> Send data to API
            // If updated successfully -> Show success dialog
            // fetch("#", {
            //   method: "POST",
            //   headers: {
            //     Accept: "application/json",
            //     "Content-Type": "application/json",
            //   },
            //   body: JSON.stringify(data),
            // })
            //   .then((response) => response.json)
            //   .then(console.log(json))
            //   .catch((err) => console.log(err));

            // Change back to details
            setDetails(true);
          }}
        >
          <Edit />
          Save
        </button>
      </div>
    </div>
  );

  return details ? detailsCard : editCard;
};

export default EditDrinkCard;
